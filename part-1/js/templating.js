function categoryTemplate(category) {
  const categoryElement = document.createElement("div");
  categoryElement.classList.add("categories__item", "category");

  const categoryTitle = document.createElement("p");

  categoryTitle.textContent = category.title;
  categoryTitle.classList.add("category__title");

  categoryElement.appendChild(categoryTitle);

  const categoryImage = new Image();
  categoryImage.src = category.img;
  categoryImage.classList.add("category__img");

  categoryElement.appendChild(categoryImage);

  const categoryImageHover = new Image();
  categoryImageHover.src = category["hover_img"];
  categoryImageHover.classList.add("category__img-hover");

  categoryElement.appendChild(categoryImageHover);

  const categoryElementEllipseBig = document.createElement("div");
  categoryElementEllipseBig.classList.add("category__ellipse", "ellipse-big");

  categoryElement.appendChild(categoryElementEllipseBig);

  const categoryElementEllipseMeduim = document.createElement("div");
  categoryElementEllipseMeduim.classList.add(
    "category__ellipse",
    "ellipse-medium"
  );

  categoryElement.appendChild(categoryElementEllipseMeduim);

  const categoryElementEllipseSmall = document.createElement("div");
  categoryElementEllipseSmall.classList.add(
    "category__ellipse",
    "ellipse-small"
  );

  categoryElement.appendChild(categoryElementEllipseSmall);

  return categoryElement;
}
