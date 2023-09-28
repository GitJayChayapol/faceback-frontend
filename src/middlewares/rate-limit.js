const { rateLimit } = require("express-rate-limit");

module.exports = rateLimit({
  window: 60 * 1000,
  limit: 100,
  message: { message: "Too many requests from this IP" },
});
