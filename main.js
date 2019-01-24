// Please complete the below exercises preferrably using JQuery

var main = (function() {
        
    // 1. Make each item's paragraph collapse/expand when the title is clicked
    var itemList = document.querySelector('.item-list');
    console.log('item-list length:', itemList.children.length);

    function toggleDescription(element) {
        if (element.classList.contains('hide')) {
            element.classList.remove('hide');
            $(element).slideDown('slow', 'swing');
        } else {
            element.classList.add('hide');
            $(element).slideUp('slow', 'swing');
        }
    }

    // 2. Remove each item when we click on the closing X





    // 3. Create a new item using the input field
    //    The title of the new item has to match the input value
    //    The new item should also have the same properties (collapse/expand and close) as the other items




    //    Optional: 
    //    If the user clicks "Add New" and the input is empty, 
    //    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
    //    depending on the number of items already on the page

    return {
        event: function(event, element) {
            var descriptionElement = event.target.parentElement.childNodes[5];
            if (descriptionElement) {
                toggleDescription(descriptionElement);
            }
        },
        close: function(event, element) {
            console.log('close');
        }
    }

})()