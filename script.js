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



// NAVIGATION MENU
var openPanel = document.getElementById("open-panel");
var panel = document.getElementById("panel");
var panelList = document.getElementById("panel-list");
var closePanel = document.getElementById("close-panel");

// OPEN HAMBURGER MENU 
openPanel.addEventListener("click", function () {
  document.getElementById("panel").style.width = "250px";
  document.getElementById("panel").style.padding = "25px";
  document.getElementById("panel-list").style.display = "flex";
  document.getElementById("close-panel").style.display = "block";
});

// CLOSE HAMBURGER MENU
closePanel.addEventListener("click", function () {
  document.getElementById("panel").style.width = "0";
  document.getElementById("panel").style.padding = "0";
  document.getElementById("panel-list").style.display = "none";
  document.getElementById("close-panel").style.display = "none";
});
