import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import HeroSection from "../components/HeroSection/HeroSection";
import NavBar from "../components/NavBar/NavBar";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="bg-black">
          <Helmet title={config.siteTitle} />
          <SEO />
          <NavBar />
          <HeroSection />
        </div>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        />
      </Layout>
    );
  }
}

export default Index;