import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components';

import { Text, Flex } from 'rebass';

const Content = styled.p`
  color: #A8A9AC;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/*<Text as='h1' fontSize={20}>Hello people</Text>*/}
    {/*<Content>Working in progress</Content>*/}
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
