var html = document.documentElement;							<!-- определение работающего JS -->
html.className = html.className.replace ("no-js", "js");

var prev = document.querySelector(".gallery-prev");				<!-- попытался сделать неактивную кнопку ( -->
prev.setAttribute('disabled', 'disabled');

<!-- модальное окно входа в личный кабинет	-->
	var link = document.querySelector(".login");
	var popup = document.querySelector(".modal-content");
	var overlay = document.querySelector(".modal-overlay");
	var close_popup = popup.querySelector(".modal-content-close");
	var login = popup.querySelector("[name=login]");
	var password = popup.querySelector("[name=password]");
	var form = popup.querySelector("form");
		
	var storage = localStorage.getItem("login");
								
	link.addEventListener("click", function(evt){
		evt.preventDefault();
		console.log("Клик по ссылке вход");
		popup.classList.add("modal-content-show");
		overlay.classList.add("modal-overlay-show");
			
		if (storage) {
			login.value = storage;
			password.focus();
			console.log("Фокусровка на поле 'Пароль'");
			} else {
			login.focus();
			console.log("Фокусровка на поле 'Логин'");
			}
		});
			
	form.addEventListener("submit", function(evt){
		if (!login.value || !password.value){
			evt.preventDefault();		
			console.log("Нужно ввести логин и пароль");
			popup.classList.add("modal-error")}
		else {
			localStorage.setItem("login", login.value);
		}
	});
			
	close_popup.addEventListener("click", function(evt){
		evt.preventDefault();
		console.log("Клик по кнопке закрыть");
		popup.classList.remove("modal-content-show");
		overlay.classList.remove("modal-overlay-show");
		popup.classList.remove("modal-error");
	});
			
	window.addEventListener("keydown", function(evt) {
		if (event.keyCode === 27) {
			if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-overlay-show");
			console.log("Нажатие ESC - закрытие модального окна");
			}
		}
	});
			
	overlay.addEventListener("click", function(evt){
		popup.classList.remove("modal-content-show");
		overlay.classList.remove("modal-overlay-show");
		console.log("Клик по оверлею - закрытие модального окна");
	});
			
			
<!-- модальное окно карты	-->>
		var mapOpen = document.querySelector(".js-open-map");
		var mapPopup = document.querySelector(".modal-content-map");
		var mapClose = mapPopup.querySelector(".modal-content-close");
			
		mapOpen.addEventListener("click", function(evt){
			evt.preventDefault();
			mapPopup.classList.add("modal-content-show");
			overlay.classList.add("modal-overlay-show");
		});
			
		mapClose.addEventListener("click", function(evt) {
			evt.preventDefault();
			mapPopup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-overlay-show");
		});
			
		overlay.addEventListener("click", function(evt){
			mapPopup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-overlay-show");
			console.log("Клик по оверлею - закрытие модального окна карты");
		});
			
		close_popup.addEventListener("click", function(evt){
			evt.preventDefault();
			mapPopup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-overlay-show");
			console.log("Клик по кнопке закрыть");
		});
			
		window.addEventListener("keydown", function(evt) {
			if (event.keyCode === 27) {
				if (mapPopup.classList.contains("modal-content-show")) {
					mapPopup.classList.remove("modal-content-show");
					overlay.classList.remove("modal-overlay-show");
					console.log("Нажатие ESC - закрытие модального окна карты");
	 			}
			}
		});
