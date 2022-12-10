// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'High throughput and high performance computing without servers or clusters',
  tagline: 'Run containerised jobs across many clouds without managing infrastructure',
  url: 'https://prominence.cloud',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eoscprominence', // Usually your GitHub org/user name.
  projectName: 'web', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PROMINENCE',
        items: [
          {
            type: 'doc',
            docId: 'introduction/introduction',
            position: 'left',
            label: 'Documentation',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          { 
            title: 'Product',
            items: [
              { 
                label: 'Access',
                to: 'https://eosc.prominence.cloud',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: 'introduction/introduction',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/prominence-eosc/',
              },
            ],
          },
        ]
      },
      prism: {
        theme: lightCodeTheme
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      }
    }),
};

module.exports = config;
