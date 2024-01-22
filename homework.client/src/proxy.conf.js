const PROXY_CONFIG = [
  {
    context: [
      "/person",
    ],
    target: "https://localhost:7136",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
