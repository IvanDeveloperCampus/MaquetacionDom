import config from "../storage/config.js";

export default{
    

    showBanner(){

        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));
        

        const ws=new Worker("storage/wsMyBanner.js",{type:"module"});
        ws.postMessage({module:"showBanner", data:this.banner});
        ws.addEventListener("message", (e)=>{
            let doc=new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(".info").append(...doc.body.children)
        })
    },
    
    showImg(){

        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));
        document.querySelector(".imgStyles").style.backgroundImage=`url(${this.banner.Image})`;
    }
    
    


    
}