let wsMyHeader={

    listTitle(p1){
        return`<a class="blog-header-logo text-dark" href="#" >${p1.nombre}</a>`
    },
    listSections(p1){
        let plantilla="";
        p1.forEach((val,id)=>{
            plantilla += `<a class=p-2 link-secondary" href="#">${val.name}</a>`
        });
        return plantilla;
    }
}
//ACA NO EXISTE TEXTO DOM
self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data))
})


