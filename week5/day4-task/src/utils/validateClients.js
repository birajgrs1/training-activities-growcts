export function validateClients(client) {
  const { name, email, phone } = client;
  if (!name || typeof name !== "string" || name.length < 3) {
    return "Name must be a string with at least 3 characters.";
  }
  if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
    return "Invalid email format.";
  }
  if (!phone || !/^\d{10}$/.test(phone)) {
    return "Phone must be a valid 10-digit number.";
  }
  return null;
}
