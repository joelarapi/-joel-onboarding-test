

const buttons = document.querySelectorAll('.filters button');
const logos = document.querySelectorAll('div img');


buttons.forEach(button => {
  button.addEventListener('click', filterLogos);
});


function filterLogos(e) {
  
  buttons.forEach(button => button.style.backgroundColor = '');

  
  e.target.style.backgroundColor = '#45a7b1';

  
  const tag = e.target.textContent.toLowerCase();

  
  logos.forEach(logo => {
    logo.style.transition = 'opacity 1.5s';

    
    if (tag === 'all') {
      logo.style.opacity = '1';
    } else {
      
      const logoTag = logo.getAttribute('data-tag');
      if (logoTag && logoTag.includes(tag)) {
        logo.style.opacity = '1';
      } else {
        logo.style.opacity = '0.2';
      }
    }
  });
}

const tags = ['#Brand & Communications', '#Brand Creation', '#Brand Identity', '#Delivery', '#Design', '#E Commerce', '#Electronic', '#Label Design', '#Management Company', '#SEO', '#Software Development', '#Web Design'];
logos.forEach((logo, index) => {
  logo.setAttribute('data-tag', tags[index % tags.length]);
});


logos.forEach(logo => {
  logo.addEventListener('mouseenter', showColor);
  logo.addEventListener('mouseleave', hideColor);
});


function showColor(e) {
  e.target.style.filter = 'none';
}

function hideColor(e) {
  e.target.style.filter = 'grayscale(100%)';
}