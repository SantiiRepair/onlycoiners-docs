// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OnlyCoiners Docs",
  tagline: "Documentation for the OnlyCoiners protocol",
  url: "https://docs.onlycoiners.com",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "OnlyCoiners", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "pt"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
      es: {
        label: "Español",
        direction: "ltr",
        htmlLang: "es-MX",
      },
      pt: {
        label: "Português",
        direction: "ltr",
        htmlLang: "pt-PT",
      },
    },
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/OnlyCoiners/docs/tree/main",
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
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/OnlyCoiners",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      announcementBar: {
        id: "announcement-bar",
        content:
          '<strong>⭐️ If you like OnlyCoiners, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/OnlyCoiners/docs">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/OnlyCoiners">Twitter</a> ⭐️</strong>',
        backgroundColor: "orange",
        textColor: "black",
      },
      algolia: {
        appId: "BXXQLGVS3Y",
        apiKey: "3e7ddfe0b2a2ce34495188bd1e433dd4",
        indexName: "onlycoiners",
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
                label: "Tiktok",
                href: "https://www.tiktok.com/@onlycoiners",
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
            title: "📢 We are hiring",
            items: [
              {
                label: "Contact Us",
                href: "malito:support@onlycoiners.com",
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
