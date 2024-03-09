function criarFormulario() {
    document.getElementById("criarFormulario").style.display = "none";
    document.getElementById("p-header").style.display = "none";

    let formulario = document.createElement("form");
    let tituloNome = document.createElement("h2");
    tituloNome.textContent = "Cadastro";

    let divNome = document.createElement("div");
    divNome.style.display = "flex";
    divNome.style.justifyContent = "center";
    divNome.style.alignItems = "center";
    
    let labelNome = document.createElement("label");
    labelNome.textContent = "Nome:";
    let inputNome = document.createElement("input");
    inputNome.setAttribute("type", "text");
    inputNome.setAttribute("name", "nome");
    divNome.appendChild(labelNome);
    divNome.appendChild(inputNome);

    let divEmail = document.createElement("div");
    divEmail.style.display = "flex";
    divEmail.style.justifyContent = "center";
    divEmail.style.alignItems = "center";
    
    let labelEmail = document.createElement("label");
    labelEmail.textContent = "Email:";
    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("name", "email");
    divEmail.appendChild(labelEmail);
    divEmail.appendChild(inputEmail);

    let divFilme = document.createElement("div");
    divFilme.style.display = "flex";
    divFilme.style.justifyContent = "center";
    divFilme.style.alignItems = "center";
    
    let labelFilme = document.createElement("label");
    labelFilme.textContent = "Filme Favorito:";
    let inputFilme = document.createElement("input");
    inputFilme.setAttribute("type", "text");
    inputFilme.setAttribute("name", "filme");
    divFilme.appendChild(labelFilme);
    divFilme.appendChild(inputFilme);

    let btnEnviar = document.createElement("button");
    btnEnviar.setAttribute("type", "submit");
    btnEnviar.textContent = "CRIAR";
    formulario.appendChild(divNome);
    formulario.appendChild(divEmail);
    formulario.appendChild(divFilme);
    formulario.appendChild(btnEnviar);

    let container = document.getElementById("formulario-container");
    container.innerHTML = "";
    container.appendChild(tituloNome);
    container.appendChild(formulario);
}