export default{
    Image:"./img/pexels-evg-kowalievska-1148952.jpg",
    title: "Lastes Styles",
    description:"Don’t miss out on the next Vogue Club event. Meet the Founder: Olamide Olowe of Topicals",
    href:"Continue reading",
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