
import {defineStore} from 'pinia';


const productStore = defineStore("products",{
    state:()=>{
        return{
            products:[]
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
        }


    },
    getters:{
        getProduct:(state)=>{
          
            return (id) => state.products.find((product)=>product.id===id)
        },
       

    }
})

export default productStore;