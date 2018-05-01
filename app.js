function onReady() {
  const toDos = [];  //define a varialbe that is an empty array
  const addToDoForm = document.getElementById('addToDoForm'); //get the form
  let id = 0;

  function  createNewToDo() {     //this function adds the input to the array (make a place to store the data)
      const newToDoText = document.getElementById('newToDoText');  //get the input
      if (!newToDoText.value) {return;}  //check that the input has a truthy value

      toDos.push({  //add the value of the input to the toDos array (is this actualy an array or just an object?)
        title: newToDoText.value, //create a property called "title" and assign it a value of the value of the newToDo Text input
        id: id++, //assign a consecutive number to each new li (just like an array)?
      });
      newToDoText.value = ''; //clear the input

      renderTheUI(); //make the new elements and attach them to the right places
    }

  function renderTheUI() {  //define function that makes the new elements and attaches them to the right places
    const toDoList = document.getElementById('toDoList'); //get the ul

    toDoList.textContent = ''; //write an empty string to the ul

    toDos.forEach(function(toDo){  //for each toDo element of the toDos array do the following:
      const newLi = document.createElement('li');  //create a new li
      const checkbox = document.createElement('input'); //create a new checkbox
      checkbox.type = 'checkbox';  //set checkbox type to "checkbox"

      const deleteButton = document.createElement('button'); //make the delete button
      deleteButton.type = 'button'; //set type to button
      deleteButton.innerHTML = 'Delete'; //write delete text to button element

      newLi.textContent = toDo.title; //write the title of each array element to a new li

      toDoList.appendChild(newLi); //attach the li to the ul
      newLi.appendChild(checkbox); //attach the checkbox to the li
      newLi.appendChild(deleteButton); //attach the delete button to the li
    });
  }

  addToDoForm.addEventListener('submit',event => { //listen for the 'submit' event (why curly brackets? are we defining an anon function?)
    event.preventDefault(); //prevent a new page from opening
    createNewToDo(); //run the function that adds the input to the array
  });

  deleteButton.addEventListener('click', event => {
    let newToDos = toDos.filter(toDo => toDo.id !== id);
  });

  renderTheUI();
}
window.onload = function () {
  onReady();

};
