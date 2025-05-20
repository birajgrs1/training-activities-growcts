const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  req.logger?.error(
    `[${new Date().toISOString()}] ${req.method} ${req.path} - ${message}`
  );

  res.status(status).json({ error: message });
};

export default errorHandler;

//logger: It is a middleware function that logs information about the request and response to the console.
//It is helps in debugging and monitoring the performance of the application.
