var screen=document.getElementById('screen');
var buttons=document.querySelectorAll('button');
let display=' ';
for(i of buttons){
        i.addEventListener('click',(e)=>{
            val=e.target.innerText;
        console.log('No. Type on Calci',val);

            if(val=='DEL'){
                display=display.slice(0, -1);
                screen.value=display;

            }

            else if(val=='x'){
                val='*';
                display+=val;
                screen.value=display;

            }
            else if(val=='C'){
                display="";
                screen.value=display;
            }
            else if(val=='=') {
                screen.value=eval(display);


            }
            else{
                display+=val;
                screen.value = display;
            }

        })
    }