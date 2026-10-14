"use client";
import {create} from "zustand";
import {persist} from "zustand/middleware";
import {PRODUCTS} from "@/lib/products";
type Item={productId:string;quantity:number};
type State={cart:Item[];wishlist:string[];coupon:string|null;message:string|null;add:(id:string)=>void;remove:(id:string)=>void;qty:(id:string,n:number)=>void;wish:(id:string)=>void;couponSet:(c:string)=>void;checkout:()=>void;clearMessage:()=>void};
export const useShopStore=create<State>()(persist((set,get)=>({
cart:[],wishlist:[],coupon:null,message:null,
add:(id)=>{const p=PRODUCTS.find(x=>x.id===id);if(!p)return;set(s=>{const old=s.cart.find(i=>i.productId===id);if((old?.quantity??0)>=p.stock)return {message:"Stock limit reached."};return {cart:old?s.cart.map(i=>i.productId===id?{...i,quantity:i.quantity+1}:i):[...s.cart,{productId:id,quantity:1}],message:p.name+" added to cart."};});},
remove:(id)=>set(s=>({cart:s.cart.filter(i=>i.productId!==id)})),
qty:(id,n)=>{const p=PRODUCTS.find(x=>x.id===id);if(!p)return;if(n<1){get().remove(id);return;}if(n>p.stock){set({message:"Stock limit reached."});return;}set(s=>({cart:s.cart.map(i=>i.productId===id?{...i,quantity:n}:i)}));},
wish:(id)=>set(s=>({wishlist:s.wishlist.includes(id)?s.wishlist.filter(x=>x!==id):[...s.wishlist,id]})),
couponSet:(c)=>{const code=c.trim().toUpperCase();set(code==="PRITOM10"||code==="SAVE20"?{coupon:code,message:code+" applied."}:{message:"Invalid coupon code."});},
checkout:()=>{const s=get();if(!s.cart.length){set({message:"Cart is empty."});return;}set({cart:[],coupon:null,message:"Demo order completed locally. No payment was taken."});},
clearMessage:()=>set({message:null})
}),{name:"pritomx-elite-store-v1",partialize:s=>({cart:s.cart,wishlist:s.wishlist,coupon:s.coupon})}));
