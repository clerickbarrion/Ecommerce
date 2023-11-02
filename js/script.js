//home
var slideIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("carousel-item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000)
}
//products

cart = document.querySelector('.cart')
cartItems = document.querySelector('.items')
products = document.getElementsByClassName('product')
totalPrice = document.getElementById('total')
checkOut = document.getElementById('check-out')
var total = 0
var id = 0

function openCart() {
    cart.style.right === '15.3rem' ? cart.style.right = '0rem' : cart.style.right = '15.3rem'
}

class Fish {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

Array.from(products).forEach(product => {
    product.addEventListener('click', () => {
        let fish = new Fish(product.dataset.name, product.dataset.price)
        item = document.createElement('p')
        item.innerText = `${fish.name}: $${fish.price}`
        total += Number(fish.price)
        cartItems.appendChild(item)
        totalPrice.textContent = `Total: $${Math.round(total * 100) / 100}`
    })
})

if (window.location.href.includes('product')){
checkOut.addEventListener('click', () => {
    cartItems.innerHTML = ''
    totalPrice.textContent = `Total: $0.00`, total = 0
    alert('Thanks for your purchase')
})
}
// Contact

commentButton = document.getElementById('submit-comment');
commentContent = document.getElementById('insert-comment');
commentSection = document.getElementById('comment-section')

if (window.location.href.includes('contact.html')) {
commentButton.addEventListener('click', () => {
    content = commentContent.value
    commentContainer = document.createElement('div')
    commentContainer.classList.add('comment')
    Name = document.createElement('p')
    Name.classList.add('name')
    time = document.createElement('p')
    time.classList.add('time')
    comment = document.createElement('p')
    comment.classList.add('comment-content')
    
    commentContainer.appendChild(Name)
    commentContainer.appendChild(time)
    commentContainer.appendChild(comment)

    Name.innerText = 'Anon'
    time.innerText = 'Just now'
    comment.innerText = content

    commentSection.appendChild(commentContainer)

})
}

if (window.location.href.includes('response')) {
    response = document.getElementById('response')
    form = window.location.href
    let firstName = ''
    let lastName = ''

    let firstNameIndex = form.indexOf("first-name=") + "first-name=".length

    while (form[firstNameIndex] !== '&') {
        firstName += form[firstNameIndex]
        firstNameIndex++
    }
    
    let lastNameIndex = form.indexOf("last-name=") + "last-name=".length

    while (form[lastNameIndex] !== '&') {
        lastName += form[lastNameIndex]
        lastNameIndex++
    }

    response.innerText = `Thank you for shopping with RipTide, ${firstName} ${lastName}.`

}