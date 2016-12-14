var today = new Date()
document.getElementById("start").valueAsDate = today;

//clicked on the Save Button
document.getElementById("addItem").addEventListener("click", function() {

	var subjectValue = document.getElementById("inputSubject").value;
	var descriptionValue = document.getElementById("inputDescription").value;
	var startValue = document.getElementById("start").value;
	var deadlineValue = document.getElementById("deadline").value;

	
	if(true){
		addItemTodo(subjectValue, descriptionValue,startValue,deadlineValue);
		console.log("I'm invinseble!");
		document.getElementById("inputSubject").value = "";
		document.getElementById("inputDescription").value = "";
		document.getElementById("deadline").value = "";
	}
});

//function to remove item from todo list
function removeItem() {
	var itemLi = this.parentNode.parentNode;
	var parentUl = itemLi.parentNode;
	parentUl.removeChild(itemLi);
}
//function for items done
function itemDone(){
	var itemLi = this.parentNode.parentNode;
	var parentUl = itemLi.parentNode;
	var id = parentUl.id;
	parentUl.removeChild(itemLi);

	if (id === "todo"){
		var completeList = document.getElementById("complete");
		completeList.appendChild(itemLi);
	}
	else{
		var list = document.getElementById("todo");
		list.appendChild(itemLi);
	}
}

//Function to edit task
function editTask(){
	var itemLi = this.parentNode.parentNode;
	//finding the child with class Subject
	var subjectChild = null;
	for (var i = 0; i < itemLi.childNodes.length; i++) {
	    if (itemLi.childNodes[i].className == "subject") {
	      subjectChild = itemLi.childNodes[i];
	      break;
	    }        
	}

	var subject = subjectChild.innerText;
	var subjectInput = document.getElementById("inputSubject");
	subjectInput.value = subject;

	var dateChild = null;
	for (var i = 0; i < itemLi.childNodes.length; i++) {
	    if (itemLi.childNodes[i].className == "dates") {
	      dateChild = itemLi.childNodes[i];
	      break;
	    }        
	}

	var date = dateChild.innerText.substring(13);
	var dateInput = document.getElementById("deadline");
	dateInput.value = date;
}

//creates and put in the values in new todo task
function addItemTodo(sub,desc,start,dead){
	var list = document.getElementById("todo");

	var todoLi = document.createElement("li");

	var buttonsDiv= document.createElement("div");
	buttonsDiv.classList.add("buttonDiv");

	var remove = document.createElement("button");
	remove.classList.add("smallBtn");
	remove.classList.add("delete");
	remove.innerText = "del"; 

	//add clockevent for removing the item
	remove.addEventListener("click", removeItem)


	var done = document.createElement("button");
	done.classList.add("smallBtn");
	done.classList.add("done");
	done.innerText = "done"; 

	//add click event for completing the item
	done.addEventListener("click", itemDone)

	var edit = document.createElement("button");
	edit.classList.add("smallBtn");
	edit.classList.add("edit");
	edit.innerText = "edit"; 

	edit.addEventListener("click", editTask)


	var subjectP = document.createElement("p");
	subjectP.innerText = sub;
	subjectP.classList.add("subject");
	var datesP = document.createElement("p");
	datesP.innerText = start + " - " + dead; 
	datesP.classList.add("dates");
	var descriptionP = document.createElement("p");
	descriptionP.innerText = desc;
	descriptionP.classList.add("description");



//put the buttons in a buttonsdiv
	buttonsDiv.appendChild(remove);
	buttonsDiv.appendChild(done);
	buttonsDiv.appendChild(edit);

//put the buttonsdiv in a todoli
	todoLi.appendChild(buttonsDiv);

//put put todo content in todoLi
	todoLi.appendChild(subjectP);
	todoLi.appendChild(datesP);
	todoLi.appendChild(descriptionP);
//put the li in an ul
	list.appendChild(todoLi);
}



var deleteBtn = document.getElementById