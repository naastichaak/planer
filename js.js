let count = 1;
let ul = document.getElementById("list");

function add() {
    let val = document.getElementById("text").value;
    if (val) {
    let item = document.createElement("li");
    item.textContent = val;
    item.id = `Item${count}`;
    item.setAttribute("onclick", `changeStatus(${count})`);
    count++;
    ul.append(item);
    document.getElementById("text").value = "";
    }
}


function changeStatus(arg) {
    let del = document.getElementById(`Item${arg}`);
    del.remove();
}