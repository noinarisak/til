module.exports = {
  title: 'Today I Learned by Noi',
  description: 'Collection of my TIL.',
  themeConfig: {
    search: false,
    base: '/tilx/',
    // default value is true. Set it to false to hide next page links on all pages
    nextLinks: false,
    // default value is true. Set it to false to hide prev page links on all pages
    prevLinks: false,
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Me', link: '/about/'}
    ],
    sidebar: {
      // fallback
      '/': [
        '',        /* / */
        'about'    /* /about.html */
      ]
    }
  },
}