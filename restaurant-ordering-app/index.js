import { menuArray } from './data.js'

const mealList = document.getElementById('mealList')
const order = document.getElementById('order')



mealList.innerHTML += menuArray.map((item) => {
	return `
		<li>
			<span class="logo">${item.emoji}</span>
			<div class="info">
				<h3>${item.name}a</h3>
				<p>${item.ingredients.join(', ')}</p>
				<span>${item.price}</span>
			</div>
			<button class="addBtn">+</button>
		</li>
		<hr>
	`
}).join('')

