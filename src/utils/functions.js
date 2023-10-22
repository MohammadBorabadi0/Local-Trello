
let getColumnsFromLocalStorage;
let getTasksFromLocalStorage;
let getPrimaryColorsFromLocalStorage;
let getSecondaryColorsFromLocalStorage;
let getLightModeFromLocalStorage;
let getBgThemeFromLocalStorage;

if (typeof window !== 'undefined') {

    if (localStorage.getItem("columns")) {
        getColumnsFromLocalStorage = JSON.parse(localStorage.getItem("columns"));
    } else {
        getColumnsFromLocalStorage = [];
    }

    if (localStorage.getItem("tasks")) {
        getTasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    } else {
        getTasksFromLocalStorage = [];
    }

    if (localStorage.getItem("primaryColors")) {
        getPrimaryColorsFromLocalStorage = JSON.parse(localStorage.getItem("primaryColors"));
    } else {
        getPrimaryColorsFromLocalStorage = null;
    }

    if (localStorage.getItem("secondaryColors")) {
        getSecondaryColorsFromLocalStorage = JSON.parse(localStorage.getItem("secondaryColors"));
    } else {
        getSecondaryColorsFromLocalStorage = null;
    }

    if (localStorage.getItem("lightMode")) {
        getLightModeFromLocalStorage = JSON.parse(localStorage.getItem("lightMode"));
    } else {
        getLightModeFromLocalStorage = null;
    }

    if (localStorage.getItem("bgTheme")) {
        getBgThemeFromLocalStorage = JSON.parse(localStorage.getItem("bgTheme"));
    } else {
        getBgThemeFromLocalStorage = null;
    }
}

export { getColumnsFromLocalStorage, getTasksFromLocalStorage, getSecondaryColorsFromLocalStorage, getPrimaryColorsFromLocalStorage, getLightModeFromLocalStorage, getBgThemeFromLocalStorage };