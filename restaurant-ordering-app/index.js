import { menuArray } from "./data.js"

const mealList = document.getElementById("mealList")
const order = document.getElementById("order")
const form = document.querySelector("form")

let ordersArray = []

document.addEventListener("click", (e) => {
	e.preventDefault()
  if (e.target.dataset.add) {
    handleAddClick(e.target.dataset.add)
  } else if (e.target.dataset.remove) {
    handleRemoveClick(e.target.dataset.remove)
  } else if (e.target.dataset.order) {
    handleCompleteOrderClick()
	} else if (e.target.dataset.pay) {
		handlePayClick()
	}
})

function renderOrder() {
  let htmlOrders = ordersArray
    .map((item) => {
      return `
			<li>
				<span class="itemName">${item.name}</span>
				<button data-remove=${item.id}>remove</button>
				<span class="price">$${item.price}</span>
			</li>
		`
    })
    .join("")

  const total = ordersArray.reduce(
    (prev, curr) => parseInt(prev) + parseInt(curr.price),
    0
  )

  order.innerHTML = `
		<h3>Your order</h3>
		<ul id="orderList">
			${htmlOrders}
		</ul>
		<hr>
		<div>
				<span class="itemName">Total price: </span>
				<span class="price">$${total}</span>
		</div>
		<button id="orderBtn" data-order="order">Complete order</button>
	`
}

function handleAddClick(id) {
  ordersArray.push(menuArray.find((item) => item.id == id))
  renderOrder()
}

function handleRemoveClick(id) {
  ordersArray = ordersArray.filter((item) => item.id != id)
  renderOrder()
}

function handleCompleteOrderClick() {
	form.classList.add("show");
}

function handlePayClick() {
	console.log('cliced')
	const paymentObj=  new FormData(form)
	const name = paymentObj.get('name')
	order.innerHTML = `<div id="note">Thanks, ${name}! Your order is on its way!<div>`
	form.classList.remove("show");
}

mealList.innerHTML += menuArray
  .map((item) => {
    return `
		<li>
			<span class="logo">${item.emoji}</span>
			<div class="info">
				<h3>${item.name}a</h3>
				<p>${item.ingredients.join(", ")}</p>
				<span>$${item.price}</span>
			</div>
			<button class="addBtn" data-add=${item.id}>+</button>
		</li>
		<hr>
	`
  })
  .join("")
