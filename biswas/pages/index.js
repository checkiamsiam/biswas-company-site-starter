import Head from "next/head";
import HomeBanner from "../components/Home/HomeBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Biswas Technology</title>
        <meta name="description" content="home page of biswas technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeBanner />
    </>
  );
}
