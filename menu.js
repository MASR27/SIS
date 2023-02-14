const menuItems = [
  { title: 'Introduction', url: 'introduction.html' },
  { title: 'Scope', url: 'scope.html' },
  { title: 'Normative References', url: 'normative-references.html' },
  { title: 'Terms and Definitions', url: 'terms-and-definitions.html' },
  { title: 'Requirements for Measurement Management Systems', url: 'requirements-for-measurement-management-systems.html' },
  { title: 'Management Responsibility', url: 'management-responsibility.html' },
  { title: 'Measurement System Analysis', url: 'measurement-system-analysis.html' },
  { title: 'Measurement Equipment Control', url: 'measurement-equipment-control.html' },
  { title: 'Measurement Process Control', url: 'measurement-process-control.html' },
  { title: 'Data Analysis', url: 'data-analysis.html' },
  { title: 'Improvement', url: 'improvement.html' },
];

function renderMenu() {
  const menuDiv = document.getElementById('menu');
  const menuList = document.createElement('ul');
  menuDiv.appendChild(menuList);

  menuItems.forEach(item => {
    const menuItem = document.createElement('li');
    const menuItemLink = document.createElement('a');
    menuItemLink.textContent = item.title;
    menuItemLink.href = item.url;
    menuItem.appendChild(menuItemLink);
    menuList.appendChild(menuItem);
  });
}

renderMenu();
