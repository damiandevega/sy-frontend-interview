// Please complete the below exercises preferrably using JQuery

var main = (function() {
    var itemList = document.querySelector('.item-list');

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
    }

    function clearInput(element) {
        if (element) {
            element.value = '';
        }
    }

    // 1. Make each item's paragraph collapse/expand when the title is clicked
    function toggleDescription(element) {
        if (element.classList.contains('hide')) {
            $(element).slideDown('slow', 'swing');
            element.classList.remove('hide');
        } else {
            $(element).slideUp('slow', 'swing');
            element.classList.add('hide');
        }
    }

    // 2. Remove each item when we click on the closing X
    function deleteElement(element) {
        itemList.removeChild(element);
    }

    // 3. Create a new item using the input field
    //    The title of the new item has to match the input value
    //    The new item should also have the same properties (collapse/expand and close) as the other items
    function createNewItem(input) {
        var item = document.createElement('div');
        var h1 = document.createElement('h1');
        var span = document.createElement('span');
        var p = document.createElement('p');

        item.id = uuidv4();
        item.classList.add('item');
        h1.classList.add('title');
        h1.onclick = function() {
            main.toggleDesc(event);
        }
        h1.textContent = input;
        span.classList.add('close');
        span.onclick = function() {
            main.deleteItem(event);
        }
        span.textContent = 'x';
        p.classList.add('description');
        p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.';

        item.appendChild(h1);
        item.appendChild(span);
        item.appendChild(p);
        itemList.appendChild(item);

        var newtitleInput = document.getElementById('newtitle');
        clearInput(newtitleInput);
    }

    //    Optional: 
    //    If the user clicks "Add New" and the input is empty, 
    //    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
    //    depending on the number of items already on the page
    function createNewEmptyItem() {
        var numberOfItems = itemList.children.length;
        var item = document.createElement('div');
        var h1 = document.createElement('h1');
        var span = document.createElement('span');
        var p = document.createElement('p');

        item.id = uuidv4();
        item.classList.add('item');
        h1.classList.add('title');
        h1.onclick = function() {
            main.toggleDesc(event);
        }
        h1.textContent = 'Title ' + (numberOfItems + 1);
        span.classList.add('close');
        span.onclick = function() {
            main.deleteItem(event);
        }
        span.textContent = 'x';
        p.classList.add('description');
        p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.';

        item.appendChild(h1);
        item.appendChild(span);
        item.appendChild(p);
        itemList.appendChild(item);
    }


    return {
        toggleDesc: function(event) {
            event.preventDefault();
            event.stopPropagation();

            var descriptionElement = event.target.parentElement.childNodes[5] || event.target.parentElement.childNodes[2];
            if (descriptionElement) {
                toggleDescription(descriptionElement);
            }
        },
        deleteItem: function(event) {
            event.preventDefault();
            event.stopPropagation();

            var closeElement = event.target.parentElement;
            if (closeElement) {
                deleteElement(closeElement);
            }
        },
        addNewItem: function(event) {
            event.preventDefault();
            event.stopPropagation();

            var input = event.target.previousElementSibling.value;
            if (input === '') {
                createNewEmptyItem();
            } else {
                createNewItem(input);
            }
        }
    }
})()