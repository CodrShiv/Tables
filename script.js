const tableOf = document.querySelector("#tableOf");
const tillWhen = document.querySelector("#tilLWhen");
const mainDOM = document.querySelector("#tables");
const display = () => {
    mainDOM.innerHTML = '';
    for(let i=1;i<=tillWhen.value;i++) 
        mainDOM.innerHTML += `<div>${tableOf.value} x ${i} = ${tableOf.value * i}</div>`
}