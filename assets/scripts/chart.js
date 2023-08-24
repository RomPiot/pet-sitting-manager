import Chart from 'chart.js/auto'

export default function () {
    document.addEventListener('DOMContentLoaded', function () {
        const profitChart = document.getElementById("profitChart");

        if (profitChart) {
            console.log(profitChart)

            const dataDeclared = parseInt(profitChart.dataset.declared);
            const dataNoDeclared = parseInt(profitChart.dataset.undeclared);
            console.log(dataDeclared)
            console.log(dataNoDeclared)


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

    });

}
