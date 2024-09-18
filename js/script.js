const events = () => {
    const url = "http://localhost:3000/evento";

    const mostrEvents = () => {
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                response.forEach(element => {

                    const container = document.getElementById("container");
                    const img = document.createElement('img');
                    const date = element.length
                    console.log(date)

                    img.src = element.img;
                    container.appendChild(img);

                    const div = document.createElement('div');
                    div.style.cssText = "display:none";
                    container.appendChild(div);

                    const h1 = document.createElement("h1");
                    const p = document.createElement("p");
                    const label_div = document.createElement("div");
                    const labelVer = document.createElement("label");
                    const labelTipo = document.createElement("label");
                    const labelRemove = document.createElement("label");
                    const labels = [labelVer, labelRemove, labelTipo];
                    label_div.style.cssText = "display: flex; justify-content:end; margin-bottom:0;";

                    h1.textContent = element.nome;
                    h1.style.cssText = "margin-bottom: 10px; border-bottom: 2px solid white";
                    p.textContent = element.info;
                    div.appendChild(h1);
                    div.appendChild(p);
                    div.appendChild(label_div);

                    labels.forEach((label) => {

                        label_div.appendChild(label);
                    });

                    labelVer.textContent = "Modificar Evento";
                    labelTipo.textContent = element.tipo;
                    labelRemove.textContent = "Remover Evento";
                    const confirm = document.createElement("div")
                    confirm.id = "confirm";
                    confirm.style.display = "none"
                    const h1c = document.createElement("h1")
                    const main = document.querySelector("main")
                    const buttonA = document.createElement("button")
                    const buttonB = document.createElement("button")
                    const buttonDiv = document.createElement("div")
                    const button = [buttonA, buttonB];
                    const pc = document.createElement("p")
                    labelRemove.addEventListener("click", () => {
                        const back = document.querySelector("#back")
                        back.classList.toggle("opacity")
                        confirm.style.display = "block"
                        main.appendChild(confirm)

                        h1c.textContent = "confirme";

                        pc.textContent = "voce confirma que deseja REMOVER este evento?"


                        confirm.appendChild(h1c)
                        confirm.appendChild(pc)
                        buttonDiv.appendChild(buttonA)
                        buttonDiv.style.cssText = "display:flex; gap:5px; aligh-itens:center"



                        button.forEach(button => {
                            button.style.cssText = "color: whitesmoke;text-transform: uppercase ;letter-spacing: 1px ;border:none;padding:10px; width:180px; border-radius:10px"
                        });
                        buttonA.textContent = "Retornar"
                        buttonA.style.background = "#999999"
                        buttonB.style.background = "#006eff"
                        buttonB.textContent = "Confirmar"
                        buttonDiv.appendChild(buttonB)
                        confirm.appendChild(buttonDiv)
                        h1c.style.textAlign = "center"
                        confirm.style.cssText = "box-shadow: 2px 2px 1px 1px #333; color: whitesmoke;position: fixed;top: 40%;left: 50%;padding: 10px;transform: translate(-50%, -40%); background:  #141414; width:450px; height:200px; display:flex; flex-direction:column; justify-content:center;row-gap:20px; border-radius:20px; align-itens:center"


                    })
                    buttonA.addEventListener("click", () => {
                        confirm.style.display = "none"
                        back.classList.toggle("opacity")
                    })
                    buttonB.addEventListener("click", event => {
                        back.classList.toggle("opacity")
                        const urlID = "http://localhost:3000/evento/" + element.id
                        event.preventDefault()
                        fetch(urlID, {
                            method: "DELETE",
                        }).then(res => res.json())
                        confirm.style.display = "none"
                    })
                    const put = () => {
                        labelVer.addEventListener("click", event => {
                            event.preventDefault()
                            const urlID = "http://localhost:3000/evento/" + element.id
                            const formod = document.querySelector("#formod")
                            const back = document.querySelector("#back")
                            formod.classList.toggle("opacity")
                            back.classList.toggle("opacity")

                            fetch(urlID).then(res => res.json()).then((data) => {
                                document.getElementById("nomemod").value = data.nome
                                document.getElementById("tipomod").value = data.tipo
                                document.getElementById("infomod").value = data.info
                                document.getElementById("imgmod").value = data.img
                            })

                            formod.addEventListener("submit", event => {
                                event.preventDefault()
                                const formDataMod = new FormData(formod)
                                const dataMod = Object.fromEntries(formDataMod)

                                fetch(urlID, {
                                    method: "PUT",
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(dataMod)
                                }).then(res => res.json()).then((data) => {

                                })
                            })
                        })
                    }
                    put()
                    img.addEventListener("click", () => {
                        const imgCoordenadas = img.getBoundingClientRect()
                        div.style.cssText =
                            `
                            display:block;
                            position: fixed; 
                            top: ${imgCoordenadas.top}px; 
                            left: ${imgCoordenadas.left}px; 
                            width: ${img.offsetWidth}px;
                            height: ${img.offsetHeight}px;
                            background-color: rgba(0, 0, 0, 0.8);
                            color: white;
                            padding: 20px;
                            box-sizing: border-box;`;

                        div.addEventListener("click", () => {
                            div.style.display = "none";
                        });
                    });
                });

                const text = () => {
                    fetch(url).then(res => res.json()).then((data) => {
                        const dataLength = data.length
                        document.querySelector("#title").innerHTML = "Eventos disponiveis: " + dataLength

                    })
                }
                text()
            })
            .catch(err => {
                console.error("Ocorreu um erro " + err);
            });
    };
    mostrEvents();
};

events();
