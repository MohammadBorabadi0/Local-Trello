
let getColumnsFromLocalStorage;
let getTasksFromLocalStorage;

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
}

export { getColumnsFromLocalStorage, getTasksFromLocalStorage };