

var sy1=document.getElementById(sy1).value;
var sy2=document.getElementById(sy2).value;
var sy3=document.getElementById(sy3).value;
var sy4=document.getElementById(sy4).value;
var sy5=document.getElementById(sy5).value;
var mul=1;
var temp=0;

var num = document.getElementsByClassName(num);

    var res=document.getElementById(res).value=temp;

function calculate(){
    if(sy1=="*"){
       mul();  
    }
    else if(sy2=="/"){
       di();
    }
    else if(sy3=="-"){
        sub();
    }
    else if(sy4=="+"){
        add();
    }
    
}

function mul(){
  
  temp=mul*num;
  return temp;
}
function di(){
    
    temp=temp/num;
    return temp;
}
function sub(){
    
    temp=temp-num;
    return temp;

}
function add(){
    temptemp+num;
    return temp;
}
function clr(){
    temp--;
    return temp;
}

