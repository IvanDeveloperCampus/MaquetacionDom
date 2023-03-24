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
    showArticle(){
      let html=""
      this.article.forEach(Element=>{
        html+=`
          <article class="blog-post">
            <h2 class="blog-post-title">${Element.title}</h2>
            <p class="blog-post-meta">${Element.date}</p>
            <p>${Element.parrafo}</p>
            <hr>
            <p>${Element.parrafo2}</p>
            <h3>${Element.subtitulo2}</h3>
            <ol>
            ${Element.lista.map((val)=> `<li>${val}</li>`).join("")}       
            </ol>
            
            <h3>${Element.subtitulo3}</h3>
            <p>${Element.parrafo}</p>
            <hr>
          </article>
      `})
      document.getElementById("articulos").insertAdjacentHTML("afterbegin",html);
      }
}

/***
 * <article class="blog-post">
          <h2 class="blog-post-title">Another blog post</h2>
          <p class="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>

          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
            show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <blockquote>
            <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
          </blockquote>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
            show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h3>Example table</h3>
          <p>And don't forget about tables in these posts:</p>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Upvotes</th>
                <th>Downvotes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice</td>
                <td>10</td>
                <td>11</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>4</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Charlie</td>
                <td>7</td>
                <td>9</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Totals</td>
                <td>21</td>
                <td>23</td>
              </tr>
            </tfoot>
          </table>

          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
            repetitive body text used throughout.</p>
        </article>
 */