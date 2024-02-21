let data = [
    0,
    6,
    31.25,
    56.25,
    82.75,
    114.75,
    145.25,
    172.25,
    199.75,
    224,
    249.5,
    265.25,
    284,
    306.75,
    328.75,
    345.25,
    368.75,
    404,
    446.25,
    475,
    514.75,
    532.75,
    553.5,
    586.75,
    603.5,
    667.75,
    714,
    751.75,
    783.5,
    814.75,
    866.5,
    889.5,
    948.044,
    967.824,
    1000.824,
    1019.5156599999999,
    1070.9076599999999,
    1102.85566,
    1195.49066,
    1264.66149,
    1364.91149,
    1393.91149,
    1439.84149,
    1475.09149,
    1506.34149,
    1531.14149,
    1553.29149,
    1598.54149,
    1623.79149,
    1666.16149,
    1706.41149,
    1738.5114899999999
]

var svgNS = "http://www.w3.org/2000/svg";

class Chart {
    constructor(chartData) {
        this.rightAxis = chartData.rightAxis
        this.leftAxis = chartData.leftAxis
        this.chartContainerID = chartData.containerID

        let SVGElement = document.createElementNS(svgNS, "svg")
        SVGElement.setAttributeNS(null, "width", "200")
        SVGElement.setAttributeNS(null, "height", "200")
        console.log(SVGElement)
        document.getElementById(chartData.containerID).insertAdjacentElement("beforeend", SVGElement)
    }

    addSVGElement(elementData) {
        let newElement = document.createElementNS(svgNS, "svg")
    }
}

let testChart = new Chart(
    {
        "containerID": "chart",
        "rightAxis": [
            {
                "data": data
            }
        ],
        "leftAxis": []
    }
)