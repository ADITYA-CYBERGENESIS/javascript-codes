var wind = 75;

if (wind < 25) {
    console.log("Wind is not strong.");
}
else if (wind >= 25 && wind < 39) {
    console.log("Strong wind.");
}
else if (wind >= 39 && wind < 55) {
    console.log("Gale.");
}
else if (wind >= 55 && wind < 72) {
    console.log("Whole gale.");
}
else {
    console.log("Hurricane.");
}
