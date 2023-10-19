let getColumnsFromLocalStorage;
if (localStorage?.getItem("columns")) {
    getColumnsFromLocalStorage = JSON.parse(localStorage.getItem("columns"));
} else {
    getColumnsFromLocalStorage = [];
}

let getTasksFromLocalStorage;

if (localStorage?.getItem("tasks")) {
    getTasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
} else {
    getTasksFromLocalStorage = [];
}

export { getColumnsFromLocalStorage, getTasksFromLocalStorage };