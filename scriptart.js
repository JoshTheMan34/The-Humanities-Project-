function openModal(imgId) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("modal-img");
    var img = document.getElementById(imgId);
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalImg.dataset.current = imgId;
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function plusSlides(n) {
    var modalImg = document.getElementById("modal-img");
    var currentImgId = modalImg.dataset.current;
    var currentImgNum = parseInt(currentImgId.match(/\d+/)[0]);
    var newImgNum = currentImgNum + n;
    var newImgId = "img" + newImgNum;
    var newImg = document.getElementById(newImgId);
    if (newImg) {
        modalImg.src = newImg.src;
        modalImg.alt = newImg.alt;
        modalImg.dataset.current = newImgId;
    }
}


$('.arrow').on('click touch', function(e) {

    e.preventDefault();

    let arrow = $(this);

    if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});

// Search Bar //
// Made with ChatGPT //
// God blessed us with getting it to work //
// Start //

// Function to handle keypress events
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        // Prevent the default behavior of the Enter key
        event.preventDefault();

        search();
    }
}

// Attach the handleKeyPress function to the keypress event of the search input
document.getElementById('search-input').addEventListener('keypress', handleKeyPress);

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    search();
}

// Attach the handleFormSubmit function to the submit event of the form
document.getElementById('searchForm').addEventListener('submit', handleFormSubmit);

// Modified Search Function
function search() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var content = document.getElementById('content');

    // Get all text nodes within the content
    var textNodes = getAllTextNodes(content);

    // Variable to store the first matching text node
    var firstMatchingTextNode = null;

    // Flag to check if scrolling has already occurred for the first matching text node
    var scrolledToFirstInstance = false;

    // Search for the term within text nodes
    for (var i = 0; i < textNodes.length; i++) {
        var textContent = textNodes[i].nodeValue.toLowerCase();
        if (textContent.includes(searchTerm)) {
            // Store the first matching text node
            if (!firstMatchingTextNode) {
                firstMatchingTextNode = textNodes[i];
            }

            // Scroll to the first instance only once
            if (!scrolledToFirstInstance) {
                scrollToAndHighlight(firstMatchingTextNode, searchTerm);
                scrolledToFirstInstance = true;
            }

            // Continue highlighting each matching word instance
            highlightWordInstances(textNodes[i], searchTerm);
        }
    }
}

// Function to highlight each matching word instance in a text node
function highlightWordInstances(textNode, searchTerm) {
    var words = textNode.nodeValue.split(/\b/);
    var highlightedText = document.createElement('span');

    for (var j = 0; j < words.length; j++) {
        var wordSpan = document.createElement('span');
        wordSpan.textContent = words[j];

        if (words[j].toLowerCase() === searchTerm) {
            wordSpan.style.backgroundColor = '#FFBCDF'; // Customize the highlight color
        }

        highlightedText.appendChild(wordSpan);

        if (j < words.length - 1) {
            highlightedText.appendChild(document.createTextNode(' '));
        }
    }

    // Replace the original text node with the highlighted span
    textNode.parentNode.replaceChild(highlightedText, textNode);

    // Reset the highlight color after 3 seconds (with fading effect)
    setTimeout(function () {
        fadeOutHighlightColor(highlightedText);
    }, 3000);

    // Remove the created spans after 5 seconds
    setTimeout(function () {
        removeHighlightedSpans(highlightedText);
    }, 5000);
}

// Function to get all text nodes within an element
function getAllTextNodes(element) {
    var textNodes = [];

    function collectTextNodes(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            textNodes.push(node);
        } else {
            for (var i = 0; i < node.childNodes.length; i++) {
                collectTextNodes(node.childNodes[i]);
            }
        }
    }

    collectTextNodes(element);
    return textNodes;
}

// Function to scroll to and highlight the matching words in a text node
function scrollToAndHighlight(textNode, searchTerm) {
    // Scroll to the text node's parent element with an offset to the middle of the screen
    textNode.parentNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Function to fade out the highlight color
function fadeOutHighlightColor(element) {
    element.style.transition = 'background-color 2s ease-in-out'; // Customize the transition duration
    element.style.backgroundColor = ''; // Reset to the original color or remove this line if you want to remove the background color

    // If the span has child nodes, reset their background color as well
    for (var i = 0; i < element.childNodes.length; i++) {
        if (element.childNodes[i].nodeType === Node.ELEMENT_NODE) {
            element.childNodes[i].style.transition = 'background-color 2s ease-in-out'; // Customize the transition duration
            element.childNodes[i].style.backgroundColor = ''; // Reset to the original color or remove this line if you want to remove the background color
        }
    }
}

// Function to remove the created spans
function removeHighlightedSpans(element) {
    // Replace the highlighted span with its original text node
    element.parentNode.replaceChild(document.createTextNode(element.textContent), element);
}

// Search Bar //
// Made with ChatGPT //
// God blessed us with getting it to work //
// End //



const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
