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
    </>
  )
}

export default Solutions

export function getStaticProps() {
  client.getEntry('6hPjOxlhJFsYZJGk6lbH54').then(function (entry) {
    // logs the entry metadata
    console.log(entry.sys);
  
    // logs the field with ID title
    console.log(entry.fields.title);
  });

  return {
    props: {

    }
  }
}