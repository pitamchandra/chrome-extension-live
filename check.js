 // Get the current URL
 const url = window.location.href;
 const breakUrl = url.split('/'); //for get the main url
 const mainUrl = breakUrl.slice(0, 3).join('/'); //for join the split part.

 if(mainUrl == 'https://jacandjack.co'){
     var products = document.querySelectorAll(".product-card");
 }

 else if(mainUrl == 'https://www.irisfashion.co.uk'){
     var products = document.querySelectorAll(".single-product");
}