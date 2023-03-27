export default{

    title:{
       nombre:"VOGUE",
       href:"#"
    },
    sections: [{
        name:"MODA",
        description: " "
    },{
        name:"BELLEZA",
        description:""
    },{
        name:"CULTURA",
        description:""
    },{
        name:"LIVING",
        description:""
    },{
        name:"PASARELAS",
        description:""
    },{
        name:"COMPRAS",
        description:""
    },{
        name:"CELEBRITIES",
        description:""
    },{
        name:"VOGUE 365",
        description:""
    },{
        name:"PHOTOVOGUE",
        description:""
    }

    ], 
    fragShow(){
            //CREAMOS EL WORKER
            const ws=new Worker("storage/wsMyHeader.js",{type:"module"});

            //ENVIAMOS EL MENSAJE AL WORKER
            ws.postMessage({module:"listTitle", data: this.title});

            ws.postMessage({module:"listSections", data: this.sections});

            
            //ESTO ES LO QUE LLEGA DEL WORKER
            ws.addEventListener("message", (e)=>{
                console.log(e.data);
                //ESTAMOS PARSEANDO LO QUE TRAE EL EVENTO
                let doc=new DOMParser().parseFromString(e.data, "text/html");

                //INSERTAMOS EN NUESTRO INDEX, EN EL SELECTOR #SECTIONS
                document.querySelector("#sections").append(...doc.body.children);

                //TERMINAMOS EL TRABAJO DEL WORKER
                ws.terminate();
            })
            
    }
    
    
}