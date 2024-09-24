//To pass this lab, this function should include a fetch request to the Game of Thrones API (https://anapioficeandfire.com/api/books Links to an external site.). 
//The returned response should be converted to JSON. 
//Then, it should call the second function, renderBooks(), passing in the JSON-ified data as the argument. To check if you have done this correctly, open up the index.html page of this lab; you should see a list of Game Of Thrones titles on your webpage.

//fetchBooks has empty para bc there's no addition tasks
function fetchBooks(){
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(data => renderBooks(data));
};

//second then is sending the data to a function that will append to the DOM
 
//querySelector - helps us target something from the dom, by id, class or type
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {  //the for each is going through each element
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

