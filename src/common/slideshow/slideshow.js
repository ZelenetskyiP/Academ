import "./slideshow.scss";

const images = [
  {
    title: "Fantastic beasts and where to find them",
    description:
      "Fantastic Beasts and Where to Find Them is a 2016 fantasy film directed by David Yates. A joint British and American production, it is a spin-off and prequel to the Harry Potter film series, and is produced and written by J. K. Rowling in her screenwriting debut, inspired by her 2001 guide book of the same name. The film features an ensemble cast that includes Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, and Colin Farrell. It is the first installment in the Fantastic Beasts film series, and ninth overall in the Wizarding World franchise, that began with the Harry Potter films.",
    rating: "4.7",
    preview: {
      high:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199507/movies/bitmap_2x_qt5gqd.jpg",
      low:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199506/movies/bitmap_wixqtd.jpg"
    },
    genre: "fantasy"
  },
  {
    title: "Justice League",
    description:
      "ustice League is a 2017 American superhero film based on the DC Comics superhero team of the same name, distributed by Warner Bros. Pictures. It is the follow-up to 2016's Batman v Superman: Dawn of Justice and the fifth installment in the DC Extended Universe (DCEU).[5][6][7] The film is directed by Zack Snyder, written by Chris Terrio and Joss Whedon, and features an ensemble cast that includes Ben Affleck, Henry Cavill, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Amy Adams, Jeremy Irons, Diane Lane, Connie Nielsen, and J. K. Simmons. In the film, Batman and Wonder Woman recruit The Flash, Aquaman, and Cyborg after Superman's death to save the world from the catastrophic threat of Steppenwolf and his army of Parademons.",
    rating: "3.9",
    preview: {
      low:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199102/movies/bitmap_qm5atv.jpg",
      high:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199121/movies/bitmap_2x_rczowy.jpg"
    },
    genre: "comics"
  },
  {
    title: "Beauty and the beast",
    description: "",
    rating: "3.9",
    preview: {
      low:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198944/movies/bitmap_ocrjt9.jpg",
      high:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198977/movies/bitmap_2x_n5bkmr.jpg"
    },
    genre: "fairytail"
  }
];

const renderSlides = mountPoint => {
  const slides = [];

  images.forEach((item, i) => {
    // const item = images[i];
    const slide = document.createElement("div");

    slide.classList.add("slide");
    slide.style.transform = `translateX(-${i * 100}%)`;

    const img = document.createElement("img");
    img.classList.add("slide__img");
    img.src = item.preview.high;

    slide.appendChild(img);
    slides.push(slide);
    mountPoint.appendChild(slide);
  });

  return slides;
};

export const slideShow = mountPoint => {
  let activeSlideIndex = 0;
  const container = document.createElement("div");
  container.classList.add("slideshow");

  const slides = renderSlides(container);

  function setActive() {
    slides[activeSlideIndex].classList.add("active");
  }

  setActive();
  mountPoint.appendChild(container);
};
