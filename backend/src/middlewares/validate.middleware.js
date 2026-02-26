const ApiError = require("../utils/ApiError");
const { HTTP_STATUS } = require("../constants");

/**
 * Validates request body against a Zod schema.
 * Replaces req.body with parsed (sanitized) data on success.
 */
const validate = (schema) => (req, _res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.errors.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));

    return next(
      new ApiError(HTTP_STATUS.UNPROCESSABLE_ENTITY, "Validation failed", errors)
    );
  }

  req.body = result.data;
  next();
};

module.exports = validate;