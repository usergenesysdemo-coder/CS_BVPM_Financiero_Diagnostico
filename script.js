const ctx = document.getElementById('ftsChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Lagging', 'Leaning', 'Leading', 'Unknown'],
          datasets: [{
            label: 'Peso estratégico del problema',
            data: [68, 75, 90, 96],
            backgroundColor: ['#f59e0b', '#fb923c', '#ff5a1f', '#6d28d9'],
            borderRadius: 10
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return context.raw + ' / 100';
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              grid: { color: '#e5e7eb' },
              ticks: { color: '#6b7280' }
            },
            x: {
              grid: { display: false },
              ticks: { color: '#374151' }
            }
          }
        }
      });
    }

    const topicButtons = document.querySelectorAll('[data-topic]');
    const topicPanels = document.querySelectorAll('[data-panel]');

    topicButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.topic;
        topicButtons.forEach(b => b.classList.remove('active'));
        topicPanels.forEach(panel => panel.classList.remove('active'));
        btn.classList.add('active');
        document.querySelector(`[data-panel="${target}"]`)?.classList.add('active');
      });
    });