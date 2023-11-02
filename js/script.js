//home
var slideIndex = 0;

// Iterates through carousel items and sets display to block or none 
// depending on current index
function carousel() {
  var i;
  var carouselItem = document.getElementsByClassName("carousel-item");
  for (i = 0; i < carouselItem.length; i++) {
    carouselItem[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > carouselItem.length) {slideIndex = 1}
  carouselItem[slideIndex-1].style.display = "block";
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

// Opens the cart
function openCart() {
    cart.style.right === '15.3rem' ? cart.style.right = '0rem' : cart.style.right = '15.3rem'
}

// Deletes cart item
function deleteSelf(id, price) {
    self = document.getElementById(id)
    self.remove()
    // Updates price
    total -= price
    totalPrice.textContent = `Total: $${Math.round(total * 100) / 100}`
}

// Fish object maker
class Fish {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

// Event listener to add products to cart
Array.from(products).forEach(product => {
    product.addEventListener('click', () => {
        let fish = new Fish(product.dataset.name, product.dataset.price)
        //Creates a p tag and adds name and price to it
        item = document.createElement('p')
        item.innerText = `${fish.name}: $${fish.price} `
        total += Number(fish.price)
        // Gives it a unique id so it can find itself and self-destruct
        item.setAttribute('id', String(id))
        item.setAttribute('onclick', `deleteSelf(${id},${fish.price})`)
        id++
        // Appends p tag to cart
        cartItems.appendChild(item)
        // Updates price
        totalPrice.textContent = `Total: $${Math.round(total * 100) / 100}`
    })
})

// Empties cart and alerts purchase
if (window.location.href.includes('product')){
checkOut.addEventListener('click', () => {
    window.location.href = `contact-response.html?${cartItems.textContent.trim()}`
    cartItems.innerHTML = ''
    totalPrice.textContent = `Total: $0.00`, total = 0
})
}

// Contact

commentButton = document.getElementById('submit-comment');
commentContent = document.getElementById('insert-comment');
commentSection = document.getElementById('comment-section')

if (window.location.href.includes('contact.html')) {
commentButton.addEventListener('click', () => {
    // Creates a div that contains p tags containing name, time,
    // and comment
    content = commentContent.value
    commentContainer = document.createElement('div')
    commentContainer.classList.add('comment')
    Name = document.createElement('p')
    Name.classList.add('name')
    time = document.createElement('p')
    time.classList.add('time')
    comment = document.createElement('p')
    comment.classList.add('comment-content')
    
    // Appends p tags to div tag
    commentContainer.appendChild(Name)
    commentContainer.appendChild(time)
    commentContainer.appendChild(comment)

    // Changes p tag content
    Name.innerText = 'Anon'
    time.innerText = 'Just now'
    comment.innerText = content

    // Adds div tag to comment section
    commentSection.appendChild(commentContainer)

})
}

// Finds first name and last name from the url and adds
// it to the response page
if (window.location.href.includes('response.html?fi')) {
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
// lists what they purchased.
else if (window.location.href.includes('%20')) {
    response = document.getElementById('response')
    url = window.location.href.replaceAll('%20', ' ')
    start = url.indexOf('?')
    start++
    let receipt = ''
    console.log(start, url[start])
    for (start; start<url.length; start++) {
        receipt += url[start]
    } 
    receipt = receipt.replaceAll('99 ', '99\n')
    response.innerText = `Thank you for shopping with RipTide. \n What you bought: \n\n ${receipt}`
}