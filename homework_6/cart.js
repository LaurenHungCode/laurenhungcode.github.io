function cartLoad() {
    var loadedProductArr = localStorage.getItem('userOrder');	
    productArrParse = JSON.parse(loadedProductArr);    

    //birngs back prodArr that we saved from Product Page 		
    console.log('we are on cart page');	
    console.log(productArrParse);
    var cartContainer = document.getElementById('productwrapper');

    for(var i = 0; i < productArrParse.length; i++) {
        var bun = productArrParse[i];
        var quant = bun.quant
        var glaze = bun.glaze
        var total = bun.total

        cartContainer.innerHTML += '<div id="item-1"><img id="image-margin" src="images/cart-bun.png" alt=""><div class="inside-item-1"><div class="span"><span>BUN BUN’S CLASSIC ORIGINAL BUN</span> <span class="right"><button type="button" value="Remove" onclick="deleteProduct(' + i + ')">REMOVE</button></span></div><div class="text-margin2"></div><div id="productwrapper"><p id="quant">Quantity:'+ quant +'</p><div class="text-margin2"></div><p id="form">Glaze:'+ glaze +'</p><div class="text-margin2"></div><div class="right">$'+ total +'</div>'

    }

}

function deleteProduct(i) {	
    //alert()	
    console.log('before we delete')	
    console.log(productArrParse)
    
//Remove this product object from our productArr2     
    productArrParse.splice(i,1)    
    localStorage.setItem('userOrder', JSON.stringify(productArrParse))		
    console.log('after we delete')	
    console.log(productArrParse)

    var cartContainer = document.getElementById('productwrapper');
    cartContainer.innerHTML = ''

    for(var i = 0; i < productArrParse.length; i++) {
        var bun = productArrParse[i];
        var quant = bun.quant
        var glaze = bun.glaze
        var total = bun.total

        cartContainer.innerHTML += '<div id="item-1"><img id="image-margin" src="images/cart-bun.png" alt=""><div class="inside-item-1"><div class="span"><span>BUN BUN’S CLASSIC ORIGINAL BUN</span> <span class="right"><button type="button" value="Remove" onclick="deleteProduct(' + i + ')">REMOVE</button></span></div><div class="text-margin2"></div><div id="productwrapper"><p id="quant">Quantity:'+ quant +'</p><div class="text-margin2"></div><p id="form">Glaze:'+ glaze +'</p><div class="text-margin2"></div><div class="right">$'+ total +'</div>'

    }

}