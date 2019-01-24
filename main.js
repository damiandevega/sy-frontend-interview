// Please complete the below exercises preferrably using JQuery

var main = (function() {
    var itemList = document.querySelector('.item-list');

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
    console.log('item-list length:', itemList.children.length);




    //    Optional: 
    //    If the user clicks "Add New" and the input is empty, 
    //    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
    //    depending on the number of items already on the page

    return {
        toggleDesc: function(event) {
            event.preventDefault();
            event.stopPropagation();

            var descriptionElement = event.target.parentElement.childNodes[5];
            if (descriptionElement) {
                toggleDescription(descriptionElement);
            }
        },
        deleteItem: function(event) {
            event.preventDefault();
            event.stopPropagation();

            var closeElement = event.target.parentElement;
            deleteElement(closeElement);
        }
    }
})()