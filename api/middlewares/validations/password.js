function validatePassword(password) {
  errors = "";
  if (password.length < 8) {
    return {
      errors: "Your password must be at least 8 characters",
      check: false,
    };
  } else if (password.search(/[a-z]/i) < 0) {
    return {
      errors: "Your password must contain at least one letter.",
      check: false,
    };
  } else if (password.search(/[0-9]/) < 0) {
    return {
      errors: "Your password must contain at least one digit.",
      check: false,
    };
  }
  return { check: true };
}

module.exports = validatePassword;
