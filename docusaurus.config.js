// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OnlyCoiners Documentation",
  tagline: "Documentation for the OnlyCoiners protocol",
  url: "https://docs.onlycoiners.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "onlycoiners", // Usually your GitHub org/user name.
  projectName: "onlycoiners-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/onlycoiners/docs/tree/main",
          lastVersion: "current",
          includeCurrentVersion: true,
          versions: {
            current: {
              label: "Current",
              path: "/",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  scripts: [
    // ,
    { src: "/js/custom.js", async: true },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Documentation",
        logo: {
          alt: "OnlyCoiners",
          src: "img/onlycoiners-logo.png",
        },
        items: [
          {
            href: "https://github.com/onlycoiners",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      announcementBar: {
        content:
          '<strong>⭐️ If you like OnlyCoiners, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/OnlyCoiners/docs">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/OnlyCoiners">Twitter</a> ⭐️</strong>',
        backgroundColor: "#FD627A",
        textColor: "white",
      },
      algolia: {
        appId: "BXXQLGVS3Y",
        apiKey: "3e7ddfe0b2a2ce34495188bd1e433dd4",
        indexName: "redstone",
        contextualSearch: true,
        replaceSearchResultPathname: {
          from: "/next/",
          to: "/",
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "👋 Community",
            items: [
              {
                label: "Website",
                href: "https://onlycoiners.com",
              },
              {
                label: "Telegram",
                href: "https://t.me/OnlyCoiners",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/OnlyCoiners",
              },
            ],
          },
          {
            title: "🚀 We are hiring",
            items: [
              {
                label: "Contact Us",
                href: "https://onlycoiners.com/user/onlycoiners",
              },
            ],
          },
          {
            title: "📚 More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/onlycoiners",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OnlyCoiners. <br/> Built with ❤️ and Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
