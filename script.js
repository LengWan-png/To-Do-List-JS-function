document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded
  
    var userInput = document.getElementById("userinput");
    var button = document.getElementById("enter");
    var ul = document.querySelector("ul");
  
    function inputLength() {
      return userInput.value.length;
    }
  
    function deleteListItem(listItem) {
      if (listItem) {
        listItem.remove();
      }
    }
  
    function markingItem(item) {
      item.addEventListener("click", function() {
        item.classList.toggle("done");
      });
    }
  
    function createListElement() {
      var li = document.createElement("li");
      var btn = document.createElement("button");
  
      btn.classList.add("delete");
      btn.appendChild(document.createTextNode("Delete"));
  
      li.appendChild(document.createTextNode(userInput.value));
      li.appendChild(btn);
      ul.appendChild(li);
      userInput.value = "";
  
      btn.addEventListener("click", function() {
        var listItem = this.closest("li");
        deleteListItem(listItem);
      });
  
      markingItem(li);
    }
  
    function buttonClick() {
      if (inputLength() > 0) {
        createListElement();
      }
    }
  
    function pressEnter(event) {
      if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
      }
    }
  
    button.addEventListener("click", buttonClick);
    userInput.addEventListener("keypress", pressEnter);
  
    ul.addEventListener("click", function(event) {
      var target = event.target;
  
      // Check if the clicked element is a list item
      if (target.tagName === "LI") {
        markingItem(target);
      }
  
      // Check if the clicked element has the "delete" class
      if (target.classList.contains("delete")) {
        var listItem = target.closest("li");
        deleteListItem(listItem);
      }
    });
  
    // Initial marking for existing items
    var existingItems = document.querySelectorAll("li");
    existingItems.forEach(function(item) {
      markingItem(item);
    });
  });
  