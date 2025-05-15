const fs = require("fs").promises;
const path = require("path");
const crypto = require("crypto");



const notesFile = path.join(__dirname, "notes.json");


async function ensureNotesFile() {
  try {
    await fs.access(notesFile);
  } catch {
    await fs.writeFile(notesFile, "[]");
  }
}

async function readNotes() {
  await ensureNotesFile();
  const data = await fs.readFile(notesFile, "utf-8");
  return JSON.parse(data);
}

async function writeNotes(notes) {
  await fs.writeFile(notesFile, JSON.stringify(notes, null, 2));
}

function generateId() {
  return crypto.randomUUID();
}

function logAsyncExecution() {
  console.log("\nExecution order test:\n");
  console.log("Start");

  setTimeout(() => console.log("setTimeout"), 0);
  setImmediate(() => console.log("setImmediate"));
  process.nextTick(() => console.log("process.nextTick"));

  console.log("End\n");
}

module.exports = {
  readNotes,
  writeNotes,
  generateId,
  logAsyncExecution,
};
