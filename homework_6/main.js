
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


// test image update
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}