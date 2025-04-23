document.addEventListener("DOMContentLoaded", async () => {
  const toggleButton = document.getElementById("theme-toggle");
  const themeText = document.getElementById("theme-text");
  const lightIcon = document.getElementById("light-icon");
  const darkIcon = document.getElementById("dark-icon");

  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateIcon(currentTheme);

  toggleButton.addEventListener("click", () => {
    const newTheme =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "dark"
        : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    if (theme === "dark") {
      lightIcon.style.display = "inline-block";
      darkIcon.style.display = "none";
      themeText.textContent = "Change to light Theme";
    } else {
      lightIcon.style.display = "none";
      darkIcon.style.display = "inline-block";
      themeText.textContent = "Change to dark Theme";
    }
  }

  const taskTitle = document.getElementById("title");
  const taskDesc = document.getElementById("description");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("task-lists");

  const saveTasks = async (tasks) => {
    return new Promise((resolve) => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      resolve();
    });
  };

  const fetchTasks = async () => {
    return new Promise((resolve) => {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      resolve(tasks);
    });
  };

  let tasks = await fetchTasks();

  const renderTasks = async () => {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const element = document.createElement("div");
      element.classList.add(
        "mb-4",
        "p-3",
        "border",
        "rounded",
        "shadow",
        "relative"
      );
      element.innerHTML = `
              <div class="${task.completed ? "opacity-50" : ""}">
              <div class="gap-2 inline-flex mb-[20px]">
                        <h3 contenteditable="false" class="font-bold text-lg mt-2 mb-1 ${
                    task.completed ? "line-through" : ""
                  }">${task.text}</h3>
                  <div>
                     <label class="inline-flex items-center gap-2 cursor-pointer pl-9 relative">
                      <input type="checkbox" ${task.completed ? "checked" : ""} 
                          class="peer absolute opacity-0 h-0 w-0 cursor-pointer">
                      <span class="checkmark absolute top-1 left-0 h-6 w-6 border border-gray-300 ml-[20px] rounded peer-checked:bg-green-500"></span>
                  </label>
                  </div>
              </div>
              <div>
                  <p contenteditable="false" class="mb-2 ${
                    task.completed ? "line-through" : ""
                  }">${task.desc}</p>
              </div>
              </div>
              <div class="flex items-center gap-2">
                  <button class="edit bg-blue-500 text-white px-3 py-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-406.67v-66.66h293.33v66.66H160ZM160-570v-66.67h460V-570H160Zm0-163.33V-800h460v66.67H160ZM520-160v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8.67 9 12.83 20 4.17 11 4.17 22t-4.33 22.5q-4.34 11.5-13.28 20.5L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
                  </button>
                  <button class="delete bg-red-500 text-white px-3 py-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z"/></svg>
                  </button>
               
              </div>
          `;

      const editBtn = element.querySelector(".edit");
      const delBtn = element.querySelector(".delete");
      const checkbox = element.querySelector('input[type="checkbox"]');
      const titleEl = element.querySelector("h3");
      const descEl = element.querySelector("p");

      checkbox.addEventListener("change", async () => {
        task.completed = checkbox.checked;
        await saveTasks(tasks);
        await renderTasks();
      });

      editBtn.addEventListener("click", async () => {
        const isEditing = titleEl.contentEditable === "true";

        if (!isEditing) {
          titleEl.contentEditable = "true";
          descEl.contentEditable = "true";
          titleEl.focus();
        } else {
          task.text = titleEl.textContent;
          task.desc = descEl.textContent;
          await saveTasks(tasks);
          titleEl.contentEditable = "false";
          descEl.contentEditable = "false";
        }
      });

      delBtn.addEventListener("click", async () => {
        tasks = tasks.filter((t) => t.id !== task.id);
        await saveTasks(tasks);
        await renderTasks();
      });

      taskList.appendChild(element);
    });
  };

  addBtn.addEventListener("click", async () => {
    const title = taskTitle.value.trim();
    const desc = taskDesc.value.trim();

    if (!title || !desc) {
      alert("Please fill in both title and description");
      return;
    }

    const taskObj = {
      id: Date.now(),
      text: title,
      desc: desc,
      completed: false,
    };

    tasks.push(taskObj);
    await saveTasks(tasks);
    taskTitle.value = "";
    taskDesc.value = "";
    await renderTasks();
  });

  await renderTasks();
});
