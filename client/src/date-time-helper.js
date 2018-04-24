const dateTimeHelper = {
  /**
   * Parse date string.
   *
   * Returns Date or throws TypeError.
   */
  parse: (dateString) => {
    const date = new Date(dateString);
    if (date === 'Invalid Date') {
      throw new TypeError(`"${dateString}" is not a Date`)
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
   }
};

module.exports = dateTimeHelper;
