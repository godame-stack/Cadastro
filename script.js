// 1. Suas credenciais reais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyASU2XPFrQAkrJr8EQ5zHyam-lu4ElXbxU",
  authDomain: "cadastro-10195.firebaseapp.com",
  projectId: "cadastro-10195",
  storageBucket: "cadastro-10195.firebasestorage.app",
  messagingSenderId: "134071854178",
  appId: "1:134071854178:web:626b7a06c3b3b83ad51d3b",
  measurementId: "G-TCXBCHEHYK"
};

// 2. Inicialização do Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 3. Função de Login
function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const msg = document.getElementById("mensagem");

    auth.signInWithEmailAndPassword(email, senha)
        .then(() => {
            msg.innerText = "Login realizado com sucesso!";
            msg.style.color = "green";
        })
        .catch((error) => {
            msg.innerText = error.message;
            msg.style.color = "red";
        });
}

// 4. Função de Cadastro
function cadastrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const msg = document.getElementById("mensagem");

    auth.createUserWithEmailAndPassword(email, senha)
        .then(() => {
            msg.innerText = "Conta criada com sucesso!";
            msg.style.color = "green";
        })
        .catch((error) => {
            msg.innerText = error.message;
            msg.style.color = "red";
        });
}

