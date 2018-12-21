// Storing svg icons of delete and complete button
var deleteSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>';
var completeSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg>';

// Selecting both list from DOM
var todoList = document.querySelector('#todo');
var completeList = document.querySelector('#done');

var msg = document.querySelector('#msg');

// Fucntion for adding todo to list
function addTodo() {
    // taking value from input
    var text = document.querySelector('#item').value;
    // clearing value from inout feild
    document.querySelector('#item').value = '';

    // Checks if string has something in it
    if(text) {
        var li = document.createElement('li');
        li.innerText = text;

        var deleteBT = document.createElement('button');
        deleteBT.innerHTML = deleteSVG;
        deleteBT.addEventListener('click',removeItem);

        var completeBT = document.createElement('button');
        completeBT.innerHTML = completeSVG;
        completeBT.addEventListener('click', complete);

        var div = document.createElement('div');
        div.appendChild(deleteBT);
        div.appendChild(completeBT);
        
        li.appendChild(div);

        todoList.insertBefore(li, todoList.childNodes[0]);
    } else {
        msg.classList = "msgshow";
        setTimeout(() => {
            msg.classList = '';
        }, 2000); 
    }
}

function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

function complete() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    if(parent === todoList) {
        completeList.insertBefore(item, completeList.childNodes[0]);
    } else {
        todoList.insertBefore(item, todoList.childNodes[0]);
    }
    parent.removeChild(item);

}

document.querySelector('#add').addEventListener('click',addTodo);
