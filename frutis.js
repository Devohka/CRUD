// import { error } from "console";
// import data from "./products.json";




const btnSell = document.querySelector(".sel-btn");
const modalCard = document.querySelector(".box-modal");

const listFrutis = document.querySelector(".list-fruits");
const btnFrutis = document.querySelector(".add-card-f");
const url = "http://localhost:3000/frutis";

const formFrutis = document.querySelector(".form");
const modal = document.querySelector(".modal");

function fetchUrl(url) {
    const data = fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return data;
};

fetchUrl(url)
    .then(data =>
        data.json()
    ).then(data => {
         const productList = createListProdact(data);
         return productList;
        }
    );

function createEl(frutis) {

    const createEl = `<li class="item-frutis">
              <p class="text-frutis">name: ${frutis.name}</p>
                  <p class="text-frutis">price: ${frutis.price}</p>
                  <p class="text-frutis">id: ${frutis.id}</p>
               </li>`;

    //  data.map((frutis) => {

    //         listFrutis.insertAdjacentHTML(
    //             "beforeend",
    //             `<li class="item-frutis">
    //               <p class="text-frutis">name: ${frutis.name}</p>
    //               <p class="text-frutis">price: ${frutis.price}</p>
    //               <p class="text-frutis">id: ${frutis.id}</p>
    //             </li>`
    //         );
    //     });
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
    ).then(res =>
        createEl(res)
    ).catch(error =>
        console.log(error)
    );
};



btnFrutis.addEventListener("click", () => {
    modal.style.display = "block";
});

formFrutis.addEventListener("submit", (e) => {
    e.preventDefault()
    const newFruti = {
        name: e.currentTarget.elements.name.value,
        price: e.currentTarget.elements.price.value,
        id: e.currentTarget.elements.id.value
    };

    e.currentTarget.reset();
    return addFruit(newFruti);
});





function createModal(el) {
    // modalCard.insertAdjacentHTML(
    //     "beforeend",
    //     `
    //     <div class="modal">
    //       <p class="text-frutis-modal">name: ${el.name}</p>
    //       <p class="text-frutis-modal">descrip: ${el.descrip}</p>
    //      </div>
    //     `
    // );


    const createEl = `
        <div class="modal">
        <p class="text-frutis-modal">name: ${el.name}</p>
        <p class="text-frutis-modal">descrip: ${el.descrip}</p>
       </div>
      `;
    return createEl;
};



function createListProdact(data) {
    const listFrut =
        data.frutis.map(frut => {
            // console.log(frut);
            return createEl(frut);
        }).join("");
    listFrutis.innerHTML = listFrut;
};


listFrutis.addEventListener("click", () => {
    modalCard.style.display = "block";
    data.frutis.forEach(frut => {
        createModal(frut);

    });


});
