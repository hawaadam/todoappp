function add() {
  var input1 = document.getElementById("box1");
  var unorderedlist = document.getElementById("list");

  var names = document.createElement("li");
  var text = document.createTextNode(input1.value);

  names.appendChild(text);

  unorderedlist.appendChild(names);

  input1.value = "";

  var delbtn = document.createElement("button");
  var text2 = document.createTextNode("Delete");

  delbtn.appendChild(text2);

  names.appendChild(delbtn);

  delbtn.setAttribute("onclick", "Deletebutton(this)");
  delbtn.setAttribute("class", "delte");

  var edit = document.createElement("button");
  var text3 = document.createTextNode("Edit");

  edit.appendChild(text3);

  names.appendChild(edit);

  edit.setAttribute("onclick", "Editbutton(this)");
}

function deleteall() {
  var unorderedlist = document.getElementById("list");
  while (unorderedlist.firstChild) {
    unorderedlist.removeChild(unorderedlist.firstChild);
  }
}

function Deletebutton(a) {
  console.log(a.parentNode.remove());
}

function Editbutton(e) {
  var current = prompt("Enter new value");

  var previous = e.parentNode.firstChild.nodeValue;

  e.parentNode.firstChild.nodeValue = current;
}
