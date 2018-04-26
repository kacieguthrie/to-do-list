function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    //add MDL class to li
    newLi.classList.add('mdl-list__item')

    // create a new input
    let checkbox = document.createElement('input');

    //add MDL to checkbox
    checkbox.classList.add('mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect')

    // set the input's type to checkbox
    checkbox.type = 'checkbox';

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    // create a delete button
    let deleteButton = document.createElement('button');

    //add MDL to delete button
    deleteButton.classList.add("mdl-button");

    // set the type to button
    deleteButton.type = 'button';

    // attach the delete button to the li
    newLi.appendChild(deleteButton);

    // name the delete button
    deleteButton.innerHTML = 'Delete';

    deleteButton.addEventListener('click', () => {
      newLi.parentNode.removeChild(newLi);
    })

  });

}
window.onload = function () {
  onReady();

};
