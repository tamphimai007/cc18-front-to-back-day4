const handleError = (err, req, res, next) => {
  // code
  res.status(err.statusCode || 500).json({ message: err.message });
};

module.exports = handleError;
