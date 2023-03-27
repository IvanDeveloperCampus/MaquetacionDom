export default{
    

    banner:{
        Image:"./img/pexels-evg-kowalievska-1148952.jpg",
        title: "Ultimos estilos",
        description:"Tendencias de moda, colecciones, moda en la calle, streetstyle, entrevistas con diseñadores, modelos y noticias. Consejos y tendencias de temporada para ir a la última",
        href:"Continue  leyendo"
    },
    showImg(){
        document.querySelector(".imgStyles").style.backgroundImage=`url(${this.banner.Image})`;
    },
    showBanner(){
        const ws=new Worker("storage/wsMyBanner.js",{type:"module"});
        ws.postMessage({module:"showBanner", data:this.banner});
        ws.addEventListener("message", (e)=>{
            let doc=new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(".info").append(...doc.body.children)
        })
    },
    
    


    
}