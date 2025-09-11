// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

// Mobile sidebar toggle
function toggleMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

// AI Assistant
function openAIAssistant() {
    alert('¡Hola! Soy tu asistente de IA educativa. ¿En qué puedo ayudarte hoy?\n\n• Generar reportes automáticos\n• Analizar rendimiento estudiantil\n• Crear contenido educativo\n• Programar actividades\n• Responder consultas académicas');
}

// Navigation active state
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         // Remove active class from all links
//         document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
//         // Add active class to clicked link
//         this.classList.add('active');
        
//         // Update page title based on clicked item
//         const pageTitle = document.querySelector('.page-title');
//         const linkText = this.querySelector('span').textContent;
//         pageTitle.textContent = linkText;
//     });
// });

// Search functionality
document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value;
        if (searchTerm.trim()) {
            alert(`Buscando: "${searchTerm}"\n\nResultados encontrados en:\n• Estudiantes\n• Cursos\n• Documentos\n• Actividades`);
        }
    }
});

// Responsive sidebar for mobile
if (window.innerWidth <= 768) {
    document.querySelector('.toggle-sidebar').addEventListener('click', function() {
        toggleMobileSidebar();
    });
}

// Auto-hide mobile sidebar when clicking outside
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        const toggleBtn = document.querySelector('.toggle-sidebar');
        
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            sidebar.classList.remove('show');
        }
    }
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Simulate real-time updates
setInterval(() => {
    const notifications = [
        'Nuevo estudiante matriculado en 5to grado',
        'Reporte de asistencia generado automáticamente',
        'Recordatorio: Reunión de padres mañana a las 3:00 PM',
        'IA detectó mejora en rendimiento de matemáticas'
    ];
    
    if (Math.random() < 0.1) { // 10% chance every interval
        const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
        showNotification(randomNotification, 'success');
    }
}, 30000); // Check every 30 seconds

// Initialize after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add some interactive features
    console.log('EduSync Dashboard loaded successfully!');
    
    // Animate stats on load
    document.querySelectorAll('.stat-card .number').forEach(card => {
        const finalNumber = card.textContent;
        card.textContent = '0';
        
        setTimeout(() => {
            card.style.transition = 'all 1s ease';
            card.textContent = finalNumber;
        }, 500);
    });
});