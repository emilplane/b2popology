/** Config data for the ecosim chart */
export default function(ecosimData, verticalReferenceMarkers) {
    let data = ecosimData
    return {
        borderWidth: 2,
        data: {
            labels: data.convertedTimeStates,
            datasets: [{
                type: 'line',
                label: 'Amount of eco',
                yAxisID: "amountOfEco",
                xAxisID: "x",
                data: data.convertedEcoStates
            }, {
                type: 'line',
                label: 'Amount of cash',
                yAxisID: "amountOfCash",
                xAxisID: "x",
                data: data.convertedCashStates
            }]
        },
        options: {
            color: "#FFFFFF",
            responsive: true,
            maintainAspectRatio: false,
            pointRadius: 0,
            pointHitRadius: 6,
            scales: {
                "amountOfEco": {
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        color: "#FFFFFF",
                        max: 1,
                        min: 0
                    },
                    title: {
                        display: true,
                        text: 'Amount of Eco',
                        color: '#FFFFFF',
                        font: {
                            family: 'Gabarito',
                            size: 16,
                            lineHeight: 1.2,
                        }
                    }
                },
                "amountOfCash": {
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        color: "#FFFFFF",
                    },
                    title: {
                        display: true,
                        text: 'Amount of Cash',
                        color: '#FFFFFF',
                        font: {
                            family: 'Gabarito',
                            size: 16,
                            lineHeight: 1.2,
                        }
                    }
                },
                "x": {
                    ticks: {
                        color: "#FFFFFF",
                        maxTicksLimit: "10",
                        maxRotation: 0
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {label += ': ';}
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                },
                legend: {
                    labels: {
                        font: {
                            fanily: "Gabarito"
                        }
                    }
                },
                annotation: {
                    annotations: verticalReferenceMarkers
                }
            }
        }
    }
}