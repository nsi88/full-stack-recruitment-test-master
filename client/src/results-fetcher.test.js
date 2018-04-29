import resultsFetcher from './results-fetcher';
const defaultFetch = global.fetch;

beforeAll(() => {
  global.fetch = jest.fn();
});

test('fetch makes request with correct url', () => {
  resultsFetcher.fetch({
    fromPlace: 'EDI',
    toPlace: 'LON',
    adults: 2,
    cabinClass: 'Economy',
    fromDate: '2018-03-30',
    toDate: '2018-04-01',
  });
  expect(fetch.mock.calls[0][0])
    .toBe('http://localhost:4000/api/search?fromPlace=EDI&toPlace=LON&adults=2&cabinClass=Economy&fromDate=2018-03-30&toDate=2018-04-01');
});

afterAll(() => {
  global.fetch = defaultFetch;
});
