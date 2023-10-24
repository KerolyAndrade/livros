document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que o formulário seja enviado de forma tradicional
  
    // Obter os valores do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Exibir os valores no console
    console.log('Usuário:', username);
    console.log('Senha:', password);
  
    // Você pode adicionar aqui a lógica para enviar os dados ao servidor ou fazer a autenticação
  });
  