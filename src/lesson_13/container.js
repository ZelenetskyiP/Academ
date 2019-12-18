const container = document.querySelector(".container");
const list = document.querySelectorAll(".list");
const btn = document.querySelector(".btn");

let isActive = false;

btn.onclick = () => {
  isActive = !isActive;
  console.log(isActive);
};

togleOff = () => {
  for (let i = 0; i < list.length; i++) {
    const loght = list[i];
    loght.style.background = "rgb(131, 127, 127)";
  }
};

for (let i = 0; i < list.length; i++) {
  const loght = list[i];
  loght.onclick = () => {
    if (isActive === false) {
      return;
    }
    togleOff();
    if (i === 0) {
      loght.style.background = "red";
    }
    if (i === 1) {
      loght.style.background = "yellow";
    }
    if (i === 2) {
      loght.style.background = "green";
    }
  };
}
