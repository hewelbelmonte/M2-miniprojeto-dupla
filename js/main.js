let cadastros = [];

function criarFormulario() {
    let container = document.getElementById("formulario-container");
    container.innerHTML = "";
    container.style.display = "block";

    let formulario = document.createElement("form");
    formulario.id = "formulario-sorteio"; 
    let tituloNome = document.createElement("h2");
    tituloNome.id = "cadastro-form";
    tituloNome.textContent = "Preencha e participe do sorteio ↓";

    formulario.appendChild(criarDivComInput("Nome: ", "text", "nome"));
    formulario.appendChild(criarDivComInput("Email: ", "email", "email"));
    formulario.appendChild(criarDivComInput("Filme Favorito:", "text", "filme"));

    let btnEnviar = document.createElement("button");
    btnEnviar.setAttribute("type", "button");
    btnEnviar.textContent = "PARTICIPAR";
    btnEnviar.id = "participar-button"
    formulario.appendChild(btnEnviar);

    container.appendChild(tituloNome);
    container.appendChild(formulario);

   
    btnEnviar.onclick = function() {
        if (validarFormulario()) {
            let nome = document.querySelector('input[name="nome"]').value;
            let email = document.querySelector('input[name="email"]').value;
            let filme = document.querySelector('input[name="filme"]').value;

            let novoCadastro = { nome, email, filme };
            cadastros.push(novoCadastro);

            mostrarRespostas();
        } else {
            console.log("Por favor, preencha todos os campos requeridos.");
        }
    };
}

function validarFormulario() {
    let formulario = document.getElementById("formulario-sorteio");
    return formulario.checkValidity();
}

function criarDivComInput(labelText, inputType, inputName) {
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";

    let label = document.createElement("label");
    label.textContent = labelText;
    let input = document.createElement("input");
    input.setAttribute("type", inputType);
    input.setAttribute("name", inputName);

    
    if (inputName === "nome") {
        input.setAttribute("placeholder", "Digite seu nome (ex: Andrei)");
        input.setAttribute("required", true);
        input.setAttribute("pattern", "[A-Za-zÀ-ú]{6,}");
        input.setAttribute("title", "Nome deve ter no mínimo 6 letras");
    }
}