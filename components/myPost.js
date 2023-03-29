import config from "../storage/config.js"

export default{
    
    showPost(){

        config.dataMyPost();
        Object.assign(this, JSON.parse(localStorage.getItem("myPost")))

        const ws=new Worker("storage/wsMyPost.js", {type:"module"});
        ws.postMessage({module:"listPost", data:this.post});
        ws.addEventListener("message", (e)=>{
            let doc=new DOMParser().parseFromString(e.data, "text/html");
            
            document.querySelector(".myPost").append(...doc.body.children);
        })
    }
    
}