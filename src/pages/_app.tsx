import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { isServer } from "@/utils/utils";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/graphql/apolloClient";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  console.log("App:isServer", isServer());
  console.log("App:pageProps", pageProps);
  console.log("App:Component", Component);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
