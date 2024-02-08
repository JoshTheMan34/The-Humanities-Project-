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