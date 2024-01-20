import { posts } from './data.js'

let postHolder = document.getElementById("Posts")

let cards = posts.map((el, index) => `
    <div class="${index === 0? "heroPost": "card"}">
			<img src="${el.urlImg}" alt="">
			<div>
      	<span class="date">${el.date}</span>
      	<h2>${el.title}</h2>
      	<p class="discription">${el.paragraph}</p>
			</div>
    </div>
  `
)

postHolder.innerHTML += cards.join("")
