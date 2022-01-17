const terryPratchett = {
            key: 'X-Clacks-Overhead',
            value: 'GNU Terry Pratchett',
          }

module.exports = {
    async headers() {
    return [
      {
        source: '/',
        headers: [
          terryPratchett
        ],
      },
      {
        source: '/:ditto',
        headers: [
          terryPratchett
        ],
      },
      {
        source: '/_next\/([^\/]+\/?)*',
        headers: [
          terryPratchett
        ],
      },
    ]
  },
  env: {
    baseUrl: "",
    NEXT_PUBLIC_GA_ID: ""
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  }
}
