import toast from "react-hot-toast";
// get all carts from local storage
const getAllCarts = () => {
    const all = localStorage.getItem('cart');
    if (all) {
        const carts = JSON.parse(all);
        return carts;
    }
    else {
        return [];
    }
}

// add a cart product in local storage
const addCart = product => {
    // get all previous saved products
    const carts = getAllCarts();
    carts.push(product);
    localStorage.setItem('cart', JSON.stringify(carts));
    toast.success('Successfully Added To The Cart');
}

// get all wishlist product
const getAllWishlist = () =>{
    const all = localStorage.getItem('wishlist');
    if(all){
        const carts = JSON.parse(all);
        return carts;
    }
    else{
        return [];
    }
}

// add a wishlist product
const addWishlist = product =>{
    const wishlists = getAllWishlist();
    wishlists.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlists));
    toast.success("Successfully added to your wishlist");
}

// clear local storage
function clearCart() {
    localStorage.removeItem("cart");
  }

export{addCart, getAllCarts, addWishlist, getAllWishlist, clearCart};