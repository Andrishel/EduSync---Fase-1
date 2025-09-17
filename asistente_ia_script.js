document.addEventListener('DOMContentLoaded', () => {
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const promptSuggestions = document.getElementById('prompt-suggestions');

    const addMessage = (text, sender) => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'avatar';
        avatar.textContent = sender === 'ai' ? '🤖' : '👤';
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        const p = document.createElement('p');
        p.textContent = text;
        messageContent.appendChild(p);

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll al final
    };

    const handleSend = () => {
        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;

        addMessage(userMessage, 'user');
        chatInput.value = '';
        
        // Simular respuesta de la IA
        setTimeout(() => {
            let aiResponse = "No estoy seguro de cómo responder a eso. ¿Puedes intentar otra pregunta?";

            if (userMessage.toLowerCase().includes("rendimiento")) {
                aiResponse = "El rendimiento general del 5to grado ha mejorado un 8% este bimestre. El área de Matemáticas muestra el mayor progreso.";
            } else if (userMessage.toLowerCase().includes("asistencia")) {
                aiResponse = "Los estudiantes con más de 5 inasistencias este mes son: Juan Pérez, Ana García y Carlos Mendoza. Se recomienda contactar a los apoderados.";
            } else if (userMessage.toLowerCase().includes("comunicado")) {
                aiResponse = "Claro, aquí tienes un borrador:\n\n'Estimados padres de familia, se les recuerda que la próxima reunión general se llevará a cabo el día viernes a las 5:00 PM en el auditorio principal. Su asistencia es de suma importancia.'";
            }
            
            addMessage(aiResponse, 'ai');
        }, 1000); // Retraso de 1 segundo
    };

    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });

    promptSuggestions.addEventListener('click', (e) => {
        if (e.target.classList.contains('prompt-btn')) {
            chatInput.value = e.target.textContent;
            handleSend();
        }
    });
});