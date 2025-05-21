// import * as authService from '../../services/authService/authService.js';
import authService from '../../services/authService/authService.js';
import * as deviceService from '../../services/deviceService/deviceService.js';
import * as sessionService from '../../services/sessionService/sessionService.js';


export async function register(req, res) {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

export async function login(req, res) {
  try {
    const user = await authService.loginUser(req.body);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    req.session.user = user;
    await sessionService.saveSession(req);
    await deviceService.saveDevice(req);
    res.json({ message: 'Login successful', user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
