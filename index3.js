const mainheading=document.querySelector('#main-heading');
mainheading.style.textAlign='right';
const basketheading=document.querySelector('#basket-heading');
basketheading.style.color='brown';
basketheading.style.marginLeft='30px';
const fruits=document.querySelector('.fruits');
  fruits.style.backgroundColor='gray';
  fruits.style.margin='30px';
  fruits.style.padding='30px';
  fruits.style.width='50%';
  fruits.style.borderRadius='5px';
  fruits.style.listStyleType='none';
  const bh=document.querySelector('h2');
  bh.style.marginLeft='30px';
  const fruitItems=document.querySelectorAll('.fruit');
  for(let i=0;i<fruitItems.length;i++){
   fruitItems[i].style.backgroundColor='white';
  fruitItems[i].style.padding='10px';
  fruitItems[i].style.margin='10px';
  fruitItems[i].style.borderRadius='5px';
  }
  const oddfruits=document.querySelectorAll('.fruit:nth-child(odd)');
  for(let i=0;i<oddfruits.length;i++){
   oddfruits[i].style.backgroundColor='lightgray';
 
  }
  const evenfruits=document.querySelectorAll('.fruit:nth-child(even)');
  for(let i=0;i<evenfruits.length;i++){
   evenfruits[i].style.backgroundColor='red';
   evenfruits[i].style.color='white';
 
  }

