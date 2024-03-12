const onSearch = () => {
  const input = document.querySelector("#search");
  const filter = input.value.toUpperCase();

  const list = document.querySelectorAll("#list li");
  list.forEach((el) => {
    const text = el.textContent.toUpperCase();
    if (text.includes(filter)) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
};
