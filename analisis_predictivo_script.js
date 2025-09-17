document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('performanceProjectionChart')) {
        const ctx = document.getElementById('performanceProjectionChart').getContext('2d');
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Bim. 1', 'Bim. 2', 'Bim. 3', 'Bim. 4 (Proy.)', 'Final (Proy.)'],
                datasets: [{
                    label: 'Rendimiento Histórico',
                    data: [13.5, 14.2, 13.8, null, null], // Datos pasados
                    borderColor: 'rgba(76, 29, 149, 1)', // Color primario
                    backgroundColor: 'rgba(76, 29, 149, 0.1)',
                    fill: true,
                    tension: 0.3
                }, {
                    label: 'Rendimiento Proyectado',
                    data: [null, null, 13.8, 13.2, 12.9], // Proyección
                    borderColor: 'rgba(239, 68, 68, 1)', // Color de peligro
                    borderDash: [5, 5], // Línea punteada
                    fill: false,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 10,
                        title: {
                            display: true,
                            text: 'Promedio General'
                        }
                    }
                }
            }
        });
    }
});