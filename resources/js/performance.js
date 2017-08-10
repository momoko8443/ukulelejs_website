import Chart from '../../bower_components/Chart.js/dist/Chart.min';

export default function () {
    var options = {
        legend: {
            position: "bottom",
            display: true,
            labels: {
                fontColor: '#cccccc'
            }
        }
    };

    var myBarChart;
    var data = {
        labels: ["ukulele", "ukujs web component", "angular", "avalon", "react", "vue", "polymer"],
        datasets: [
            {
                label: "2000",
                backgroundColor: [
                    '#ff6384',
                    '#ff6384',
                    '#ff6384',
                    '#ff6384',
                    '#ff6384',
                    '#ff6384',
                    '#ff6384'
                ],
                data: []
            },
            {
                label: "20000",
                backgroundColor: [
                    '#ffce56',
                    '#ffce56',
                    '#ffce56',
                    '#ffce56',
                    '#ffce56',
                    '#ffce56',
                    '#ffce56'

                ],
                data: []
            }
        ]
    };
    function drawBarChart() {

        var metadata = {
            "2000": {
                "ukulele": [],
                "ukujs web component": [],
                "angular": [],
                "avalon": [],
                "react": [],
                "vue": [],
                "polymer": []
            },
            "20000": {
                "ukulele": [],
                "ukujs web component": [],
                "angular": [],
                "avalon": [],
                "react": [],
                "vue": [],
                "polymer": []
            }

        }
        renderChart(metadata);
        window.addEventListener('message', function (event) {
            //console.log(event.data);
            var record = JSON.parse(event.data);
            var framework = record.name;
            var runTime = record.runTime;
            var type = record.type;
            if (metadata[type] && metadata[type][framework]) {
                metadata[type][framework].push(runTime);
                renderChart(metadata);
            }
        });

        function renderChart(result) {
            var copyData = JSON.parse(JSON.stringify(data));
            var dataProvider = {};
            for (var type in result) {
                var obj = result[type];
                for (var framework in obj) {
                    var timeArray = obj[framework];
                    var avg = getTimeAvg(timeArray);
                    if (!dataProvider[framework]) {
                        dataProvider[framework] = {};
                    }
                    dataProvider[framework][type] = avg;
                }
            }
            for (var i = 0; i < copyData.labels.length; i++) {
                var name = copyData.labels[i];

                for (var type in dataProvider[name]) {
                    var dataset = getDatasetByLabel(copyData, type);
                    dataset.data.push(dataProvider[name][type]);
                }
            }
            if (!myBarChart) {
                var ctx = document.getElementById("myChart").getContext("2d");
                myBarChart = new Chart(ctx, { data: copyData, options: options, type: 'horizontalBar' });

                var legend = myBarChart.generateLegend();
            } else {
                myBarChart.data.datasets = copyData.datasets;
                myBarChart.update();
            }

        };

        function getDatasetByLabel(data, lable) {
            for (var i = 0; i < data.datasets.length; i++) {
                var dataset = data.datasets[i];
                if (dataset.label === lable) {
                    return dataset;
                }
            }
            return null;
        }

        function getTimeAvg(arr) {
            var avg = 0;
            if (arr && arr.length > 0) {
                var sum = 0;
                for (var i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                avg = Math.floor(sum / arr.length);
            }
            return avg;
        }
    }
    this.init = function () {
        drawBarChart();
    };
};