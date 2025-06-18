const notifyUser = (req, res, next) => {
  res.status(200).json({ message: "Users notified" });
};

export default notifyUser;