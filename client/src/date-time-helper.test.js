import dateTimeHelper from './date-time-helper';

describe('parse', () => {
  test('with incorrect date string raises TypeError', () => {
    expect(() => { dateTimeHelper.parse('invaliddate') }).toThrow(TypeError);
    expect(() => { dateTimeHelper.parse(null) }).toThrow(TypeError);
  });

  test('with correct date string returns the parsed date', () => {
    expect(dateTimeHelper.parse('2018-05-01T20:00:00')).toEqual(new Date(2018, 4, 1, 20, 0, 0));
  });
});

test('formatTime returns HH:MM', () => {
  expect(dateTimeHelper.formatTime(new Date(2018, 3, 29, 14, 51, 0))).toEqual('14:51');
});

test('formatDuration returns Hh MM', () => {
  expect(dateTimeHelper.formatDuration(0)).toBe('0h 00');
  expect(dateTimeHelper.formatDuration(32)).toBe('0h 32');
  expect(dateTimeHelper.formatDuration(93)).toBe('1h 33');
  expect(dateTimeHelper.formatDuration(6001)).toBe('100h 01');
});

describe('nextMonday', () => {
  test('always returns monday', () => {
    expect(dateTimeHelper.nextMonday().getDay()).toBe(1);
  });

  test('with any date of week returns the next monday', () => {
    const monday = new Date(2018, 3, 30);
    const theNextMonday = new Date(2018, 4, 7);
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i);
      expect(dateTimeHelper.nextMonday(date)).toEqual(theNextMonday);
    }
  });
});

test('followingDay returns the next day', () => {
  expect(dateTimeHelper.followingDay(new Date(2018, 3, 29))).toEqual(new Date(2018, 3, 30));
});

test('toISODateString returns YYYY-mm-dd', () => {
  expect(dateTimeHelper.toISODateString(new Date(2018, 3, 29, 14, 58, 0))).toEqual('2018-04-29');
});
