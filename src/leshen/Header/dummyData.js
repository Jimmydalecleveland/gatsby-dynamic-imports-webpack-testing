export const HEADER_DATA = {
  mainNavItems: [
    {
      text: 'FiOS',
      subnav: [
        { text: 'Clearlink FiOs', href: '/' },
        { text: 'What is FiOs?', href: '/' },
        { text: 'FiOs vs Cable', href: '/' },
      ],
    },
    {
      text: 'Internet',
      href: '/BillboardPage',
      megaMenu: false,
      subnav: [
        { text: 'FiOs Internet', href: '/' },
        { text: 'High Speed Internet', href: '/' },
        { text: 'Vantage Internet?', href: '/' },
      ],
    },
    { text: 'TV', href: '/TabsPage' },
    { text: 'Phone', href: '/' },
    { text: 'Plans & Pricing', href: '/' },
    { text: 'More', href: 'https://github.com' },
  ],

  topBarNavItems: [{ text: 'Clearlink Business', href: '/' }],
}

export const HEADER_MEGAMENU_DATA = {
  mainNavItems: [
    {
      text: 'FiOS',
      href: '/',
      subnav: [
        { text: 'Clearlink FiOs', href: '/' },
        { text: 'What is FiOs?', href: '/' },
        { text: 'FiOs vs Cable', href: '/' },
      ],
    },
    {
      text: 'Internet',
      href: '/BillboardPage',
      megaMenu: true,
      subnav: [
        {
          text: 'FiOS Internet',
          href: '/',
          subnav: [
            { text: 'Clearlink FiOS', href: '/' },
            { text: 'What is FiOS?', href: '/' },
            { text: 'FiOS vs Cable?', href: '/' },
            { text: 'Who am I?', href: '/' },
          ],
        },
        {
          text: 'High Speed Internet',
          href: '/',
          subnav: [
            {
              text: 'What is Internet?',
              href: '/',
              subnav: [
                {
                  text: 'What even is it?',
                  href: '/',
                },
                {
                  text: 'Series of Tubes?',
                  href: '/',
                },
                {
                  text: 'Best Speeds',
                  href: '/',
                  subnav: [
                    { text: 'Fiber Internet', href: '/' },
                    { text: 'Recommended Daily Fiber', href: '/' },
                  ],
                },
              ],
            },
            { text: 'How Do I Internet?', href: '/' },
            { text: 'Cuantos Internets?', href: '/' },
          ],
        },
        {
          text: 'Vantage Internet?',
          href: '/',
          subnav: [
            { text: 'Im Stuck In The Internet', href: '/' },
            { text: 'Can you help me?', href: '/' },
            { text: 'Vantage Advantage?', href: '/' },
          ],
        },
      ],
    },
    { text: 'TV', href: '/TabsPage' },
    { text: 'Phone', href: '/' },
    { text: 'Plans & Pricing', href: '/' },
    { text: 'More', href: 'https://github.com' },
  ],

  topBarNavItems: [{ text: 'Clearlink Business', href: '/' }],
}
