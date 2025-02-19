const form = document.querySelector('.frms');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const description = document.querySelector('input[type="text"]').value;
  const amount = document.querySelector('input[type="number"]').value;
  const category = document.querySelector('select').value;
  const date = document.querySelector('input[type="date"]').value;

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

  newExpense.appendChild(descriptionElement);
  newExpense.appendChild(amountElement);
  newExpense.appendChild(categoryElement);
  newExpense.appendChild(dateElement);

  form.appendChild(newExpense);

  form.reset();
});