document.addEventListener("DOMContentLoaded", () => {
  const book = document.getElementById("book");

  function activateControl(links, activeClass, classPrefix, attrName) {
    links.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();

        links.forEach(l => l.classList.remove(activeClass));
        link.classList.add(activeClass);

        book.classList.forEach(cls => {
          if (cls.startsWith(classPrefix)) {
            book.classList.remove(cls);
          }
        });

        const value = link.dataset[attrName];
        if (value) {
          book.classList.add(`${classPrefix}${value}`);
        }
      });
    });
  }

  const fontLinks = document.querySelectorAll(".font-size");
  activateControl(fontLinks, "font-size_active", "book_fs-", "size");

  const textColorLinks = document.querySelectorAll("[data-text-color]");
  if (textColorLinks.length) {
    activateControl(textColorLinks, "color_active", "book_color-", "textColor");
  }

  const bgColorLinks = document.querySelectorAll("[data-bg-color]");
  if (bgColorLinks.length) {
    activateControl(bgColorLinks, "color_active", "book_bg-", "bgColor");
  }
});