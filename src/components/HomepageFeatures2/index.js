import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Multi-cloud native',
    Svg: require('@site/static/img/threeclouds1.svg').default,
    description: (
      <>
Go beyond a single cloud and leverage the resources and features available across many clouds simultaneously. No VPNs, tunnels or any special networking is required. 
      </>
    ),
  },
  {
    title: 'One cloud or many',
    Svg: require('@site/static/img/threeclouds2.svg').default,
    description: (
      <>
The most appropriate cloud for each job is used, based on user-specified requirements and preferences.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
