import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import HeroSection from "../components/HeroSection/HeroSection";
import NavBar from "../components/NavBar/NavBar";
import ArticleSection from "../components/ArticleSection/ArticleSection";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <NavBar />
          <HeroSection />
          <ArticleSection props={this.props} />
        </div>
      </Layout>
    );
  }
}

export default Index;