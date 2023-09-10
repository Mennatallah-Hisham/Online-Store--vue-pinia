
import {defineStore} from 'pinia';


const productStore = defineStore("products",{
    state:()=>{
        return{
            products:[],
            cart:[]
        }
    },
    actions:{
      async fetchProducts(){
            try{
       await fetch('https://dummyjson.com/products').then(res=>res.json()).then(json=>this.products=json.products)

            }
            catch(error){
                console.log(error)

            }
        },
        addToCart(product){
            console.log(product)
            this.cart.push(product)

        },
        removeFromCart(id){
            this.cart.filter((product)=>product.id===id);
        }



    },
    getters:{
        getProduct:(state)=>{
          
            return (id) => state.products.find((product)=>product.id===id)
        },
       

    }
})

export default productStore;