// Function to identify the product and add a button on top right corner
function addButtonsToProducts() {
     // Get the current URL
     var url = window.location.href;
     var breakUrl = url.split('/'); //for get the main url
     var mainUrl = breakUrl.slice(0, 3).join('/'); //for join the split part.
     console.log("main url" , mainUrl);
 
// Note : ensure that not display the / after the website url

     const fetchData = async () => {
      try {
        const url = chrome.runtime.getURL('Database.json');
        const response = await fetch(url);
    
        if (!response.ok) {
          throw new Error(`Failed to fetch Database.json. Status: ${response.status}`);
        }
    
        var allData = await response.json();
        
        allData.forEach(singleData => {
    
          if(singleData.siteUrl == mainUrl){
            // get the product class
            var productClass = singleData.productClass;
            var productImgClass = singleData.productImgClass;
            var productTitleClass = singleData.productTitleClass;
            var productDescClass = singleData.productDescClass;
            var productPriceClass = singleData.productPriceClass;
            // console.log("lala is here: ", productClass, productImgClass, productTitleClass, productDescClass, productPriceClass);
            var products = document.querySelectorAll(productClass);
            // console.log("product classes",products);
            
            // for showing image button every product in loop
            products?.forEach(product => {
              product.style.position = 'relative';
              // Create an img element for the button
              const imageButton = document.createElement("img");
              // Set the source (src) attribute to the URL of your image
              imageButton.src = "https://i.ibb.co/WyYwTSC/click-me.jpg";
              imageButton.alt = "Product Image";
              
              // Set styles for positioning and make it round
              imageButton.style.position = "absolute";
              imageButton.style.top = "20px";
              imageButton.style.right = "20px";
              imageButton.style.zIndex = "9999";
              imageButton.style.width = "40px"; 
              imageButton.style.height = "40px"; 
              imageButton.style.borderRadius = "50%";
              imageButton.style.border = "1px solid orange";
      
              // Add an event listener to handle button click
              imageButton.addEventListener("click", () => {
      
                  // product image
                  const imageElement = product.querySelector(productImgClass);
                  const imageUrl = imageElement ? imageElement.src : "No URL";
      
                  console.log("product image url: ", imageUrl);
      
                  // Get product title
                  const titleElement = product.querySelector(productTitleClass);
                  const title = titleElement ? titleElement.textContent.trim() : "No Title";
      
                  console.log("product title: ", title);
      
                  // Get product price
                  const priceElement = product.querySelector(productPriceClass);
                  const price = priceElement ? priceElement.textContent.trim() : "No Price";
      
                  console.log("product price: ", price);
                  // Action to perform when the button is clicked for this specific product
                  // alert("Button clicked for this product! R2AIT");
              });
      
              // Append the button to the product
              product?.appendChild(imageButton);
          });
          }
    
        });
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    
    fetchData();
    
}




window.addEventListener("load", addButtonsToProducts);
