// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'grpneto', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Análise de Dados- Wholesale Customers',
          description:
            'Análise exploratória de dados do conjunto de dados Wholesale Customers, com informações sobre os gastos anuais de clientes atacadistas em diferentes categorias de produtos.',
          imageUrl:
            'https://cdn-icons-png.flaticon.com/512/8552/8552132.png',
          link: 'https://github.com/grpneto/wholesale_customers',
        },
        {
          title: 'Análise Exploratória dos dados da Pesquisa da Pecuária Municipal',
          description:
            'Análise exploratória aplicada aos dados da Pesquisa da Pecuária Municipal (PPM) do IBGE, utilizando agregações, visualizações e séries históricas.',
          imageUrl:
            'https://www.creativefabrica.com/wp-content/uploads/2021/12/29/1640787101/Stacked-Farm-Animal-Silhouette-black-version-580x386.jpg',
          link: 'https://github.com/grpneto/ppm_analise',
        },
      ],
    },
  },
  seo: { title: 'Portfolio Gildarte Ramos', description: '', imageURL: '' },
  social: {
    linkedin: 'gildarteramos',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'gildarteneto9@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Power BI',
    'Python',
    'SQL',
    'Excel',
    'Git',
    'Azure'
  ],
  
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dim',
      'fantasy'
    ],
  },
};

export default CONFIG;
