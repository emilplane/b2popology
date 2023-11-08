export function getPathingData(path) {
    let output = {
        "originalValues": path
    };

    if (path[0] > path[1] && path[0] > path[2]) {
        output.mainPath = 0
        output.mainPathName = "top"
        output.mainPathValue = path[0]
        if (path[1] > path[2]) {
            output.crosspathPath = 1
            output.crosspathPathName = "middle"
            output.crosspathPathValue = path[1]
            output.lastPath = 2
            output.lastPathName = "bottom"
            output.lastPathValue = path[2]
        } else {
            output.crosspathPath = 2
            output.crosspathPathName = "bottom"
            output.crosspathPathValue = path[2]
            output.lastPath = 1
            output.lastPathName = "middle"
            output.lastPathValue = path[1]
        }
    } else if (path[1] > path[2]) {
        output.mainPath = 1
        output.mainPathName = "middle"
        output.mainPathValue = path[1]
        if (path[0] > path[2]) {
            output.crosspathPath = 0
            output.crosspathPathName = "top"
            output.crosspathPathValue = path[0]
            output.lastPath = 2
            output.lastPathName = "bottom"
            output.lastPathValue = path[2]
        } else {
            output.crosspathPath = 2
            output.crosspathPathName = "bottom"
            output.crosspathPathValue = path[2]
            output.lastPath = 0
            output.lastPathName = "top"
            output.lastPathValue = path[0]
        }
    } else {
        output.mainPath = 2
        output.mainPathName = "bottom"
        output.mainPathValue = path[2]
        if (path[0] > path[1]) {
            output.crosspathPath = 0
            output.crosspathPathName = "top"
            output.crosspathPathValue = path[0]
            output.lastPath = 1
            output.lastPathName = "middle"
            output.lastPathValue = path[1]
        } else {
            output.crosspathPath = 1
            output.crosspathPathName = "middle"
            output.crosspathPathValue = path[1]
            output.lastPath = 0
            output.lastPathName = "top"
            output.lastPathValue = path[0]
        }
    }

    if (output.mainPathValue == 0) {
        output.hasMainPath = false
    } else {
        output.hasMainPath = true
    }

    if (output.crosspathPathValue == 0) {
        output.hasCrosspath = false
    } else {
        output.hasCrosspath = true
    }

    if (output.crosspathPathValue == 0) {
        output.hasLastPath = false
    } else {
        output.hasLastPath = true
    }

    return output
}

export function numberPathNameConversion(data) {
    if (typeof data == "string") {
        if (data == "top") {return 0}
        if (data == "middle") {return 1}
        if (data == "bottom") {return 2}
    } else {
        if (data == 0) {return "top"}
        if (data == 1) {return "middle"}
        if (data == 2) {return "bottom"}
    }
}

export function getTowerCostData(tower, crosspath, sellModifier) {
    let output = {};

    output.upgradeCost = tower.costs[getPathingData(crosspath).mainPathName][getPathingData(crosspath).mainPathValue-1]
    if (getPathingData(crosspath).hasMainPath == false) {
        output.upgradeCost = tower.costs.base
    }

    output.totalCost = tower.costs.base
    for (let  i = 0; i < getPathingData(crosspath).mainPathValue; i++) {
        output.totalCost = output.totalCost + tower.costs[getPathingData(crosspath).mainPathName][i]
    }
    for (let  i = 0; i < getPathingData(crosspath).crosspathPathValue; i++) {
        output.totalCost = output.totalCost + tower.costs[getPathingData(crosspath).crosspathPathName][i]
    }
    for (let  i = 0; i < getPathingData(crosspath).lastPathValue; i++) {
        output.totalCost = output.totalCost + tower.costs[getPathingData(crosspath).lastPathName][i]
    }

    if (sellModifier == undefined) {
        output.sellCost = (output.totalCost*100 *0.7 /100); output.sellCostLoss = (output.totalCost*100 *0.3 /100)
    }

    return output
}
