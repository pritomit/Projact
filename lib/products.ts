export type Product = { id:string; name:string; category:"Tech"|"Lifestyle"|"Audio"|"Gaming"; description:string; price:number; stock:number; badge?:string; color:string; image:string };
export const PRODUCTS:Product[] = [
{id:"px01",name:"Nova X Headphones",category:"Audio",description:"Immersive wireless sound with adaptive comfort.",price:129,stock:12,badge:"BESTSELLER",color:"#8B5CF6",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=85"},
{id:"px02",name:"Quantum Smartwatch",category:"Tech",description:"A refined everyday wearable with a bright display.",price:189,stock:8,badge:"NEW",color:"#06B6D4",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=85"},
{id:"px03",name:"Pulse Gaming Mouse",category:"Gaming",description:"Precision tracking in a lightweight design.",price:59,stock:15,color:"#A78BFA",image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&q=85"},
{id:"px04",name:"Aura Desk Speaker",category:"Audio",description:"Room-filling sound in a compact silhouette.",price:99,stock:9,color:"#22D3EE",image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900&q=85"},
{id:"px05",name:"Orbit Camera",category:"Tech",description:"Capture everyday moments with clarity.",price:349,stock:5,color:"#C084FC",image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=85"},
{id:"px06",name:"Vertex Backpack",category:"Lifestyle",description:"Minimal storage for work, travel, and beyond.",price:79,stock:20,color:"#818CF8",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=85"},
{id:"px07",name:"Nebula Keyboard",category:"Gaming",description:"Tactile mechanical keys with a clean layout.",price:109,stock:7,badge:"POPULAR",color:"#8B5CF6",image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=900&q=85"},
{id:"px08",name:"Zen Smart Lamp",category:"Lifestyle",description:"Ambient lighting for focused evenings.",price:69,stock:14,color:"#67E8F9",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&q=85"},
{id:"px09",name:"Echo Mini Buds",category:"Audio",description:"Pocket-sized listening for your daily routine.",price:89,stock:11,color:"#A78BFA",image:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=900&q=85"},
{"id":"px10","name":"Flux Game Controller","category":"Gaming","description":"Comfortable control for long gaming sessions.","price":74,"stock":10,"color":"#06B6D4","image":"https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=900&q=85"},
{"id":"px11","name":"Aero Tablet Stand","category":"Tech","description":"An adjustable stand for your workspace.","price":39,"stock":25,"color":"#C084FC","image":"https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=900&q=85"},
{"id":"px12","name":"Drift Travel Bottle","category":"Lifestyle","description":"A reusable everyday companion with a clean finish.","price":29,"stock":30,"color":"#22D3EE","image":"https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900&q=85"}
];
export const CATEGORIES = ["All","Tech","Lifestyle","Audio","Gaming"] as const;
export type Category = typeof CATEGORIES[number];
export const money = (n:number) => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n);
