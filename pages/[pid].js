import React from 'react'
import path from 'path'
import fs from 'fs/promises'
const ProductDetai = (props) => {

  const product = props.product
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const productId = params.pid
  const filePath = path.join(process.cwd(), 'data/dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {
    props: {
      product: data.products.find(v => v.id === productId)
    }
  }
}
export async function getStaticPaths(context) {
  return {
    paths: [
      {
        params: {
          pid: 'p1'
        }
      },
      {
        params: {
          pid: 'p2'
        }
      },
      {
        params: {
          pid: 'p3'
        }
      },
    ],
    fallback: false
  }
}

export default ProductDetai
