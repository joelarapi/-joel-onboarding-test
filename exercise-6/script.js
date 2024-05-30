const tabItems = document.querySelectorAll('.tab-item');
const tabContent = document.querySelector('.tab-content');

tabItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    removeActiveClasses();
    item.classList.add('active');
    updateTabContent(index);
  });
});

function removeActiveClasses() {
  tabItems.forEach(item => item.classList.remove('active'));
}

function updateTabContent(index) {
  const tabData = [
    { title: 'heading of tab 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.' },
    { title: 'heading of tab 2', description: 'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
    { title: 'heading of tab 3', description: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.' }
  ];

  tabContent.innerHTML = `
    <h2>${tabData[index].title}</h2>
    <p>${tabData[index].description}</p>
  `;
}

updateTabContent(0);