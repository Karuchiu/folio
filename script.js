const navLinks = document.querySelectorAll('footer ul li a')

const hoverColor = '#09F7EA'

navLinks.forEach(navLink => {
    navLink.addEventListener('mouseenter', () => {
        navLink.style.color = hoverColor
    })

    navLink.addEventListener('mouseleave', () => {
        navLink.style.color = ''
    })
});