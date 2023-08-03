# Codewell -  YelpCamp solution

This is a solution to the [YelpCamp challenge on Codewell](https://www.codewell.cc/challenges/yelpcamp-by-colt-steele--6144c7c8a383e41090a3d84b). Codewell challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for camps that already exist in the datbase

### Screenshot

![](/Assets/screenshot.png)

### Links

- Solution URL: [GitHub Repo](https://github.com/oluwadara5000/yelpcamp)
- Live Site URL: [Live Link](https://yelp-camp-test.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla Javascript

### What I learned

```js
document.addEventListener("DOMContentLoaded", function () {
  // This is the list of camps that will be searched for
  const data = [
    { name: { text: "Ulap" }, link: "ulap-yes.html" },
    { name: { text: "Buloy" }, link: "buloy-yes.html" },
    { name: { text: "Calaguas" }, link: "calaguas-yes.html" },
    { name: { text: "Latik" }, link: "latik-yes.html" },
    { name: { text: "Onay" }, link: "onay-yes.html" },
    { name: { text: "Seven Sisters" }, link: "seven-yes.html" },
  ];

  // The search function and display function code
  function search() {
    // This is to convert whatever is entered to Lowercase so the code can understand incase someone types in Uppercase
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase();

    // This creates a container where the search term reveals results
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = "";

    // This block of code ensures nothing is displayed if the nothing is searched for
    if (searchTerm.trim() === "") {
      return;
    }

    // This is to filter the dat array to find whatever matches what was searched for
    const matchingItems = data.filter((item) =>
      item.name.text.toLowerCase().includes(searchTerm)
    );

    // This block of code loops through the matching items and displays them in the results container
    matchingItems.forEach((item) => {
      const listItem = document.createElement("li");
      const anchorTag = document.createElement("a");
      anchorTag.innerText = item.name.text;
      anchorTag.href = item.link;
      listItem.appendChild(anchorTag);
      resultsContainer.appendChild(listItem);
    });
  }

  // This block triggers an event when something is searched and the enter key is pressed
  document.getElementById("searchInput").addEventListener("input", search);
});
```

## Author

- Website - [GitHub](https://github.com/oluwadara5000)
- Frontend Mentor - [@oluwadara5000](https://www.frontendmentor.io/profile/oluwadara5000)
- Codewell Profile Name - oluwadara5000
