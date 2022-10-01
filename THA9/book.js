var row='<tr>';
for(i=0;i<6;i++){
    row+='<td></td>';
}
row+='</tr>';
console.log(row);
var result='';
for(i=0;i<6;i++){
    result+=row;
}
document.getElementById('board').innerHTML= result;
/*let cell =document.querySelector('td');
cell.forEach( (x) => {
    x.addEventListener("click",function() {
     x.classList.toggle("white");
    })
});*/
var count_empty=36;
var count_filled=0;
document.getElementById('show').innerHTML='Available:'+count_empty;
document.getElementById('show1').innerHTML='booked:'+count_filled;
const x = document.querySelectorAll('td');
x.forEach( (y)=>{
    y.addEventListener('click',()=>{
        if(y.classList.contains("boxclicked")){
            y.classList.remove("boxclicked");
            count_empty++;
            count_filled--;
            document.getElementById('show').innerHTML='Available:'+count_empty;
            document.getElementById('show1').innerHTML='booked: '+count_filled;
        }
        else{
            y.classList.add("boxclicked");
            count_empty--;
            count_filled++;
            document.getElementById('show').innerHTML='Available:'+count_empty;
            document.getElementById('show1').innerHTML='booked: '+count_filled;
        }
    })
})