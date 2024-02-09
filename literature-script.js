// Search Bar //
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
function scrollToAndHighlight(textNodes, searchTerm) {
    // Scroll to the first text node's parent element
    textNodes[0].parentNode.scrollIntoView({ behavior: 'smooth' });

    // Iterate through all text nodes and highlight matching words
    for (var i = 0; i < textNodes.length; i++) {
        var words = textNodes[i].nodeValue.split(/\b/);

        // Create a new span element to wrap the matching words
        var highlightedText = document.createElement('span');
        highlightedText.style.backgroundColor = '#ffff99'; // Customize the highlight color

        // Iterate through words and apply the highlight to matching words
        for (var j = 0; j < words.length; j++) {
            var wordSpan = document.createElement('span');
            wordSpan.textContent = words[j];

            if (words[j].toLowerCase() === searchTerm) {
                wordSpan.style.backgroundColor = '#ffff99'; // Customize the highlight color
            }

            highlightedText.appendChild(wordSpan);

            if (j < words.length - 1) {
                // Add a space between words (for proper rendering)
                highlightedText.appendChild(document.createTextNode(' '));
            }
        }

        // Replace the original text node with the highlighted span
        textNodes[i].parentNode.replaceChild(highlightedText, textNodes[i]);

        // Reset the highlight color after 2 seconds for each highlightedText element
        setTimeout(function (element) {
            resetHighlightColor(element);
        }, 2000, highlightedText);
    }
}

// Function to reset the highlight color after a delay
function resetHighlightColor(element) {
    element.style.transition = 'background-color 0.5s ease-in-out'; // Optional: Add a smooth transition effect
    element.style.backgroundColor = ''; // Reset to the original color or remove this line if you want to remove the background color

    // If the span has child nodes, reset their background color as well
    for (var i = 0; i < element.childNodes.length; i++) {
        if (element.childNodes[i].nodeType === Node.ELEMENT_NODE) {
            element.childNodes[i].style.backgroundColor = '';
        }
    }
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
        var matchingTextNodes = [];
        for (var i = 0; i < textNodes.length; i++) {
            var textContent = textNodes[i].nodeValue.toLowerCase();
            if (textContent.includes(searchTerm)) {
                matchingTextNodes.push(textNodes[i]);
            }
        }

        // If the term is not found, you can handle it accordingly (e.g., display a message)
        if (matchingTextNodes.length === 0) {
            alert('Text not found');
        } else {
            // Highlight all instances of the searched word and scroll to the first instance
            scrollToAndHighlight(matchingTextNodes, searchTerm);
        }
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
// End //