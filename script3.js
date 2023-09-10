const btn = document.querySelector('.btn-test');
const screen = document.querySelector('.screen');
const coords = document.querySelector('.coords');

function getScreenSize() {
	screen.innerText = `Ширина экрана:${window.screen.width}px Высота экрана:${window.screen.height}px`;
}

const error = () => {
	status.textContent = 'Информация о местоположении недоступна';
}

const success = (position) => {
	console.log('position', position);
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	coords.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
}

btn.addEventListener('click', () => {
	getScreenSize();
navigator.geolocation.getCurrentPosition(success, error);
});