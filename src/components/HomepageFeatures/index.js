import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Run jobs from anywhere',
    Svg: require('@site/static/img/feature1.svg').default,
    description: (
      <>
Manage jobs using a simple batch system style command line interface or interact programmatically using a RESTful API. 
      </>
    ),
  },
  {
    title: 'Invisible infrastructure',
    Svg: require('@site/static/img/feature2.svg').default,
    description: (
      <>
All infrastructure provisioning is handled completely automatically and is totally invisible to the user. 
      </>
    ),
  },
  {
    title: 'Reliability & reproducibility',
    Svg: require('@site/static/img/feature3.svg').default,
    description: (
      <>
All jobs are run in containers to ensure they will run reliably anywhere and are reproducible.
      </>
    ),
  },
  {
    title: 'Workflows',
    Svg: require('@site/static/img/feature4.svg').default,
    description: (
      <>
Construct complex workflows by specifying the dependencies between different jobs. 
      </>
    ),
  },
  {
    title: 'MPI ready',
    Svg: require('@site/static/img/feature5.svg').default,
    description: (
      <>
Run multi-node Open MPI, Intel MPI or MPICH jobs in addition to single-node jobs. 
      </>
    ),
  },
  {
    title: 'Data access',
    Svg: require('@site/static/img/feature6.svg').default,
    description: (
      <>
Jobs can access data transparently from OneData, WebDAV or object storage. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
