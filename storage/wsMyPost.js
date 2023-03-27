let myPost={

    listPost(p1){
        let html="";
        p1.forEach(element => {
            html+=`
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col-8 p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2">${element.section}</strong>
                        <a href="${element.href}"><h5>${element.title}</h5></a>   
                        <div class="mb-1 text-muted">${element.author}</div>
                        <p class="card-text mb-auto">${element.date}</p>
                        
                    </div>
                    <div class="col-4 d-none d-lg-block">
                        <img src="${element.img}" class="resposiveImg" >

                    </div>
                </div>
            </div>
` 

       
        });

        return html;
    }
}

self.addEventListener("message", (e)=>{
    postMessage(myPost[e.data.module](e.data.data))
})