{/* <div class = "item">
        <div class ="item-image">
          <img src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg">
        </div>
        <div class="item-content">
          <h3 class="item-heading">Men Black MAMGP T7 Sweat Sporty Jacket</h3>
          <h4 class="item-brand">Puma</h4>
          <h3 class="item-price">Rs 7999</h3>
        </div>
</div> */}
let itemsContainer1 = document.getElementById("items-container-1");
let itemsContainer2 = document.getElementById("items-container-2");
for(let product of productList){
    let item = document.createElement("div");
    item.className = "item";
    let itemImage = document.createElement("div");
    itemImage.className = "item-image";
    let image = document.createElement("img");
    image.src = product.preview;
    let itemContent = document.createElement("div");
    itemContent.className = "item-content"
    let itemHeading = document.createElement("h3");
    itemHeading.className = "item-heading";
    itemHeading.textContent = product.name;
    let itemBrand = document.createElement("h4");
    itemBrand.className = "item-brand";
    itemBrand.textContent = product.brand;
    let itemPrice = document.createElement("h3");
    itemPrice.className = "item-price";
    itemPrice.textContent = product.price;
    itemImage.appendChild(image);
    item.appendChild(itemImage);
    itemContent.appendChild(itemHeading);
    itemContent.appendChild(itemBrand);
    itemContent.appendChild(itemPrice);
    item.appendChild(itemContent);
    if(product.isAccessory){
        itemsContainer2.appendChild(item)
    }
    else{
        
        itemsContainer1.appendChild(item);
    }
}

