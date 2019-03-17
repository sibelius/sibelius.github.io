/**
 * Layout component that queries for data
 */

import React from "react"
import {graphql, useStaticQuery } from "gatsby";
import styled, { createGlobalStyle } from 'styled-components'

import Header from "./header";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #292B2F;
  }
`;

const Footer = styled.footer`
  color: #A8A9AC;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        {/*<Footer>*/}
        {/*  © {new Date().getFullYear()}, Sibelius Seraphini*/}
        {/*</Footer>*/}
      </div>
    </>
  );
};

export default Layout
