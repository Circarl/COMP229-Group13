const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://localhost:3100",
    secure: false
  }
];

module.exports = PROXY_CONFIG;
