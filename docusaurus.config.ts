import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Fonder",
  tagline:
    "Plataforma integral de gestión financiera para empresas en Latinoamérica. Facturación, pagos y finanzas B2B simplificadas.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.fonderlatam.com",

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "FonderLatam",
  projectName: "fonder-docs",
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/FonderLatam/fonder-docs",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/fonder/social-card.jpg", // Update this with your actual social card image

    navbar: {
      title: "Fonder",
      logo: {
        alt: "Fonder Logo",
        src: "img/fonder/logo_black.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Métricas",
        },
        {
          href: "https://github.com/FonderLatam",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentación",
          items: [
            {
              label: "Métricas",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Comunidad",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/fonder/",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/fonderlatam/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/FonderLatam",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://fonderlatam.com" target="_blank" rel="noopener noreferrer">Fonder, LLC</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  // ... rest of the config
};

export default config;
