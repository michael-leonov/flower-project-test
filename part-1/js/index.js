const categoriesWrapper = document.querySelector(".categories");

document.addEventListener("DOMContentLoaded", () => {
  (async function fetchCategories() {
    const response = await fetch("./categories.json");
    const categories = await response.json();

    categories.forEach((category) => {
      categoriesWrapper.appendChild(categoryTemplate(category));
    });

    hoverAnimationCategory();
  })();
});
