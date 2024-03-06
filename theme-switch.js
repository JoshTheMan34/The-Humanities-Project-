document.addEventListener('DOMContentLoaded', function () {
    const themeMap = {
        dark: "light",
        light: "dark"
    };

    // Get all elements with the class 'themeButton'
    const themeButtons = document.querySelectorAll('.themeButton');

    // Use the first button as the default, in case there are no buttons
    let storedTheme = localStorage.getItem('theme') || (themeButtons.length > 0 ? themeButtons[0].dataset.theme : null);

    if (!storedTheme || !(storedTheme in themeMap)) {
        storedTheme = Object.keys(themeMap)[0];
        localStorage.setItem('theme', storedTheme);
    }

    const bodyClass = document.body.classList;
    bodyClass.add(storedTheme);

    function toggleTheme() {
        const current = localStorage.getItem('theme');
        const next = themeMap[current];

        bodyClass.replace(current, next);
        localStorage.setItem('theme', next);
    }

    // Attach the toggleTheme function to each theme button
    themeButtons.forEach(button => {
        button.addEventListener('click', toggleTheme);
    });

});
