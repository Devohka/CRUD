const listFretis = document.querySelector(".list-vegetables");

const url = "http://localhost:3000/vegetables";


function fetchUrl(url) {
    const data = fetch(url);
    return data;
};

fetchUrl(url)
    .then(data =>
        data.json()
    ).then(data =>
        // console.log(data)
        createEl(data)
    );

function createEl(data) {
    data.map((vegetables) => {
        listFretis.insertAdjacentHTML(
            "beforeend",
            `<li class="item-vegetables">
              <p class="text-vegetables">name: ${vegetables.name}</p>
              <p class="text-vegetables">price: ${vegetables.price}</p>
              <p class="text-vegetables">id: ${vegetables.id}</p>
            </li>`
        );
    });
};
