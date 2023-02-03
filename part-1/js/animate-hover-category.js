const hoverAnimationCategory = () => {
  const categories = document.querySelectorAll(".category");

  categories.forEach((category) => {
    category.addEventListener("mouseenter", (e) => {
      const target = e.target;
      const categoryImg = target.querySelector(".category__img");
      const categoryImgHover = target.querySelector(".category__img-hover");
      const leafs = document.querySelectorAll(".leaf");
      leafs.forEach((leaf) => {
        leaf.style.left = leaf.offsetLeft + getRandomPosition(-3, 3) + "px";
        leaf.style.top = leaf.offsetTop + getRandomPosition(-3, 3) + "px";
      });

      categoryImg.style.display = "none";
      categoryImgHover.style.display = "block";

      const ellipses = category.querySelectorAll(".category__ellipse");

      ellipses.forEach((ellipse) => {
        animate(ellipse, 50, 200);
      });
    });

    category.addEventListener("mouseleave", (e) => {
      const target = e.target;
      const categoryImg = target.querySelector(".category__img");
      const categoryImgHover = target.querySelector(".category__img-hover");

      const greenLeaf = document.querySelector(".green-leaf");

      const brownLeaf = document.querySelector(".brown-leaf");

      greenLeaf.style.left = -20 + "px";
      greenLeaf.style.top = -40 + "px";

      brownLeaf.style.left = 70 + "%";
      brownLeaf.style.top = 250 + "px";

      if (window.matchMedia("(min-width: 576px)").matches) {
        greenLeaf.style.left = -30 + "px";
        greenLeaf.style.top = -40 + "px";

        brownLeaf.style.left = 75 + "%";
        brownLeaf.style.top = 250 + "px";
      }

      if (window.matchMedia("(min-width: 768px)").matches) {
        greenLeaf.style.left = -40 + "px";
        greenLeaf.style.top = -40 + "px";

        brownLeaf.style.left = 85 + "%";
        brownLeaf.style.top = 250 + "px";
      }

      if (window.matchMedia("(min-width: 1024px)").matches) {
        greenLeaf.style.left = -60 + "px";
        greenLeaf.style.top = -40 + "px";

        brownLeaf.style.left = 55 + "%";
        brownLeaf.style.top = 300 + "px";
      }

      if (window.matchMedia("(min-width: 1366px)").matches) {
        greenLeaf.style.left = -70 + "px";
        greenLeaf.style.top = -40 + "px";

        brownLeaf.style.left = 70 + "%";
        brownLeaf.style.top = 270 + "px";
      }

      if (window.matchMedia("(min-width: 1920px)").matches) {
        greenLeaf.style.left = -150 + "px";
        greenLeaf.style.top = -60 + "px";

        brownLeaf.style.left = 68 + "%";
        brownLeaf.style.top = 450 + "px";
      }

      categoryImg.style.display = "block";
      categoryImgHover.style.display = "none";
    });
  });

  const animate = (item, min, max) => {
    item.style.left = getRandomPosition(min, max) + "px";
    item.style.top = getRandomPosition(min, max) + "px";
  };

  const getRandomPosition = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
};
