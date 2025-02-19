// Get the form element
const form = document.querySelector('.frms');

// Add a click event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  const description = document.querySelector('input[type="text"]').value;
  const amount = document.querySelector('input[type="number"]').value;
  const category = document.querySelector('select').value;
  const date = document.querySelector('input[type="date"]').value;

  // Create new elements for the expense entry
  const newExpense = document.createElement('div');
  newExpense.classList.add('expense');

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = `Description: ${description}`;

  const amountElement = document.createElement('p');
  amountElement.textContent = `Amount: ${amount}`;

  const categoryElement = document.createElement('p');
  categoryElement.textContent = `Category: ${category}`;

  const dateElement = document.createElement('p');
  dateElement.textContent = `Date: ${date}`;

  // Append the new elements to the form
  newExpense.appendChild(descriptionElement);
  newExpense.appendChild(amountElement);
  newExpense.appendChild(categoryElement);
  newExpense.appendChild(dateElement);

  form.appendChild(newExpense);

  // Clear the input fields
  form.reset();
});