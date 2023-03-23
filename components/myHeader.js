export default{

    title:{
       nombre:"VOGUE",
       href:"#"
    },
    sections: [{
        name:"FASHION",
        description: " "
    },{
        name:"BEAUTY",
        description:""
    },{
        name:"CULTURE",
        description:""
    },{
        name:"LIVING",
        description:""
    },{
        name:"RUNWAY",
        description:""
    },{
        name:"SHOPPING",
        description:""
    },{
        name:"VIDEO",
        description:""
    },{
        name:"VOGUE CLUB",
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