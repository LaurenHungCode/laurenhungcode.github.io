
var productArr = []

//This is going to be a product class for buns you can purchase
class Product {
	constructor(quant, glaze) {
		this.quant = quant
		this.glaze = glaze
	}
}

function addToCart() {
	//alert('add to cart')
    
    // glaze
    var glaze = document.getElementById('form').value

    // guant
    var quant = document.getElementById('quant').value

	var quantCount = parseInt(quant)
	for(var i = 0; i < quantCount; i++) {
		var bun = new Product(quant, glaze)
		productArr.push(bun)	
    }
    console.log(productArr)
	
	updateCartNumber(productArr.length)
}

function updateCartNumber(num) {
	var cartCount = document.getElementById('cartCount')
	cartCount.innerHTML = num
}