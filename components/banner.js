export default{
    Image:"./img/pexels-evg-kowalievska-1148952.jpg",
    title: "Ultimos estilos",
    description:"Tendencias de moda, colecciones, moda en la calle, streetstyle, entrevistas con diseñadores, modelos y noticias. Consejos y tendencias de temporada para ir a la última",
    href:"Continue  leyendo",
    showImg(){
        document.querySelector(".imgStyles").style.
        backgroundImage=`url(${this.Image})`;
    },
    showSectionBanner(){
        document.querySelector(".info").insertAdjacentHTML("beforebegin",`
            <h1 class="display-4 fst-italic">${this.title}</h1>
            <p class="lead my-3">${this.description}</p>
            <p class="lead mb-0"><a href="#" class="text-white fw-bold">${this.href}</a></p>
        `)
    }
    

    
}