const chequear = () => {
        const element = document.querySelector(".custom-hr-select-container.css-2b097c-container .custom-hr-select__menu");
        console.log(element.innerHTML)
}

setTimeout(() => console.log(document.querySelector(".custom-hr-select-container.css-2b097c-container .custom-hr-select__menu .custom-hr-select__option:nth-child(0)").innerHTML), 1000 * 30);

setTimeout(() => console.log(document.querySelector(".custom-hr-select-container.css-2b097c-container .custom-hr-select__menu .custom-hr-select__option:nth-child(0)").innerHTML), 5000); //me trae un hijo de algun elemento

window.onbeforeunload = function(){
    return 'Are you sure you want to leave?';
};sc-efHYUO cFSLxQ custom-hr-select-container css-2b097c-container

setTimeout(() => console.log(document.querySelectorAll(".custom-hr-select-container.css-2b097c-container .custom-hr-select__menu-list .custom-hr-select__option")), 5000) //me trae un array
setTimeout(() => console.log(document.querySelectorAll(".custom-hr-select-container.css-2b097c-container .custom-hr-select__menu-list .custom-hr-select__option")[2]), 5000) //trae un elemento de array
setTimeout(() => console.log(document.querySelector(".custom-hr-select-container.css-2b097c-container .custom-hr-select__menu-list .custom-hr-select__option:nth-child(3)")), 5000)
setTimeout(() => console.log(document.querySelectorAll(".custom-hr-select-container.css-2b097c-container .custom-hr-select__menu-list .custom-hr-select__option")[0]), 5000)