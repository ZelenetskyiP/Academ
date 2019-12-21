const section = [
  {
    title: "section-1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non molestiae ducimus ex eligendi asperiores, magnam pariatur? Ducimus, quidem vitae."
  },
  {
    title: "section-2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non molestiae ducimus ex eligendi asperiores, magnam pariatur? Ducimus, quidem vitae."
  },
  {
    title: "section-3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non molestiae ducimus ex eligendi asperiores, magnam pariatur? Ducimus, quidem vitae."
  },
  {
    title: "section-3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non molestiae ducimus ex eligendi asperiores, magnam pariatur? Ducimus, quidem vitae."
  }
];

// function render(moun) {
//   const container = document.createElement("div");
//   container.classList.add("container");

//   const btn = document.createElement("button");
//   btn.classList.add("btn");
//   container.appendChild(btn);

//   const containerTex = document.createElement("div");
//   containerTex.classList.add("conteiner-text");
//   container.appendChild(containerTex);

//   const text = document.createElement("p");
//   text.classList.add("text");
//   containerTex.appendChild(text);

//   moun.appendChild(container);
// }

// const body = document.querySelector("body");
// render(body);

function render(mount) {
  const container = document.createElement("div");
  container.classList.add("container");
  mount.appendChild(container);

  for (let i = 0; i < section.length; i++) {
    const loght = section[i];

    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = loght.title;
    container.appendChild(btn);

    const text = document.createElement("p");
    text.classList.add("text");
    text.textContent = loght.content;
    container.appendChild(text);
  }
}

const body = document.querySelector(".wrap");
render(body);
console.log(section[0].title);
