module.exports = {
  ci: {
    collect: {
      url: [
        'http://127.0.0.1:3000'
      ],
      startServerCommand: "npm run build",
      startServerReadyPattern: "Compiled successfully!",
      numberOfRuns: 1
    },
    upload: {
      target: 'temporary-public-storage'
    },
    assert: {
      preset: "lighthouse:recommended"
    }
  }
}
