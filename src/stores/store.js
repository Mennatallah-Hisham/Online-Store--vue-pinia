
import {defineStore} from 'pinia';

const useCounterStore= defineStore('counter',{
    state:()=>{
        return{
            count:0,
        }
    },
    getters:{
        countSquared:(state)=>{
            return state.count *state.count
            

        },
        oddOrEven:(state)=>{
            if(state.count%2===0) return 'even'
            return 'odd'

        }


    },
    actions:{
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        }

    }
})
export default useCounterStore;