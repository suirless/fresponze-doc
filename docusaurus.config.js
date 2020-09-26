module.exports = {
  title: 'Fresponze',
  tagline: 'Fast, simple and modern audio middleware for game engines',
  url: 'https://suirless.github.io',
  baseUrl: '/Fresponze/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'suirless', // Usually your GitHub org/user name.
  projectName: 'Fresponze', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Fresponze',
      logo: {
        alt: 'Suirless logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/suirless/Fresponze',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'API References',
              to: 'docs/api_overview/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/DSRhSha',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/suirless/Fresponze',
            },
	    {
              label: 'Suirless',
              href: 'https://suirless.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Suirless.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/suirless/Fresponze',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
