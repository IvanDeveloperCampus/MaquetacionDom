export default{
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
            title: {
                nombre: "VOGUE",
                href: "#",
              },
              sections: [
                {
                  name: "MODA",
                  description: " ",
                },
                {
                  name: "BELLEZA",
                  description: "",
                },
                {
                  name: "CULTURA",
                  description: "",
                },
                {
                  name: "LIVING",
                  description: "",
                },
                {
                  name: "PASARELAS",
                  description: "",
                },
                {
                  name: "COMPRAS",
                  description: "",
                },
                {
                  name: "CELEBRITIES",
                  description: "",
                },
                {
                  name: "VOGUE 365",
                  description: "",
                },
                {
                  name: "PHOTOVOGUE",
                  description: "",
                }
              ]
        }))
    },
    dataMyBanner(){
        localStorage.setItem("myBanner",JSON.stringify({
            banner:{
                Image:"./img/pexels-evg-kowalievska-1148952.jpg",
                title: "Ultimos estilos",
                description:"Tendencias de moda, colecciones, moda en la calle, streetstyle, entrevistas con diseñadores, modelos y noticias. Consejos y tendencias de temporada para ir a la última",
                href:"Continue  leyendo"
            }
        }))
        
    },
    dataMyPost(){

        localStorage.setItem("myPost", JSON.stringify({
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
                
            ]
        }))

        
    },
    dataMyArticles(){
        localStorage.setItem("myArticles", JSON.stringify({
            article:[
                {
                  title:"¿Quién viste a quién en el cine español?: la guía de los estilistas de las actrices nacionales al detalle",
                  date:"15 de marzo de 2023",
                  parrafo:`Con la temporada de festivales todavía a pleno rendimiento y el Festival de Málaga regalándonos looks para el recuerdo a diario, resulta interesante dejar de lado por un momento el trabajo interpretativo de los implicados para centrarnos en otro aspecto no menos destacado de la infraestructura cinematográfica. Nos referimos, claro, a las alfombras rojas, ese elemento ya casi místico encargado de transportarnos a la magia del cine,
                   deslumbrándonos con el glamour y la belleza que se le presupone a la industria del celuloide y que, sin embargo, tiene más de ciencia que de magia. `,
                   subtitulo2:"Produccion",
                   lista:["director: Talia Collis",
                   "Director of Photography: Romain Vallade",
                   "Editor: J.Y. Chun",
                   "Audio: David Amselem",
                   "Senior Producer: Jordin Rocchi",
                   "Production Coordinator: Tara Lengyel",
                   "Supervising Producer, Paris: Nikki Petersen"
                  ],
                  subtitulo3:"José Juan Rodríguez y Paco Casado",
                  parrafo2:`El tándem de estilistas ha conseguido hacerse mucho más que un hueco en la industria. Juntos son una de las parejas más influyentes del panorama, donde visten a figuras como Anna Castillo, Ingrid García-Jonsson, Macarena García, Nerea Barros, Nathalie Poza o Elena Rivera. Para la gala de los Goya 2023, en su lista de
                   clientas se encontraron la ya mencionada Anna Castillo, pero también otras como Bárbara Lennie, Aitana Sánchez Gijón, Maribel Verdú o Carolina Yuste.`
                    
                    
                   
                },{
                  title:"Los zapatos que estarán por todas partes esta primavera son los más cómodos",
                  date:"14  de marzo del 2023",
                  parrafo:`Esta primavera existen unos zapatos que han terminado por desterrar (temporalmente) a las zapatillas. Sin embargo, este gesto estilístico no supone renunciar ni un ápice a la comodidad. Nos deparan unos meses de llevar un calzado tan sensato como favorecedor y versátil, gracias a las tendencias de la primavera que la pasarela propone para este calzado. Las bailarinas 
                  son una de las apuestas más fuertes de las colecciones, desde las transparentes de Loewe a las afiladas de Marni, pasando por el balletcore de MM6.`,
                   subtitulo2:"Succession Is Going Out on Top",
                   lista:["director: Talia Collis",
                   "Director of Photography: Romain Vallade",
                   "Editor: J.Y. Chun",
                   "Audio: David Amselem",
                   "Senior Producer: Jordin Rocchi",
                   "Production Coordinator: Tara Lengyel",
                   "Supervising Producer, Paris: Nikki Petersen"
                  ],
                  subtitulo3:"All the essentials: top fashion stories, editor’s picks, and celebrity style.",
                  parrafo2:"These fashion plates prove that having a distinct point-of-view reigns supreme—and that, sometimes, it’s best to rebuke rules and to march to the beat of your own drum. Consider them the perfect inspiration points to add to your style mood board this spring. We say it's time to develop your very own signature look, too."
                }
            ]
        }))
    },
    dataMyAside(){
        localStorage.setItem("myAside", JSON.stringify({
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
            ]
        }))
    }
    
}