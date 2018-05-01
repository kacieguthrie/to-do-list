function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0; //why isn't this defined in createNewToDo()?

  function  createNewToDo() {     //this function adds the input to the array (make a place to store the data)
      const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText.value) {return;}  //check that the input has a truthy value

      toDos.push({ 
        title: newToDoText.value,
        id: id++ //assign a consecutive number to each new li (just like an array index)
      });
      newToDoText.value = '';

      renderTheUI();
    }

  function deleteToDo(id) {
      return toDos.filter(toDo => toDo.id !== id); //this filter says: compare each element in the toDos array and retrun all that don't match the value of the id
    }

  function renderTheUI() {  //define function that makes the new elements and attaches them to the right places
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){  //for each toDo element of the toDos array do the following:
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      const deleteButton = document.createElement('button'); //make the delete button
      deleteButton.type = 'button'; //set type to button
      deleteButton.innerHTML = 'Delete'; //write delete text to button element

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('click', event => {
        toDos = deleteToDo(toDo.id); //use the id associated with the deleteButton parent li as the argument for the deleteToDo function and repopulate the toDos array with those values that return true.
        renderTheUI(); //make it so using the updated toDos array.
      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function () { //what is this for?
  onReady();

};
