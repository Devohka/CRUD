// import { error } from "console";

const listFrutis = document.querySelector(".list-fruits");
const btnFrutis = document.querySelector(".add-card-f");
const url = "http://localhost:3000/frutis";

const formFrutis = document.querySelector(".form");
const modal = document.querySelector(".modal");

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
    data.map((frutis) => {
        listFrutis.insertAdjacentHTML(
            "beforeend",
            `<li class="item-frutis">
              <p class="text-frutis">name: ${frutis.name}</p>
              <p class="text-frutis">price: ${frutis.price}</p>
              <p class="text-frutis">id: ${frutis.id}</p>
            </li>`
        );
    });
};


 const addFruit = (newFruit) => {
   return fetch(url, {
        method: "POST",
        body: JSON.stringify(newFruit),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
    }).then(res =>
        res.json()
    ).catch(error =>
        console.log(error)
    ) ;  
};
 


btnFrutis.addEventListener("click", () => {
    modal.style.display = "block";
});

formFrutis.addEventListener("submit", (e) => {
    const newFruti = {
        name: e.currentTarget.elements.name.value,
        price: e.currentTarget.elements.price.value,
        id: e.currentTarget.elements.id.value
    };
    
    e.currentTarget.reset();
    return addFruit(newFruti);
});