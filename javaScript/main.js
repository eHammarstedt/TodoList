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

	var done = document.createElement("button");
	done.classList.add("smallBtn");
	done.classList.add("done");
	done.innerText = "done"; 

	var edit = document.createElement("button");
	edit.classList.add("smallBtn");
	edit.classList.add("edit");
	edit.innerText = "edit"; 


	var subjectP = document.createElement("p");
	subjectP.innerText = sub;
	var datesP = document.createElement("p");
	datesP.innerText = start + " - " + dead; 
	datesP.classList.add("dates");
	var descriptionP = document.createElement("p");
	descriptionP.innerText = desc;



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