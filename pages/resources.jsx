import React from 'react'
import * as contentful from 'contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "heading-2") {
        return (
          <h2 className='text-3xl'>
            {node.data.target.fields.heading2}
          </h2>
        )
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <Image
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
  },
};

const Resources = (props) => {

  const { postId, title, body, heroImage } = props;

  return (
    <div className='my-20 mx-8'>
      <h1 className='mb-4'>
        {title}
      </h1>     
      <Image src={`https:${heroImage.fields.file.url}`} alt={props.title} width={heroImage.fields.file.details.image.width} height={heroImage.fields.file.details.image.height} />
      <div>
        {documentToReactComponents(body, renderOptions)}
      </div>
    </div>
  )
}

export default Resources

export async function getStaticProps() {
  const post = await client.getEntry('6hPjOxlhJFsYZJGk6lbH54');

  return {
    props: {
      ...post.fields
    }
  }
}