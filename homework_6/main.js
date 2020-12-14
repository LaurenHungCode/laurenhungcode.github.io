
var productArr = []

//This is going to be a product class for buns you can purchase
class Product {
	constructor(quant, glaze, total) {
		this.quant = quant
    this.glaze = glaze
    this.total = total
	}
}

let total=0

function addToCart() {
	//alert('add to cart')
    
    // glaze
    var glaze = document.getElementById('form').value

    // quant
    var quant = document.getElementById('quant').value

	var quantCount = parseInt(quant)
	//for(var i = 0; i < quantCount; i++) {
		var bun = new Product(quant, glaze,total)
		productArr.push(bun)	
  //  }
    console.log(productArr)
	
  //updateCartNumber(productArr.length)
  updateCartNumber(quant)
}

function updateCartNumber(num) {
	  var cartCount = document.getElementById('cartCount');
  cartCount.innerHTML = num;

  if (num == undefined) {
    cartCount.style.display="none"
  }

  
}

function sendToCart(){
    //alert('you clicked send to cart');  
    localStorage.setItem('userOrder', JSON.stringify(productArr));
}

//quantity times $ 04.25 = total price
function price(){
  var quant = document.getElementById('quant').value
  total = quant*4.25

  console.log(total)
}