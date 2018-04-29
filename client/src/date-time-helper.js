const dateTimeHelper = {
  /**
   * Parse date string.
   *
   * Returns Date or throws TypeError.
   */
  parse: (dateString) => {
    if (typeof(dateString) !== 'string') {
      throw new TypeError(`"${dateString}" is not a Date`);
    }
    const date = new Date(dateString);
    if (date.toString() === 'Invalid Date') {
      throw new TypeError(`"${dateString}" is not a Date`);
    }
    return date;
  },

  /**
   * Format time.
   *
   * E.g. Mon Apr 30 2018 21:35:00 GMT+0800 -> '21:35'.
   */
  formatTime: (date) => {
    return date.getHours().toString().padStart(2, '0') + ':' +
      date.getMinutes().toString().padStart(2, '0');
  },


  /**
   * Format duration.
   *
   * Gets minutes.
   * E.g. 280 -> '4h 40'.
   */
  formatDuration: (minutes) => {
     const hours = Math.floor(minutes / 60).toString();
     const leftMinutes = (minutes % 60).toString().padStart(2, '0');
     return `${hours}h ${leftMinutes}`;
   },

  /**
   * Return next monday date for passed date.
   *
   * If date is not passed, today date will be used.
   * If date is monday, the next week monday will be returned.
   * Uses local time.
   */
  nextMonday: (date = new Date()) => {
    const day = date.getDay();
    switch (day) {
      case 0: // sunday
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
      case 1:
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
      default:
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 8 - day);
    }
  },

  /**
   * Return the next day date.
   */
  followingDay: (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  },

  /**
   * Format date to 'YYYY-mm-dd'.
   */
  toISODateString: (date) => {
    return date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') +
      '-' + date.getDate().toString().padStart(2, '0');
  },
};

module.exports = dateTimeHelper;
