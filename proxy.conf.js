const PROXY_CONFIG = {
  '/api': {
    target: 'http://localhost:8085',
    secure: false
  },
  '/content': {
    target: 'http://localhost:8085',
    secure: false
  }
};

module.exports = PROXY_CONFIG;
