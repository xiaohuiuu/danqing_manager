import {defineStore} from 'pinia'


export const useCount = defineStore('count',{
  state(){
    return {
      num:0
    }
  },
  getters:{
    getNum():string{
      return `您的购物车有${this.num}个商品`
    }
  },
  actions:{
    setNum(num:number){
      this.num = num
    }
  }
})
