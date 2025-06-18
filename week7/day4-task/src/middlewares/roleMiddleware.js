export const requireRole = (role) => (req, res, next) => {
  if (req.user.role !== role)
    return res.status(403).json({ error: "Access denied" });
  next();
};

export const requireSelfOrAdmin = (req, res, next) => {
  if (req.user.role === "admin" || req.user._id.toString() === req.params.id)
    return next();
  return res.status(403).json({ error: "Access denied" });
};
