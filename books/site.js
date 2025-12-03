const books = [
    {
        title: "Michael Vey: The Prisoner of Cell 25",
        date: "July 10, 2012",
        description: "Michael Vey, a teen with electric powers, teams up with his friends to rescue his mother from an evil corporation",
        imgSrc: "Michael-Vey.jpg",
        imgAlt: "Michael Vey in Cell 25",
        ages: "10+",
        genre: "Sci-fi, Adventure, Thriller",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Dragon Slippers",
        date: "May 1, 2008",
        description: "A young girl, Creel, befriends a dragon after gaining a pair of magic slippers",
        imgSrc: "Dragon-Slippers.jpg",
        imgAlt: "Creel and her friend Shardas the dragon",
        ages: "8+",
        genre: "Fantasy, Adventure",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "The Hunger Games",
        date: "September 14, 2008",
        description: "Katniss Everdeen finds herself participating in a televised fight to the death in order to save her sister.",
        imgSrc: "The-Hunger-Games.jpg",
        imgAlt: "The Mockingjay pin",
        ages: "10+",
        genre: "Sci-fi, dystopian",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Fablehaven",
        date: "June 14, 2006",
        description: "Siblings Kendra and Seth discover that their grandparents run a sanctuary for magical creatures.",
        imgSrc: "Fablehaven.jpg",
        imgAlt: "Muriel in her shack",
        ages: "9+",
        genre: "Fantasy, Adeventure",
        stars: "⭐⭐⭐⭐"
    }
];

let bookList = document.querySelector('#book-list');

books.forEach(book => {

    let html = `<article class="book">
      <h2>${book.title}</h2>
      <img src="${book.imgSrc}" alt=${book.imgAlt}>
      <p><strong>Release Date:</strong> ${book.date}</p>
      <p><strong>Recommended Age:</strong> ${book.ages}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Rating:</strong> <span aria-label="${book.stars.length} out of 5 stars" role="img">${movie.stars}</span></p>
      <p id='desc'>${book.description}</p>
    </article>`

    bookList.innerHTML += html;

});