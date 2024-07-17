"use strict";
function storeCarinfo(manufacturer, modelName, ...extraOption) {
    let carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
const answere = storeCarinfo("Honda", "Civic", { color: "black" }, { features: ["navigation", "Power window"] });
console.log(answere);
