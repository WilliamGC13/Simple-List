let id = 0;

document.getElementById("add").addEventListener("click", () => {
    let table = document.getElementById("list");
    let row = table.insertRow(1); 
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("new-item").value;
    row.insertCell(1).innerHTML = document.getElementById("location").value;
    row.insertCell(2).innerHTML = document.getElementById("date").value;
    let action = row.insertCell(3);
    action.appendChild(createDeleteButton(id++));
    document.getElementById("new-item").value = " ";
    document.getElementById("location").value = " ";
    document.getElementById("date").value = " ";
});




function createDeleteButton(id){
    let btn = document.createElement("button");
    btn.className = "btn btn-danger";
    btn.id = id;
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}
