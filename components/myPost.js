export default{
    post:[
        {
            section:"ESPIA",
            title:`Max Allen: el diseñador que vistió a Emma 
                Corrin con un ‘selfie’ de le actore`,
            href:"https://www.vogue.es/moda/articulos/max-allen-vestido-emma-corrin-portada-vogue",
            author:"ALAXANDRA LORES",
            date:"16 de marzo de 2023",
            img:"img/espia.webp"
            
        },{
            section:"PORTADA",
            title:`Emma Corrin: “La alfombra roja me ha dado la oportunidad de explorar mi identidad a través de la ropa”`,
            href:"https://www.vogue.es/moda/articulos/emma-corrin-harry-lambert-revolucion-alfombra-roja",           
            author:"EMMA CORRIN Y HARRY LAMBERT",
            date:"16 de marzo de 2023",
            img:"img/portada.webp"
        },{
            section:"ANALISIS",
            title:`Y los Oscar 2023 consiguieron ser, finalmente, unos premios acordes a su tiempo`,
            href:"https://www.vogue.es/moda/articulos/max-allen-vestido-emma-corrin-portada-vogue",
            author:"ALBERTO SISI SANCHEZ",
            date:"14 de marzo de 2023",
            img:"img/festivalMalaga.webp"
        },
        {
            section:"FESTIVAL DE MALAGA",
            title:`¿Quién viste a quién en el cine español?: la guía de los estilistas de las actrices nacionales al detalle`,
            href:"https://www.vogue.es/moda/articulos/estilistas-celebrities-actrices-espanolas-looks-premios-goya"
            ,
            author:"NUALA PHILLIPS",
            date:"14 de marzo de 2023",
            img:"img/oscars.webp"
        },{
            section:"WEDDINGS",
            title:`Who Pays for the Wedding? A Guide to Cost-Splitting`,
            href:"https://www.vogue.es/moda/articulos/max-allen-vestido-emma-corrin-portada-vogue",
            author:"By Priya Rao and Elise Taylor",
            date:"March 21, 2023",
            img:"img/5.jpg"
        }
        
    ],

    showPost(){
        const ws=new Worker("storage/wsMyPost.js", {type:"module"});
        ws.postMessage({module:"listPost", data:this.post});
        ws.addEventListener("message", (e)=>{
            let doc=new DOMParser().parseFromString(e.data, "text/html");
            
            document.querySelector(".myPost").append(...doc.body.children);
        })
    }
    /*
    showPost(){
        let html="";
        this.post.forEach(element=>{
            html+=`
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col-8 p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2">${element.section}</strong>
                                <a href="${element.href}"><h5>${element.title}</h5></a>   
                                <div class="mb-1 text-muted">${element.author}</div>
                                <p class="card-text mb-auto">${element.date}</p>
                                
                            </div>
                            <div class="col-4 d-none d-lg-block">
                                <img src="${element.img}" class="resposiveImg" >

                            </div>
                        </div>
                    </div>
        `
        })
        document.querySelector(".myPost").insertAdjacentHTML("beforeend",html)
        
    }*/
}