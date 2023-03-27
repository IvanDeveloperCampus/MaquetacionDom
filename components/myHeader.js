export default {
  title: {
    nombre: "VOGUE",
    href: "#",
  },
  sections: [
    {
      name: "MODA",
      description: " ",
    },
    {
      name: "BELLEZA",
      description: "",
    },
    {
      name: "CULTURA",
      description: "",
    },
    {
      name: "LIVING",
      description: "",
    },
    {
      name: "PASARELAS",
      description: "",
    },
    {
      name: "COMPRAS",
      description: "",
    },
    {
      name: "CELEBRITIES",
      description: "",
    },
    {
      name: "VOGUE 365",
      description: "",
    },
    {
      name: "PHOTOVOGUE",
      description: "",
    },
  ],
  fragShow() {
    const ws = new Worker("storage/wsMyHeader.js", { type: "module" }); //CREAMOS EL WORKER

    let count = 0;

    ws.postMessage({ module: "listTitle", data: this.title }); //ENVIAMOS EL MENSAJE AL WORKER

    ws.postMessage({ module: "listSections", data: this.sections }); //GUARDAMOS EN UN ARRAY LOS SELECTORES

    let id = ["#title", "#sections"];

    //ESTO ES LO QUE LLEGA DEL WORKER
    ws.addEventListener("message", (e) => {
      let doc = new DOMParser().parseFromString(e.data, "text/html"); //ESTAMOS PARSEANDO LO QUE TRAE EL EVENTO

      document.querySelector(`${id[count]}`).append(...doc.body.children); //INSERTAMOS EN NUESTRO INDEX, EN EL SELECTOR #SECTIONS O TITLE SEGUN EL NUMERO DEL ARRAY

      id.length - 1 == count ? ws.terminate : count++; //TERMINAMOS EL TRABAJO DEL WORKER O AUMENTAMOS EL CONTADOR PARA LA OTRA INFO
    });
  },
};
