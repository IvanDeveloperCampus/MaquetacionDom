let wsMyBanner={
    showBanner(p1){
      return `<h1 class="display-4 fst-italic">${p1.title}</h1>
                <p class="lead my-3">${p1.description}</p>
                <p class="lead mb-0"><a href="#" class="text-white fw-bold">${p1.href}</a></p>
            `;
        
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data))
})