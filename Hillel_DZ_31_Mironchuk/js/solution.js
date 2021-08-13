let elements = document.querySelectorAll('#ulId > li');
let lastElement = document.querySelectorAll('ul > li:last-child');
let neededArray = [];
  for (let elem of elements) {
    console.log(elem.innerHTML);
    neededArray.push(elem.innerHTML)
  }
  console.log(elements.length)
  console.log(neededArray)