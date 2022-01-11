const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');


const itemsIngredients = ingredients.map((ingredient) => {
 const itemsLi = document.createElement('li');
  itemsLi.textContent = ingredient;
  itemsLi.classList.add('item');
  return itemsLi;

});

ingredientsRef.append(...itemsIngredients);
console.log(itemsIngredients);
