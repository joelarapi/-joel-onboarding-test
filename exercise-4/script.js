const accordionTitles = document.querySelectorAll('.accordion-title');
const accordionContents = document.querySelectorAll('.accordion-content');
const multipleAccordionsCheckbox = document.getElementById('multipleAccordions');

let allowMultipleAccordions = false;

multipleAccordionsCheckbox.addEventListener('change', function() {
  allowMultipleAccordions = this.checked;
  toggleAccordions();
});

function toggleAccordions() {
  accordionContents.forEach((content, index) => {
    const expandIcon = accordionTitles[index].querySelector('.expand-icon');
    const collapseIcon = accordionTitles[index].querySelector('.collapse-icon');

    if (allowMultipleAccordions) {
      content.classList.remove('show');
      expandIcon.style.display = 'inline-block';
      collapseIcon.style.display = 'none';
    } else if (!allowMultipleAccordions && index === 0) {
      content.classList.add('show');
      expandIcon.style.display = 'none';
      collapseIcon.style.display = 'inline-block';
    } else {
      content.classList.remove('show');
      expandIcon.style.display = 'inline-block';
      collapseIcon.style.display = 'none';
    }
  });
}

accordionTitles.forEach((title, index) => {
  title.addEventListener('click', () => {
    const content = accordionContents[index];
    const expandIcon = title.querySelector('.expand-icon');
    const collapseIcon = title.querySelector('.collapse-icon');

    if (!allowMultipleAccordions && content.classList.contains('show')) {
      return;
    }

    if (!allowMultipleAccordions) {
      accordionContents.forEach((c, i) => {
        if (i !== index) {
          c.classList.remove('show');
          const otherExpandIcon = accordionTitles[i].querySelector('.expand-icon');
          const otherCollapseIcon = accordionTitles[i].querySelector('.collapse-icon');
          otherExpandIcon.style.display = 'inline-block';
          otherCollapseIcon.style.display = 'none';
        }
      });
    }

    content.classList.toggle('show');
    expandIcon.style.display = content.classList.contains('show') ? 'none' : 'inline-block';
    collapseIcon.style.display = content.classList.contains('show') ? 'inline-block' : 'none';
  });
});

toggleAccordions();