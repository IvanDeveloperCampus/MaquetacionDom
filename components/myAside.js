export default{
    
    nav:[
        {
            title:"about",
            paragranph:`Vogue is the world's leading high-end fashion magazine and is currently published in 20 countries. 
            It is considered the 'bible of fashion' and is the great reference within the publications of the sector.`
        },
        {
            title:"archives",
            link:[
                {
                    namee:"March 21, 2023",
                    href:"https://www.vogue.com/article/new-fashion-arrivals"
                },{
                    namee:"March 22, 2023",
                    href:"https://www.vogue.com/article/j-smith-cameron-succession-season-4-interview"
                },{
                    namee:"March 22, 2023",
                    href:"https://www.vogue.com/article/diary-of-a-model-lila-moss"
                },{
                    namee:"March 19, 2023",
                    href:"https://www.vogue.com/article/j-smith-cameron-succession-season-4-interview"
                },{
                    namee:"March 20, 2023",
                    href:"https://www.vogue.com/article/diary-of-a-model-lila-moss"
                },{
                    namee:"March 18, 2023",
                    href:"https://www.vogue.com/article/j-smith-cameron-succession-season-4-interview"
                },{
                    namee:"March 17, 2023",
                    href:"https://www.vogue.com/article/diary-of-a-model-lila-moss"
                },{
                    namee:"March 16, 2023",
                    href:"https://www.vogue.com/article/j-smith-cameron-succession-season-4-interview"
                },{
                    namee:"March 15, 2023",
                    href:"https://www.vogue.com/article/diary-of-a-model-lila-moss"
                }
            ]
        },{
            title:"elsewhere",
            link:[
                {
                    namee:"Facebook",
                    href:"https://www.facebook.com/Vogue/"
                },
                {
                    namee:"Twitter",
                    href:"https://twitter.com/voguespain?lang=es"
                },{
                    namee:"instagram",
                    href:"https://www.instagram.com"
                }
            ]
        }
    ],

    //CREAMOS LA FUNCION DE FORMA QUE RETORNE EL NUEVO ARRAY
    showAside(){

        //GUARDAMOS EN UNA VARIABLE EL RESULTADO DE LA CONDICION
        let data= this.nav.map((value, id) => {
            //HACEMOS LA VALIDACION PARA VERFICAR SI ES CARD O LINK Y LE PASAMOS COMO PARAMETRO EL ITEM
            return ((value.link) ? this.list(value) : this.cards(value)
                )
            }
        );
        document.querySelector("#nav").insertAdjacentHTML("beforeend", data.join(""))


    },
    //METODO DEL CARD, RECIBIMOS EL PARAMETRO ENVIADO POR EL METODO ANTERIOR
    cards(value){
       return `<div class="p-4 mb-3 bg-light rounded card">
                    <h4 class="fst-italic">${value.title}</h4>
                    <p class="mb-0">${value.paragranph}</p>
                </div>`
    },
    //METODO DEL LINK, RECIBIMOS EL PARAMETRO ENVIADO, ITERAMOS NUEVAMENTE LA RESPUESTA YA 
    //QUE CONTIENE UN ARRAY EL DE LINKS PARA EXTRAER CADA ITEM
    list(value){
        return `<div class="p-4">
                    <h4 class="fst-italic">${value.title}</h4>
                    <ol class="list-unstyled mb-0">
                       ${value.link.map((val,id)=> 
                            `<li><a href="${val.href}">${val.namee}</a></li>`
                       ).join("")}       
                    </ol>
                </div>`
    }

    
}
        