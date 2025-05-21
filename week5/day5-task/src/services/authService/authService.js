import { v4 as uuidv4 } from "uuid";
import fs from "fs-extra";
const FILE = "./src/data/clients.json";

const authService = {
  async registerUser({ username, email, password }) {
    const users = await fs.readJson(FILE).catch(() => []);
    if (users.find((u) => u.email === email))
      throw new Error("Email already exists");
    const user = { id: uuidv4(), username, email, password };
    users.push(user);
    await fs.writeJson(FILE, users);
    return user;
  },

  async loginUser({ email, password }) {
    const users = await fs.readJson(FILE).catch(() => []);
    return users.find((u) => u.email === email && u.password === password);
  }
};

export default authService;
