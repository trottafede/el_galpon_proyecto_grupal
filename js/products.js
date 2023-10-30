document.addEventListener("DOMContentLoaded", async () => {
  // alert("We are working on it");
  const response = await fetch("../products.js");
  const productos = await response.json();
  console.log(productos);

  let products = "";
  
  for (const product of productos) {
    products += ` 
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
      <div id="img_container">
        <img src="${product.image}" alt=""/>  
      </div>
    </div>
    `
  }

  const container = document.getElementById("products_container");
  container.innerHTML = products
});
