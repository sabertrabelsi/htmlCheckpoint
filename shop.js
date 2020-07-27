

var removebutton=document.getElementsByClassName('remove');
var product=document.getElementsByClassName('product');
var quant=document.querySelectorAll('.quantity>p');

var plusbutton=document.getElementsByClassName('plu')
var minbutton=document.getElementsByClassName('min')
 
var qty=[]
var sum=[0,0,0,0]
var total=0
var tot=document.querySelector('.tot')
var price=document.querySelectorAll('.box6>p')
var s=0

for (let i=0;i<quant.length;i++){
 plusbutton[i].onclick=function(){
      
    quant[i].innerHTML=parseInt(quant[i].innerText)+1
    qty[i]= parseInt(quant[i].innerText) 
     sum[i]=qty[i]*parseInt(price[i].innerText)     
    tot.innerHTML=sum[0]+sum[1]+sum[2]+sum[3]

        
 }
}
for (let i=0;i<quant.length;i++){
 minbutton[i].onclick=function(){
      
    quant[i].innerHTML=parseInt(quant[i].innerText)-1
    qty[i]= parseInt(quant[i].innerText) 
    if (qty[i]>=0){
        sum[i]=qty[i]*parseInt(price[i].innerText)     
    tot.innerHTML=sum[0]+sum[1]+sum[2]+sum[3]
         }else{alert('quantity must be postitive')}
    
}   
}
var quantity=[];
for (var j=0;j<quant.length;j++){
     quantity[j]=parseInt(quant[j].innerText)
}

for (var i=0;i<removebutton.length;i++){
    if (quantity[i]==0){
    removebutton[i].onclick=function(){
        this.parentElement.parentElement.remove()
        }
    } 
    else{alert('the quantity must be equal zero')}
}


var heart=document.getElementsByClassName('fas fa-heart')
for (let i=0;i<heart.length;i++){
      heart[i].onclick=function(){
        this.style.color="#ff0000"
       
    }
    heart[i].ondblclick=function(){
        this.style.color="gray"
        
    }
    
}