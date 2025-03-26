document.addEventListener("DOMContentLoaded", function () {
  fetch("https://giria7397562.github.io/Assingment_final/repo.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      let container = document.getElementById("data-container");
      container.innerHTML = "";

      data.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <img src="${item.image}" alt="${item.name}" >
          `;
        container.appendChild(div);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
