
function toggleMenu() {
    const menuMobile = document.getElementById("menu-mobile")
    
    //a propriedade .toggle() está verificando se a classe "menu-mobile-active" está ativa no menuMobile. Caso sim, ele retira a classe, e caso não, ele inclui a classe fazendo assim o chaveamento de classes, substituindo o if e otimizando o código deixando ele mais clean.
    menuMobile.classList.toggle("menu-mobile-active");

    /* 
    Condicional substituida pelo .toggle()
    if (menuMobile.className === "menu-mobile-active") {
        menuMobile.className = "menu-mobile"
    } else {
        menuMobile.className = "menu-mobile-active"
    } */
}