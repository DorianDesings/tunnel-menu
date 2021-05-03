const menus = document.getElementById('menus');
menus.addEventListener('click', e => {
  if (e.target.classList.contains('main-menu__item')) {
    console.log(e.target.parentElement.dataset.order);
    e.target.parentElement.classList.add('main-menu--hide-front');
    e.target.parentElement.nextElementSibling.classList.add('main-menu--show');
    e.target.parentElement.nextElementSibling.nextElementSibling.classList.add(
      'main-menu--second-level'
    );
  }
});
