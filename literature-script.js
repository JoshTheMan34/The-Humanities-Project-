// Search Bar //
// Made with ChatGPT //
// God blessed us with getting it to work //
// Start //

function search() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var content = document.getElementById('content');

    // Get all text nodes within the content
    var textNodes = getAllTextNodes(content);

    // Search for the term within text nodes
    for (var i = 0; i < textNodes.length; i++) {
        var textContent = textNodes[i].nodeValue.toLowerCase();
        if (textContent.includes(searchTerm)) {
            // Scroll to the found text node and highlight the matching words
            scrollToAndHighlight(textNodes[i], searchTerm);
            return;
        }
    }

    // If the term is not found, you can handle it accordingly (e.g., display a message)
    alert('Text not found');
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

    // Create a new span element to wrap each word
    var words = textNode.nodeValue.split(/\b/);
    var highlightedText = document.createElement('span');

    // Iterate through words and apply the highlight to the searched word
    for (var i = 0; i < words.length; i++) {
        var wordSpan = document.createElement('span');
        wordSpan.textContent = words[i];

        if (words[i].toLowerCase() === searchTerm) {
            wordSpan.style.backgroundColor = '#FFBCDF'; // Customize the highlight color
        }

        highlightedText.appendChild(wordSpan);

        if (i < words.length - 1) {
            // Add a space between words (for proper rendering)
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

// Function to handle keypress events
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        // Prevent the default behavior of the Enter key
        event.preventDefault();

        var searchTerm = document.getElementById('search-input').value.toLowerCase();
        var content = document.getElementById('content');

        // Get all text nodes within the content
        var textNodes = getAllTextNodes(content);

        // Search for the term within text nodes
        for (var i = 0; i < textNodes.length; i++) {
            var textContent = textNodes[i].nodeValue.toLowerCase();
            if (textContent.includes(searchTerm)) {
                // Highlight the searched word and scroll to the text node
                scrollToAndHighlight(textNodes[i], searchTerm);
                return;
            }
        }

        // If the term is not found, you can handle it accordingly (e.g., display a message)
        alert('Text not found');
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

// Search Bar //
// Made with ChatGPT //
// God blessed us with getting it to work //
// End //
