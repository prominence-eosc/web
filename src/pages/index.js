import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageFeatures2 from '@site/src/components/HomepageFeatures2';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--info button--lg"
            to="https://eosc.prominence.cloud">
            Get started
          </Link>
      </div>
      </div>
    </header>
  );
}

function HomepageContent1() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner1)}>
      <div className="container">
        <h1 className="hblack">A serverless experience for HTC & HPC</h1>
<p className="hblacksmall">Just run your jobs, there is no need to create or manage clusters</p>
<img src={require('@site/static/img/code1.png').default} width="580px" />
      </div>
    </header>
  );
}

function HomepageContent2() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner2)}>
      <div className="container">
        <h1 className="hblack">One cloud or many</h1>
<p className="hblacksmall">Run jobs across many clouds or one cloud</p>
      </div>
    </header>
  );
}

function HomepageContent3() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner3)}>
      <div className="container">
        <h1 className="hwhite">Improve resource utilisation</h1>
<p className="hwhitesmall">Run jobs on across multiple clouds opportunistically, utilising idle resources</p>
      </div>
    </header>
  );
}

function HomepageContent4() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner2)}>
      <div className="container">
        <h1 className="hblack">No more login nodes</h1>
<p className="hblacksmall">Access any computing resources, from anywhere</p>
<img src={require('@site/static/img/overview.png').default} width="780px" />
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageContent1 />
        <HomepageFeatures2 />
        <HomepageContent3 />
        <HomepageContent4 />
      </main>
    </Layout>
  );
}
