document.getElementById('button-lightDark').addEventListener('click', function() {
    const body = document.body;
    const menuList = document.querySelectorAll('.menu');
    const lightDarkIcon = document.getElementById('icon-lightDark');


    body.classList.toggle('dark-mode');
    menuList.forEach((x) => x.classList.toggle('dark-mode'));
    lightDarkIcon.classList.toggle('fa-moon');


    return;


    if (!body.classList.contains('background-dark-mode')) {
        lightDarkButton.innerHTML = "Dark Mode";

        for (let i=0; i<menuList.length; i++) {
            menuList[i].classList.remove('menu-light-mode');
            menuList[i].classList.add('menu-dark-mode');
        }

        body.classList.remove('background-light-mode');
        body.classList.add('background-dark-mode');
    } else {
        lightDarkButton.innerHTML = "Light Mode";

        for (let i=0; i<menuList.length; i++) {
            menuList[i].classList.remove('menu-dark-mode');
            menuList[i].classList.add('menu-light-mode');
        }


        body.classList.remove('background-dark-mode');
        body.classList.add('background-light-mode');
    }
  });