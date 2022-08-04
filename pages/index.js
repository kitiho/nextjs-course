import React from 'react'
import fs from 'fs/promises'
import path from 'path'
const Home = (props) => {
  const { products } = props
  return (
    <div>{products.map(v => <li key={v.id}>{v.title}</li>)}</div>
  )
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data/dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {
    props: {
      products: data.products,
    },
  }
}
export default Home
