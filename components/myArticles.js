export default{
    article:[
        {
          title:"Lila Moss on Her Personal Style, Perfecting Her Runway Walk, and the One Thing She Can’t Steal From Her Mother’s Closet",
          date:"March 22, 2023",
          parrafo:`As the daughter of supermodel Kate Moss, it’s no surprise that Lila Moss has a treasure trove of good tips and tricks learned from the legend herself. “Less is more,”
           and “always be kind to everyone,” are two of the essential lessons Lila shares with us in this episode of “Diary of a Model.”`,
           subtitulo2:"Production",
           lista:["director: Talia Collis",
           "Director of Photography: Romain Vallade",
           "Editor: J.Y. Chun",
           "Audio: David Amselem",
           "Senior Producer: Jordin Rocchi",
           "Production Coordinator: Tara Lengyel",
           "Supervising Producer, Paris: Nikki Petersen"
          ],
          subtitulo3:"Fashion",
          parrafo2:"In the latest installment, we follow along as the 20-year-old model gets ready to close the Chloé fall 2023 ready-to-wear show. Glowing skin is a fashion-show must, but luckily for Lila, her youthful glow comes with age. Her quick beauty routine includes rinsing her face with water and putting on some eye patches for depuffing action. She orders croissants for breakfast (pain au chocolat are her favorite), before getting dressed in a moss-colored knit sweater, gray-washed denim, and platform Doc Martens. “I like to wear shoes with a bit of a platform because I probably will be the shortest girl at the show today,” says Moss, who is famously 5’6”."
            
            
           
        },{
          title:"These 13 Style Icons Make the Case for Never Changing Your Look",
          date:"March 22, 2023",
          parrafo:`These celebrities make the case for finding your perfect wardrobe staples and then sticking with them. On the red carpet, for instance, Beyoncé has consistently stuck to her glitzy bodycon gowns; Jennifer Aniston has kept things more minimal, always managing to find the perfect ’90s-style LBD (Her stylish Friends character, Rachel Green, would approve). 
          Other stars have kept bold go-tos in the rotation, such as Grace Jones or Diane Keaton, who rarely step out without a statement hat.`,
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