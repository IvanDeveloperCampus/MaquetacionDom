let myAside={
    listAside(p1){
        
    //CREAMOS LA FUNCION DE FORMA QUE RETORNE EL NUEVO ARRAY
        //GUARDAMOS EN UNA VARIABLE EL RESULTADO DE LA CONDICION
        let data= p1.map((value, id) => {
            //HACEMOS LA VALIDACION PARA VERFICAR SI ES CARD O LINK Y LE PASAMOS COMO PARAMETRO EL ITEM
            return ((value.link) ? this.list(value) : this.card(value)
                )
            }
        );
        
        return data.join(" ")


    },
    //METODO DEL CARD, RECIBIMOS EL PARAMETRO ENVIADO POR EL METODO ANTERIOR
    card(value){
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

self.addEventListener("message", (e)=>{
    postMessage(myAside[`${e.data.module}`](e.data.data));
})
