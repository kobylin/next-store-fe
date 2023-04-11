import ProductSearch from "@/components/ProductSearch/ProductSearch";
import Head from "next/head";

export default function SearchPage() {
  return (
    <>
      <Head>
        <title>Next JS Store | Search </title>
        <meta name="description" content="Next JS Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductSearch />
    </>
  );
}
