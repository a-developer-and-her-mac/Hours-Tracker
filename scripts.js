//could this be rearranged/coded better? Yes, I am aware it could :(

const hoursList = document.querySelector('ul');
let arrayOfHours = [];
let total = document.getElementById('totalHours');

function addListItem() {
  const userHours = document.getElementById('userHours').value;
  let listItem = document.createElement('li');
  let date = new Date().toDateString();
  listItem.innerHTML = userHours + ' hours ' + '|| ' +  ' ' + date;
  hoursList.append(listItem);
  arrayOfHours.push(Number(userHours));
  let sum = 0;
  for (let i = 0; i < arrayOfHours.length; i++) {
    sum += arrayOfHours[i];
  }
  total.innerHTML = 'Total hours worked =  ' + sum;
}


