const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      return res.status(error.statusCode || 500).json({
        status: error.statusCode || 500,
        message: error.message || "internal server error",
        data: error.data || null,
      });
    }
  };
};

export { asyncHandler };
