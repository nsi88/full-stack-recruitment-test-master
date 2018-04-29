// obtain API key from your Skyscanner contact
const APIKEY = process.env.APIKEY;
const NODE_PORT = process.env.NODE_PORT || 4000;

if (!APIKEY) {
  console.error('APIKEY environment variable missing. ' +
    'Please re-run with `APIKEY=<key> npm run server`');
  process.exit(1);
}

module.exports = {
  apiKey: APIKEY,
  port: NODE_PORT,
  skyscannerApi: 'http://partners.api.skyscanner.net/'
};
