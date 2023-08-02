document.getElementById('light-dark-button').addEventListener('click', function() {
    const BODY = document.querySelector('body');
    const CURRENT_BACKGROUND_CLASSLIST = BODY.classList;
    const lightDarkButton = document.querySelector('light-dark-button');

    console.log("clicked");

    if (CURRENT_BACKGROUND_CLASSLIST.contains('light-mode')) {
        lightDarkButton.innerHTML = "Dark Mode";
        CURRENT_BACKGROUND_CLASSLIST.remove('light-mode');
        CURRENT_BACKGROUND_CLASSLIST.add('dark-mode');
    } else {
        lightDarkButton.innerHTML = "Light Mode";
        CURRENT_BACKGROUND_CLASSLIST.remove('dark-mode');
        CURRENT_BACKGROUND_CLASSLIST.add('light-mode');
    }
  });