import React from 'react'
import UnderConstruction from '../components/UnderConstruction'
import * as contentful from 'contentful';

var client = contentful.createClient({
  space: 'xgm1ky8p6xht',
  accessToken: 'TW6wAfnLggsoSyJTsCvx_m-lxhsj0XoE_DFARKgLDm0',
});

const Solutions = (props) => {
  return (
    <>
      <UnderConstruction />
      <h1>
        {props.title}
      </h1>
    </>
  )
}

export default Solutions

export async function getStaticProps() {
  const post = await client.getEntry('6hPjOxlhJFsYZJGk6lbH54');



  return {
    props: {
      title: post.fields.title,
      body: post.fields.body,
      heroImage: post.fields.heroImage
    }
  }
}