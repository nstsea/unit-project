// Форма поиска
const searchForm = document.querySelector ('.search');
const searchButton = document.querySelector ('.search__button');

searchButton.addEventListener('click', function (event){
	if (!searchForm.classList.contains('search--visible')){
		event.preventDefault();   // убираем обновление сраницы при отправке формы при нажатии на кнопку
		searchForm.classList.toggle('search--visible');
	}
});

document.addEventListener('click', handleClickOutside);

function handleClickOutside(event) {
	
	if (searchForm.contains(event.target)) {
		// Клик произошел внутри формы, ничего не делаем
		return;
	}
	
	if (searchForm.classList.contains('search--visible')) {
		// Клик произошел вне формы, закрываем её
		searchForm.classList.toggle('search--visible');
	}

}