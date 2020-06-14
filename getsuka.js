var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

//todo-list = ul
//all event Listeners
ul.addEventListener("click",delcheckFunc);
input.addEventListener("keypress", addListAfterKeypress);

function createLi() {
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	//adding mark button to the li
	const complete_btn = document.createElement("button");
	complete_btn.innerHTML = '<i class="fas fa-check"></i>';
	complete_btn.classList.add("comp_btn");
	todoDiv.appendChild(complete_btn);

	//adding li tags
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	li.classList.add("todo_item");// giving the class name to the created li 
	todoDiv.appendChild(li); //adds li to created div

	//adding delete button to the li
	const delete_btn = document.createElement("button");
	delete_btn.innerHTML = '<i class="fas fa-trash"></i>';
	delete_btn.classList.add("del_btn");
	todoDiv.appendChild(delete_btn);

	//add the entire div to ul
	ul.appendChild(todoDiv);
	input.value = ""; //Reset text input field
	
}

//delete function
function delcheckFunc(e){
	//console.log(e.target);   this will return the delete button tag in the console  
	const item = e.target;
	//deleteing the todo
	if(item.classList[0] === "del_btn")
	{
		const todo = item.parentElement;
		todo.remove();
	}

	if(item.classList[0] === "comp_btn"){
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}


function enterText(){
    if(input.value.length >0)
        createLi();
}

function addListAfterKeypress(event) {
    //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
    if(input.value.length >0 && event.which ===13)
        createLi();
}
