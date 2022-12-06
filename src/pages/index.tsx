import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="flex flex-col justify-center items-center py-[30vh]">
      <div className="container">
        <div className="text-center">
          <h1 className="font-bold text-5xl text-primary">{siteConfig.title}</h1>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Figmotion is an animation plugin for Figma">
      <HomepageHeader />
    </Layout>
  );
}
