import config from "../storage/config.js";


export default{
    
      show(){

        config.dataMyArticles();
        Object.assign(this, JSON.parse(localStorage.getItem("myArticles")));

        const ws=new Worker("storage/wsMyArticle.js", {type:"module"});
        ws.postMessage({module:"listArticle", data:this.article});
        
        ws.addEventListener("message", (e)=>{
          let doc=new DOMParser().parseFromString(e.data, "text/html");
          document.querySelector(`#articulos`).append(...doc.body.children);
          
        })
      }
}

