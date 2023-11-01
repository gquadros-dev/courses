import Chart from 'chart.js/auto'

new Chart(
  document.getElementById('acquisitions'),
  {
    type: 'bar',
    options: {
      animation: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      }
    },
    data: {
      labels: data.map(row => row.year),
      datasets: [
        {
          label: 'Acquisitions by year',
          data: data.map(row => row.count)
        }
      ]
    }
  }
);