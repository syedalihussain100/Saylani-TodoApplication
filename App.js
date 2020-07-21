var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li');
    li.setAttribute("class","item")
    var li_Text = document.createTextNode(todo_item.value);


    li.appendChild(li_Text);

    ///////////////Delete Butoon////////////////
   var deleteBtn = document.createElement("button")
   var deleteText = document.createTextNode("Delete")
   deleteBtn.setAttribute("class","removeButton")
   deleteBtn.setAttribute("onclick","deleteItem(this)")
   deleteBtn.appendChild(deleteText);

   li.appendChild(deleteBtn)

/////////////create Edit button/////////////////////////////

var editButton = document.createElement("button")
var edittext = document.createTextNode("Edit")
editButton.appendChild(edittext)
editButton.setAttribute("onclick","editItem(this)")
editButton.setAttribute("class","editButton")




 
   li.appendChild(editButton)

    list.appendChild(li)
    todo_item.value="";
}

function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("Enter Edit Value!!!",val)
    
 
     e.parentNode.firstChild.nodeValue = editValue
}

function Deleteall(){
    list.innerHTML = ""
}