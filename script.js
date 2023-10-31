// Récupérez les données des tableaux HTML
const table = document.getElementById("table1");
const data = [];
const labels = [];
for (let i = 2; i < table.rows.length; i++) {
  const row = table.rows[i];
  const country = row.cells[1].textContent;
  labels.push(country);
  const values = [];
  for (let j = 2; j < row.cells.length; j++) {
    const value = parseFloat(row.cells[j].textContent.replace(',', '.'));
    values.push(value);
  }
  data.push(values);
}

// Créez un objet de données pour le graphique
const chartData = {
  labels: labels,
  datasets: [],
};

// Remplissez le tableau datasets avec les données
for (let i = 0; i < 11; i++) {
  const dataset = {
    label: (2002 + i).toString(),
    data: data.map((row) => row[i]),
    backgroundColor: `rgba(54, 162, 235, 0.2)`, // Couleur de fond
    borderColor: `rgba(54, 162, 235, 1)`, // Couleur de la bordure
    borderWidth: 1,
  };
  chartData.datasets.push(dataset);
}

// Créez un contexte de dessin pour le canvas
const ctx = document.getElementById("myChart").getContext("2d");

// Créez le graphique
const myChart = new Chart(ctx, {
  type: "bar",
  data: chartData,
  options: {
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  },
});
