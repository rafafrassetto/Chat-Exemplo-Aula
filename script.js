document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const chatBox = document.getElementById('chat-box');

    // Função para adicionar uma nova mensagem de usuário ao histórico de chat
    function addMessage(message, isUser) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('chat-message');
        if (isUser) {
            messageContainer.classList.add('user-message');
        } else {
            messageContainer.classList.add('bot-message');
        }
        const messageBubble = document.createElement('div');
        messageBubble.classList.add('message-bubble');
        messageBubble.textContent = message;
        messageContainer.appendChild(messageBubble);
        chatBox.appendChild(messageContainer);
        // Role para a parte inferior do chat para exibir a nova mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Função para manipular o envio de mensagens pelo usuário
    function handleSendMessage(event) {
        event.preventDefault(); // Evita o recarregamento da página ao enviar o formulário
        const message = userInput.value.trim();
        if (message !== '') {
            addMessage(message, true);
            userInput.value = ''; // Limpa o campo de entrada após o envio da mensagem
            // Aqui você pode adicionar a lógica para responder à mensagem do usuário (opcional)
        }
    }

    // Adiciona um ouvinte de eventos para o clique do botão de envio
    sendBtn.addEventListener('click', handleSendMessage);

    // Adiciona um ouvinte de eventos para o envio do formulário
    document.getElementById('chat-form').addEventListener('submit', handleSendMessage);
});
