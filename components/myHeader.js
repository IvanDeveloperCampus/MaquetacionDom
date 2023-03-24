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
    listTitle(){
        document.getElementById("title").insertAdjacentHTML("beforeend", `
        <a class="blog-header-logo text-dark" href="#" >${this.title.nombre}</a>`)
    },
    
    listarSections(){
        
        
        let html="";
        
            this.sections.forEach(element => {
                html+=`<a class="p-2 link-secondary" 
                href="#">${element.name}</a>`
            });
            document.getElementById("sections").insertAdjacentHTML("beforeend", html)
           
        }
    
    
}