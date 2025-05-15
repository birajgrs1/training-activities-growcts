const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const filePath = path.join(__dirname, 'notes.json');

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
}

function loadNotes() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

function saveNotes(notes) {
    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
}

function addNote(content) {
    const notes = loadNotes();
    const id = crypto.randomUUID();
    notes.push({ id, content });
    saveNotes(notes);
    console.log(`Note added with ID: ${id}`);
}

// List notes
function listNotes() {
    const notes = loadNotes();
    console.log("Your Notes:");
    notes.forEach(note => {
        console.log(`- [${note.id}] ${note.content}`);
    });
}

function removeNote(id) {
    let notes = loadNotes();
    const originalLength = notes.length;
    notes = notes.filter(note => note.id !== id);
    saveNotes(notes);
    if (notes.length < originalLength) {
        console.log(`Note with ID ${id} removed.`);
    } else {
        console.log(`Note with ID ${id} not found.`);
    }
}

// Show usage
function showUsage() {
    console.log(`
Usage:
  node script.js add "Your note content"
  node script.js list
  node script.js remove <note_id>
  node script.js demo
    `);
}

function demoExecutionOrder() {
    console.log("Start of demo...");

    process.nextTick(() => console.log("process.nextTick"));
    setTimeout(() => console.log("setTimeout"), 0);
    setImmediate(() => console.log("setImmediate"));

    console.log("End of demo...");
}

const [,, command, ...args] = process.argv;

switch (command) {
    case 'add':
        addNote(args.join(" "));
        break;
    case 'list':
        listNotes();
        break;
    case 'remove':
        removeNote(args[0]);
        break;
    case 'demo':
        demoExecutionOrder();
        break;
    default:
        showUsage();
}
