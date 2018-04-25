const baseUrl = 'http://localhost:4000/api/search';

const resultsFetcher = {
  /**
   * Fetch results.
   *
   * Returns promise. See fetch method.
   */
  fetch: (params) => {
    console.info('fetching results from server...');
    const url = baseUrl + '?' + toQueryString(params);
    console.debug('url:', url);
    return fetch(url);
  }
};

function toQueryString(params) {
  return Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');
}

module.exports = resultsFetcher;
