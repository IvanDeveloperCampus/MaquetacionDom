let wsMyArticle={

    listArticle(p1){
        let html=""
        p1.forEach(Element=>{
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
        return html;
    }


    
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyArticle[`${e.data.module}`](e.data.data))
})