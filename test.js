// Function to open the modal and populate the carousel
function openModal() {
    var modal = document.getElementById("myModal");
    var carousel = document.getElementById("carousel");
    
    // Clear previous carousel content
    carousel.innerHTML = "";
    
    // Populate carousel with images or content
    for (var i = 1; i <= 3; i++) { // Change 3 to the number of carousel items you have
      var item = document.createElement("div");
      item.classList.add("carousel-item");
      item.innerHTML = "Carousel item " + i;
      carousel.appendChild(item);
    }
    
    modal.style.display = "block";
  }
  
  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Close the modal when clicking on the close button or outside of the modal
  var closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function() {
    closeModal();
  };
  
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      closeModal();
    }
  };
  