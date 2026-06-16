const form = document.getElementById("form");
const username = document.getElementById("nome");
const email = document.getElementById("email");
const message = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
});

username.addEventListener("blur", () => {
    checkUsername();
});

email.addEventListener("blur", () => {
    checkEmail();
});

message.addEventListener("blur", () => {
    checkMessage();
});

function errorMessage(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("span");

    textMessage.innerText = message;
    formItem.className = "form-content error";
}

function checkUsername() {
    const usernameValue = username.value.trim();
    const partesNome = usernameValue.split(" ");

    if (partesNome.length < 2) {
        errorMessage(username, "Por favor, insira seu nome completo.");
        return;
    } 

    const nomeValido = partesNome.every(parte => parte.length >= 2);

    if (!nomeValido) {
        errorMessage(username, "Por favor, insira 2 caracteres para cada parte do nome.");
        return;
    }

    const formItem = username.parentElement;
    formItem.className = "form-content";
    
}

function checkEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        errorMessage(email, "O campo de email é obrigatório.");
        return;
    }

    if (!emailRegex.test(emailValue)) {
        errorMessage(email, "Por favor, insira um email válido.");
        return;
    }

    const formItem = email.parentElement;
    formItem.className = "form-content";
}

function checkMessage() {
    const messageValue = message.value.trim();

    if (messageValue === "") {
        errorMessage(message, "O campo de mensagem é obrigatório.");
        return;
    }

    if (messageValue.length > 500) {
        errorMessage(message, "A mensagem deve ter no máximo 500 caracteres.");
        return;
    }

    const formItem = message.parentElement;
    formItem.className = "form-content";
}

function checkForm() {
    checkUsername();
    checkEmail();
    checkMessage();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    });

    if(isValid){
        alert("MENSAGEM ENVIADA COM SUCESSO!")
    }
}
