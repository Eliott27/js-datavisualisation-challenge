//Graphique 1
// Données du tableau HTML
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

// Données du graphique
const chartData = {
  labels: labels,
  datasets: [],
};

for (let i = 0; i < 11; i++) {
  const dataset = {
    label: (2002 + i).toString(),
    data: data.map((row) => row[i]),
    backgroundColor: `rgba(54, 162, 235, 0.2)`,
    borderColor: `rgba(54, 162, 235, 1)`,
    borderWidth: 1,
  };
  chartData.datasets.push(dataset);
}

// Créez un élément div pour afficher le graphique
const chartContainer = document.createElement("div");

// Créez un canvas pour le graphique
const canvas = document.createElement("canvas");
canvas.width = 400; // Personnalisez la largeur du graphique
canvas.height = 200; // Personnalisez la hauteur du graphique
chartContainer.appendChild(canvas);

// Insérez le graphique avant le tableau
table.parentNode.insertBefore(chartContainer, table);

// Créez un contexte de dessin pour le canvas
const ctx = canvas.getContext("2d");

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

//Graphique 2

const table2 = document.getElementById("table2");
const countries = [];
const data200709 = [];
const data201012 = [];
for (let i = 2; i < table2.rows.length; i++) {
  const row = table2.rows[i];
  const country = row.cells[1].textContent;
  countries.push(country);
  const value200709 = parseFloat(row.cells[2].textContent.replace(',', '.'));
  data200709.push(value200709);
  const value201012 = parseFloat(row.cells[3].textContent.replace(',', '.'));
  data201012.push(value201012);
}

// Créez un élément div pour afficher le deuxième graphique
const chartContainer2 = document.createElement("div");

// Créez un canvas pour le deuxième graphique
const canvas2 = document.createElement("canvas");
canvas2.width = 400; // Personnalisez la largeur du graphique
canvas2.height = 200; // Personnalisez la hauteur du graphique
chartContainer2.appendChild(canvas2);

// Insérez le deuxième graphique avant le tableau2
table2.parentNode.insertBefore(chartContainer2, table2);

// Créez un contexte de dessin pour le deuxième canvas
const ctx2 = canvas2.getContext("2d");

// Créez le deuxième graphique
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: countries,
    datasets: [
      {
        label: "2007-09",
        data: data200709,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "2010-12",
        data: data201012,
        backgroundColor: "rgba(192, 75, 75, 0.2)",
        borderColor: "rgba(192, 75, 75, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  },
});

