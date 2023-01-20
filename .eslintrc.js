module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    'vue/attribute-hyphenation': ['off', {
      ignore: []
    }],
    'vue/v-on-event-hyphenation': ['off', {
      ignore: []
    }]
  }
}
