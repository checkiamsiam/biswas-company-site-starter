import Head from "next/head";
import HomeBlog from "../components/Home/Blog";
import HomeAbout from "../components/Home/HomeAbout";
import HomeBanner from "../components/Home/HomeBanner";
import Services from "../components/Home/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Biswas Technology</title>
        <meta name="description" content="home page of biswas technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeBanner />
      <Services />
      <HomeAbout />
      <HomeBlog/>
    </>
  );
}
