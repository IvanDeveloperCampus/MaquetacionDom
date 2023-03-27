export default{
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
    ], 
      show(){
        const ws=new Worker("storage/wsMyArticle.js", {type:"module"});
        ws.postMessage({module:"listArticle", data:this.article});
        
        ws.addEventListener("message", (e)=>{
          let doc=new DOMParser().parseFromString(e.data, "text/html");
          document.querySelector(`#articulos`).append(...doc.body.children);
          
        })
      }
}

