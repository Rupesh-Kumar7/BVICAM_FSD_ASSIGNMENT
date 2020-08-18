let ans=document.getElementById('ans');
buttons=document.querySelectorAll('button');
let ansValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is',buttonText);
        if(buttonText=='X'){
            buttonText='*';
            ansValue+=buttonText;
            ans.value=ansValue;

        }
        else if(buttonText=='AC'){
            ansValue="";
            ans.value=ansValue;
        }
        else if(buttonText=='C'){
            ansValue=ans.value.substr(0, ans.value.length - 1);
            ans.value=ansValue;
        }
        else if(buttonText=='='){
            ans.value=eval(ansValue);
        }
        else{
            ansValue+=buttonText;
            ans.value=ansValue;
        }
       
    })
}