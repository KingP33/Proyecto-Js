
    let inicio = parseInt(prompt("Ingrese el valor inicial de la tabla "));
    let fin= parseInt(prompt("Ingrese el valor final de la tabla"));

    function tablita(inicio, fin){
    let valor= parseInt(prompt("Ingrese que tabla de multiplicar"));
    if(inicio<=fin)
    {
        for (let f=inicio; f<=fin; f++){
            let tabla= f*valor;
            document.write(f+ "*" + valor + "=" + tabla +"<br>")
        }   
    }else{
        for (let f=inicio; f>=fin; f--){
            let tabla= f*valor;
            document.write(f+ "*" + valor + "=" + tabla +"<br>")
        }
    }
    
}