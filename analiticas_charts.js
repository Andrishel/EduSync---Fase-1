document.addEventListener('DOMContentLoaded', () => {
    // Este código solo se ejecutará si encuentra el elemento 'performanceChart',
    // es decir, solo en la página de analíticas.
    if (document.getElementById('performanceChart')) {

        // GRÁFICO 1: Rendimiento por Asignatura (Barras)
        const performanceCtx = document.getElementById('performanceChart').getContext('2d');
        new Chart(performanceCtx, {
            type: 'bar',
            data: {
                labels: ['Matemáticas', 'Ciencias', 'Historia', 'Literatura', 'Inglés', 'Arte'],
                datasets: [{
                    label: 'Calificación Promedio',
                    data: [82, 88, 79, 91, 85, 93],
                    backgroundColor: ['rgba(75, 192, 192, 0.6)','rgba(255, 159, 64, 0.6)','rgba(255, 205, 86, 0.6)','rgba(54, 162, 235, 0.6)','rgba(153, 102, 255, 0.6)','rgba(255, 99, 132, 0.6)'],
                    borderColor: ['rgba(75, 192, 192, 1)','rgba(255, 159, 64, 1)','rgba(255, 205, 86, 1)','rgba(54, 162, 235, 1)','rgba(153, 102, 255, 1)','rgba(255, 99, 132, 1)'],
                    borderWidth: 1,
                    borderRadius: 5
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 100 } } }
        });

        // GRÁFICO 2: Tendencia de Asistencia (Líneas)
        const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
        new Chart(attendanceCtx, {
            type: 'line',
            data: {
                labels: ['Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
                datasets: [{
                    label: 'Asistencia Promedio (%)',
                    data: [92.5, 94.1, 93.8, 95.0, 94.5, 96.2],
                    fill: true,
                    backgroundColor: 'rgba(106, 27, 154, 0.1)',
                    borderColor: '#6A1B9A',
                    tension: 0.4
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: false, min: 90 } } }
        });

        // GRÁFICO 3: Distribución de Calificaciones (Dona)
        const gradesCtx = document.getElementById('gradesChart').getContext('2d');
        new Chart(gradesCtx, {
            type: 'doughnut',
            data: {
                labels: ['Excelentes (A)', 'Buenas (B)', 'Suficientes (C)', 'A mejorar (D)'],
                datasets: [{
                    label: 'Distribución',
                    data: [45, 35, 15, 5],
                    backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#F44336'],
                    hoverOffset: 4
                }]
            },
            options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
        });
    }
});