function storeCarInfo(manufacturer: string, modelName: string, ...extraOptions: object[]): object {
    let carInfo = Object.assign({ manufacturer, modelName }, ...extraOptions);
    return carInfo;
}

const answer = storeCarInfo("Honda", "Civic", { color: "black" }, { features: ["navigation", "Power window"] });
console.log(answer);
