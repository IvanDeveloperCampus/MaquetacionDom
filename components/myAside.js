export default{
    
    nav:[
        {
            title:"Mision",
            paragranph:`VOGUE tiene como misión entregar en tiempo y forma promesas de belleza que cumplan con los más altos estándares de calidad, teniendo la mejor relación costo beneficio del mercado, todo esto en un ambiente seguro,
             ético para que nuestra gente pueda desarrollarse y crecer siempre buscando ser una empresa amigable con el medio ambiente.`
        },{
            title:"Vision",
            paragranph:`VOGUE tiene como visión ser el aliado estratégico del negocio en el crecimiento del mercado de belleza en América, siempre buscando mejorar nuestra confiabilidad, valor agregado y flexibilidad para llegar a mas gente.`
        },
        {
            title:"Ultimos Post",
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
            title:"Redes",
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

    showAside(){
        
        const ws=new Worker("storage/wsMyAside.js", {type:"module"})
        ws.postMessage({module:"listAside", data:this.nav})
        
        ws.addEventListener("message", (e)=>{
            let doc=new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#nav").append(...doc.body.children);
            
        })
    },
}
        