function onReady() {
  const toDos = [];  //define a varialbe that is an empty array
  const addToDoForm = document.getElementById('addToDoForm'); //get the form

  function  createNewToDo() {     //this function adds the input to the array (storing the data)
      const newToDoText = document.getElementById('newToDoText');  //get the input
      if (!newToDoText.value) {return;}  //check that the input has a value

      toDos.push({  //add the value of the input to the toDos array
        title: newToDoText.value, //create a property called "title" and assign it a value of the value of the newToDo Text input
        complete: false //? what is this?
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
      checkbox.type = "checkbox";  //set checkbox type to "checkbox"

      newLi.textContent = toDo.title; //write the title of each array element to a new li

      toDoList.appendChild(newLi); //attach the li to the ul
      newLi.appendChild(checkbox); //attach the checkbox to the li
    });
  }

  addToDoForm.addEventListener('submit',event => { //listen for the 'submit' event
    event.preventDefault(); //prevent a new page from opening
    createNewToDo(); //run the function that adds the input to the array
  });

  renderTheUI(); //why do we need to call this function again if we already called it a the end of createNewToDo?
}
window.onload = function () { //??
  onReady();

};
