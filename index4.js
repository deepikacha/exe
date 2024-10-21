const para=document.createElement('h3');
const paratext=document.createTextNode('Buy high quality organic fruits online');
para.appendChild(paratext);
const divs=document.getElementsByTagName('div');

const firstdiv=divs[0];

firstdiv.appendChild(para);
para.style.fontStyle='italic';
const paras=document.createElement('p');
const parastext=document.createTextNode('Total fruits: 4');
paras.appendChild(parastext);
const seconddiv=divs[1];
const ulist=document.querySelector('.fruits');
seconddiv.insertBefore(paras,ulist);
paras.setAttribute('id','fruits-total');

