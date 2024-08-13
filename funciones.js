
var sema=["lun","mar","mier","jue","vier","sab","dom"];

function dias()
{
for (let index = 0; index < sema.length; index++) {
   document.write(sema[index],"<br>");
    
}
}
//dias();

var texto="Hola";
var x=1;
function frase(){

while(x<=10){
document.write(texto,"<br>")
    x++;
}
}


var ini=10000;
var fin=100000;
var x=1;
function acu(){
for (let index = ini; index <= fin; index+=1000) {
    document.write(index+"--")
}

}



var ini=10000;
var fin=100000;
var x=1;

function dec(){
for (let index = fin; index >= ini; index-=1000) {
    if(index==inicio){
        document.write(index);
    }
    else{document.write(index+"--");
        
    }
}

}

