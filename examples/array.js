import { render } from './lib';
let products = [
    { id: 1, name: "Du an 1" },
    { id: 2, name: "Du an 2" },
    { id: 3, name: "Du an tot nghiep" }
]

let result = "";

const newProducts = products.map((value, index) => `<div>${value.name}</div>`).join("");

render(newProducts, app);