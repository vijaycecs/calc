function send(i)
{
    n=document.getElementById("call");
    switch(i){
        case 1 :n.value+=1;break;
        case 2 :n.value+=2;break;
        case 3 :n.value+=3;break;
        case 4 :n.value+=4;break;
        case 5 :n.value+=5;break;
        case 6 :n.value+=6;break;
        case 7 :n.value+=7;break;
        case 8 :n.value+=8;break;
        case 9 :n.value+=9;break; 
        case 0 :n.value+=0;break;  
        case '+' :n.value+='+';break; 
        case '-' :n.value+='-';break; 
        case '*' :n.value+='*';break; 
        case '/' :n.value+='/';break;  
        case '.' :n.value+='.';break;
        case 'AC':n.value="";break;
         
        case '=':
            result=eval(n.value);
            n.value=result;
            break;

        case 'Log':
            result=eval(Math.log10(n.value));
            n.value=result;
            break;
        case '√':
            result=eval(Math.sqrt(n.value));
            n.value=result;
            break;
        case 'DEL':
            n.value= n.value.slice(0, -1);
            break;
    }
}