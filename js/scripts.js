/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

fetch('https://8jj99t3ikc.execute-api.us-east-1.amazonaws.com/prod/')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    displayvisitors(data)
})
.catch(function (err) {
    console.log('error: ' + err);
});

function displayvisitors(data) {
    const visitors = data[0];
    const visitorCounts = visitors.Counts;
    console.log(visitorCounts);
    document.getElementById("myData").innerHTML = visitorCounts
}