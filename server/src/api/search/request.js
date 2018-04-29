const { query, validationResult } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');

const VALID_CABIN_CLASSES = ['economy', 'premiumeconomy', 'business', 'first'];

const request = {
  /**
   * Validators array.
   */
  validators: [
    query('adults').isInt({gt: 0}).withMessage('must be a positive number'),
    sanitize('class').customSanitizer((value) => value ? value.toLowerCase() : value),
    query('class').isIn(VALID_CABIN_CLASSES).withMessage(`must be one of ${VALID_CABIN_CLASSES.join(', ')}`),
    query('toPlace').exists().withMessage('is required'),
    query('toDate').isISO8601().withMessage('must be a date (YYYY-mm-dd)'),
    query('fromPlace').exists().withMessage('is required'),
    query('fromDate').isISO8601().withMessage('must be a date (YYYY-mm-dd)'),
  ],

  /**
   * Validate request. Send 400 { errors: [...] } if invalid, else call the next middleware.
   */
  validate: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      next();
    }
  }
};

module.exports = request;
