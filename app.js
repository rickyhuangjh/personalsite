document.getElementById('button-lightDark').addEventListener('click', function() {
    const body = document.body;
    const menuBar = document.querySelector('.menu-bar');
    const menuList = document.querySelectorAll('.menu');
    const lightDarkIcon = document.getElementById('icon-lightDark');
    const sectionList = document.querySelectorAll('section');



    body.classList.toggle('light-mode');
    menuBar.classList.toggle('light-mode');
    menuList.forEach((x) => x.classList.toggle('light-mode'));
    sectionList.forEach((x) => x.classList.toggle('light-mode'));

    if (body.classList.contains('light-mode')) {
        lightDarkIcon.innerHTML = "light_mode";
    } else {
        lightDarkIcon.innerHTML = "dark_mode";
    }


    return;


  });