import React from 'react'
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

export default function PageBody({ children }) {
  return (
    <div style={{backgroundColor:'yellow'}}>
      <Layout>
        <Header>Header</Header>
        <Content>{ children }</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}