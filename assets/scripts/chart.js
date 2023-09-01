import Chart from 'chart.js/auto'


export default function () {
    document.addEventListener('DOMContentLoaded', function () {
        const profitChart = document.getElementById("profitChart");
        if (profitChart) {
            const dataDeclared = parseInt(profitChart.dataset.declared);
            const dataNoDeclared = parseInt(profitChart.dataset.undeclared);
            var profitData = {
                labels: [
                    "Declaré",
                    "Non déclaré",
                ],
                datasets: [
                    {
                        data: [dataDeclared, dataNoDeclared],
                        backgroundColor: [
                            "#1ed7bc",
                            "#ff9102",
                        ]
                    }]
            };

            new Chart(profitChart, {
                type: 'pie',
                data: profitData,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Déclaré VS Non declaré'
                        }
                    }
                },
            });
        }

        const viewPerMonthChart = document.getElementById('view-per-month');

        if (viewPerMonthChart) {
            const profitsDeclaredPerMonth = JSON.parse(viewPerMonthChart.dataset.profitsDeclaredPerMonth);
            const profitsUndeclaredPerMonth = JSON.parse(viewPerMonthChart.dataset.profitsUndeclaredPerMonth);

            let profitsUndeclaredPerMonthData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            let profitsDeclaredPerMonthData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            for (const [key, value] of Object.entries(profitsUndeclaredPerMonth)) {
                profitsUndeclaredPerMonthData[key - 1] = value;
            }

            for (const [key, value] of Object.entries(profitsDeclaredPerMonth)) {
                profitsDeclaredPerMonthData[key - 1] = value;
            }

            const labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
            const data = {
                labels: labels,
                datasets: [{
                    label: 'Déclaré',
                    data: profitsDeclaredPerMonthData,
                    borderWidth: 1
                },
                    {
                        label: 'Non déclaré',
                        data: profitsUndeclaredPerMonthData,
                    }
                ]
            };


            new Chart(viewPerMonthChart, {
                type: 'bar',
                labels: labels,
                data: data,
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: "Gains par mois sur l'année en cours"
                        },
                    },
                    responsive: true,
                    scales: {
                        x: {
                            beginAtZero: true,
                            stacked: true,
                        },
                        y: {
                            beginAtZero: true,
                            stacked: true
                        }
                    }
                }
            });
        }
    });
}
