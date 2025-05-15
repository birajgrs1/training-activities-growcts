const {
  readNotes,
  writeNotes,
  generateId,
  logAsyncExecution,
} = require("./utils");

const green = (msg) => `\x1b[32m${msg}\x1b[0m`;
const red = (msg) => `\x1b[31m${msg}\x1b[0m`;
const cyan = (msg) => `\x1b[36m${msg}\x1b[0m`;

async function addNote(content) {
  const notes = await readNotes();
  const id = generateId();
  notes.push({ id, content });
  await writeNotes(notes);
  console.log(green(`✓ Note added with ID: ${id}`));
}

async function listNotes() {
  const notes = await readNotes();
  if (notes.length === 0) {
    console.log(red("No notes found."));
    return;
  }

  console.log(cyan("Your Notes:"));
  notes.forEach((note, i) => {
    console.log(`${i + 1}. [${note.id}] ${note.content}`);
  });
}

async function deleteNote(id) {
  const notes = await readNotes();
  const filtered = notes.filter((note) => note.id !== id);
  if (notes.length === filtered.length) {
    console.log(red(`X No note found with ID: ${id}`));
  } else {
    await writeNotes(filtered);
    console.log(green(`✓ Note with ID ${id} deleted.`));
  }
}


(async () => {
  const [, , command, ...args] = process.argv;
  logAsyncExecution(); 

  switch (command) {
    case "add":
      const content = args.join(" ");
      if (!content) {
        console.log(red("X Please provide note content."));
      } else {
        await addNote(content);
      }
      break;

    case "list":
      await listNotes();
      break;

    case "delete":
      const id = args[0];
      if (!id) {
        console.log(red("X Please provide a note ID to delete."));
      } else {
        await deleteNote(id);
      }
      break;

    default:
      console.log(`
${cyan("Usage:")}
  node index.js add "Your note"
  node index.js list
  node index.js delete <note_id>
      `);
  }
})();
