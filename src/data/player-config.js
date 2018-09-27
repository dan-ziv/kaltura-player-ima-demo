const playerConfig = {
  targetId: 'player-placeholder',
  logLevel: 'DEBUG',
  provider: {
    partnerId: 1091,
    env: {
      cdnUrl: '//qa-apache-php7.dev.kaltura.com/',
      serviceUrl: '//qa-apache-php7.dev.kaltura.com/api_v3'
    }
  },
  plugins: {
    ima: {
      adTagUrl: '',
      adsRenderingSettings: {
        enablePreloading: false
      },
      companions: {
        sizeCriteria: 'SELECT_EXACT_MATCH',
        ads: {
          leaderboard: {
            width: 730,
            height: 92
          },
          mediumRectangle: {
            width: 302,
            height: 252
          },
          rectangle: {
            width: 182,
            height: 152
          },
          microBar: {
            width: 90,
            height: 33
          },
          smallRectangle: {
            width: 302,
            height: 62
          },
          threeByOne: {
            width: 302,
            height: 102
          },
          mobileBanner: {
            width: 322,
            height: 52
          },
          wideSkyscraper: {
            width: 162,
            height: 602
          },
          smallBanner: {
            width: 470,
            height: 62
          },
          button2: {
            width: 122,
            height: 62
          },
          halfPageAd: {
            width: 302,
            height: 602
          }
        }
      }
    }
  },
  playback: {
    muted: false
  }
};

export {playerConfig};
