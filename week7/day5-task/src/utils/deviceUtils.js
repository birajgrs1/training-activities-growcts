export const getDeviceInfo = (req) => {
  return {
    userAgent: req.headers["user-agent"] || "Unknown",
    ip: req.ip,
  };
};