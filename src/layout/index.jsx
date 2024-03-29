import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import "../../node_modules/tachyons/css/tachyons.min.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </div>
    );
  }
}
