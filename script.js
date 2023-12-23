var userInput = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul")


function inputLength()
{
    return userInput.value.length
}


function deleteListItem(listItem)
{ 

        if (listItem)
        {
            listItem.remove()
        }
}

function markingItem(item)
{
    item.addEventListener("click",function()
    {
        item.classList.toggle("done")
    })
}
function createListElement()
{
    var li = document.createElement("li");
    var btn = document.createElement("button");

    btn.classList.add("delete")
    btn.appendChild(document.createTextNode("Delete"))
 
    li.appendChild(document.createTextNode(userInput.value));
    li.appendChild(btn)
    ul.appendChild(li);
    userInput.value ="";

    btn.addEventListener("click",function()
    {
        var listItem = this.closest("li") 
        deleteListItem(listItem)
    })

    markingItem(li)
}

function buttonClick()
{
if(inputLength()> 0)
    {
        createListElement()
    }
}

function pressEnter(event)
{
 if(inputLength() > 0 && event.keyCode === 13)
    {
        createListElement()
    }
}

button.addEventListener("click", buttonClick)
userInput.addEventListener("keypress",pressEnter)

var li = document.querySelectorAll("li");
li.forEach(function(item)
{
markingItem(item)
}
)

var deleteBtn = document.getElementsByClassName("delete")

for (var i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", function() {

        // Accessing the parent li
        var listItem = this.closest("li") 
        deleteListItem(listItem)
    })
}