import { myProjects, blogs } from "./data.js";

const projectContainer = document.getElementById("projects-container");

myProjects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "bg-blue-200 rounded-sm p-[10px] shadow-md";
  card.innerHTML = `
    <img src="${project.images}" class="w-full h-[80%] rounded-sm" alt="project image"/>
    <a href="${project.link}" target="_blank">
      <button class="mt-2 px-4 py-1 bg-blue-500 text-purple-900 rounded hover:bg-blue-600 transition-all duration-300">Link</button>
    </a>
  `;
  projectContainer.appendChild(card);
});

const blogContainer = document.getElementById("blogs-container");

blogs.forEach((blog) => {
  const blogCard = document.createElement("div");
  blogCard.className = "box m-[10px] p-[20px] shadow-md h-[24rem] w-[18rem] border border-borderColor bg-[#faf9f5] rounded-md items-center";
  blogCard.innerHTML = `
    <img src="${blog.images}.png" alt="${blog.title}" class="rounded-full w-[90px] h-[90px] mx-auto" />
    <h4 class="mt-[10px] text-[22px] text-center font-bold text-purple-900">${blog.title}</h4>
    <p class="p-[10px] text-[16px] text-purple-900 text-center">${blog.desc}</p>
    <div class="flex justify-center">
      <button class="btn bg-blue-200 px-[10px] font-semibold cursor-default mt-[10px] rounded-md text-secondaryColor hover:border hover:border-[tomato] hover:scale-95">Learn more</button>
    </div>
  `;
  blogContainer.appendChild(blogCard);
});
