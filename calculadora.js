//declaração das variaveis 
var vp = "";
var vf = "";
var n = "";
var i = "";
var pmt = "";
var decimal = 2;
let cont; 

//declaração para a modificações responsavel pela escrita ao lado do botão 
var resultado_vp = document.getElementById('resultado_vp');
var resultado_vf = document.getElementById('resultado_vf');
var resultado_n = document.getElementById('resultado_n');
var resultado_i = document.getElementById('resultado_i');
var resultado_pmt = document.getElementById('resultado_pmt');
var resultado_decimal = document.getElementById('resultado_decimal');

//função responsavel para manter o cursos de digitação na caixa de imput 
function focusInput(){
    document.querySelector("input").focus();
    document.querySelector("input").value = "0";
}

//função de limpeza da calculadora
function limpar(){

    document.querySelector("input").value = "";
    document.getElementById('resultado').innerHTML = "";
    vp = "", vf = "", n = "", i = "", pmt = "";
    resultado_vf.innerHTML = "", resultado_vp.innerHTML = "", resultado_n.innerHTML = "";
    resultado_i.innerHTML = "", resultado_pmt.innerHTML = "";

}

let btnlimpar = document.querySelector('button.limpar');

// bontão que recebe a função limpar
btnlimpar.onclick = function (){
    
    limpar();

}

let btn = document.querySelector('button.btn');

let btndecimal = document.querySelector('button.decimal');

//função corespondente a tecla que controla a quantidade de casas decimais (default = 0)
btndecimal.onclick = function(){

    focusInput();

cont = "decimal";

//let span = document.getElementById('resultado');
    //span.innerHTML = "";
if (decimal > 9){

    decimal = 9
    return decimal

}else {

    decimal = document.querySelector("input").value;
    return decimal;

    }

}

let btnvp = document.querySelector('button.vp');

//bontão que verifica, se existe valores, para realizar o calculo do valor presente, aparti do pmt ou vf.
btnvp.onclick = function(){
    
    focusInput();

    cont = 'vp';
    
    let span = document.getElementById('resultado');
    //span.innerHTML = "";

    if (vp === "" && vf !== "" && n !== "" && i !== ""){

        vp = vf / (Math.pow((1 + (i/100)), n)) * -1;

        //verifica se o vp e positivo ou negativo, e muda a cor da fonte
       if (vp > 0){

            span.style.color = "green";
        }else {

            span.style.color = "red";
        }

        span.innerHTML = " Valor Presente = " + vp.toFixed(decimal);

    }else if (vp === "" && pmt !== "" && n !== "" && i !== ""){

    vp = ((((Math.pow(1+(i/100),n) - 1)))/(((i/100)*(Math.pow(1+(i/100), n)))) * pmt) * -1;

    //verifica se o vp e positivo ou negativo, e muda a cor da fonte
        if (vp > 0){

            span.style.color = "green";
        }else {

            span.style.color = "red";
        }

        span.innerHTML = " Valor Presente = " + vp.toFixed(decimal);

    }
}

let btnvf = document.querySelector('button.vf');
//bontão que verifica, se existe valores, para realizar o calculo do valor futuro, aparti do pmt ou vp.
btnvf.onclick = function(){

    focusInput();

    cont = "vf";

    let span = document.getElementById('resultado');
    //span.innerHTML = "";
    
    if (vf === "" && vp !== "" && n !== "" && i !== ""){
        
        vf = vp * (Math.pow((1 + (i/100)), n)) * -1;

        //verifica se o vf e positivo ou negativo, e muda a cor da fonte
        if (vf > 0){

            span.style.color = "green";
        }else {

            span.style.color = "red";
        }

        span.innerHTML = " Valor Futuro = " + vf.toFixed(decimal);

    }else if (vf === "" && pmt !== "" && n !== "" && i !== ""){

        vf = ((((Math.pow(1+(i/100),n) - 1) / (((i/100)))) * pmt)) * -1;

        if (vf > 0){

            span.style.color = "green";
        }else {

            span.style.color = "red";
        }

        span.innerHTML = " Valor Futuro = " + vf.toFixed(decimal)

    }
    
}

let btni = document.querySelector('button.i');

btni.onclick = function(){

    focusInput();

    cont = "i";

    let span = document.getElementById('resultado');
    //span.innerHTML = "";

    if (vp > 0 && vf > 0){

        alert('Ambos os valores são positivos');

        limpar();

    } else if (vp < 0 && vf < 0){

        alert('Ambos os valores são negativos');

        limpar();

    }
        
    if (i === "" && vp !== "" && n !== "" && vf !== ""){
        
        //verifica qual valor e negativo e converte em positivo
        if (vf < 0){

            vf *= -1

        }else if(vp < 1){

            vp *= -1
        }

        i = ((Math.pow((vf/vp),(1/n))) -1 ) * 100;

        span.style.color = 'black';

        span.innerHTML = (' Taxa de Juros = ' + i.toFixed(decimal) + " % ");

    }
        
}

let btnn = document.querySelector('button.n');

btnn.onclick = function(){

    focusInput();

    cont = "n";
    
    let span = document.getElementById('resultado');
    //span.innerHTML = "";
    
    if (vp > 0 && vf > 0){

        alert('Ambos os valores são positivos');

        limpar();

    } else if (vp < 0 && vf < 0){

        alert('Ambos os valores são negativos');

        limpar();

    }

    if (n === "" && vp !== "" && vf !== "" && i !== ""){

        //verifica qual valor e negativo e converte em positivo
        if (vf < 0){

            vf *= -1

        }else if(vp < 1){

            vp *= -1
        }
        
        n = (Math.log(vf/vp))/(Math.log(1 + (i/100)));

        span.style.color = 'black';

        span.innerHTML =  " Número de Períodos = " + n.toFixed(decimal);

    }
        
}

let btnpmt = document.querySelector('button.pmt');

btnpmt.onclick = function(){

    focusInput();

    cont = "pmt";

    let span = document.getElementById('resultado');
    //span.innerHTML = "";

    if (vf === "" && vp !== "" && n !== "" && i !== ""){
       
        pmt = ((((i/100)*(Math.pow(1+(i/100), n))) /((Math.pow(1+(i/100),n) - 1))) * vp) * -1

        if (vp < 0){

            span.style.color = "green";
        }else {

            span.style.color = "red";
        }

        span.innerHTML = "PMT = " + pmt.toFixed(decimal);

   } else  if (vp === "" && vf !== "" && n !== "" && i !== ""){
       
        pmt = ((((i/100))) /((Math.pow(1+(i/100),n) - 1)) * vf) * -1

        if (vf < 0){

            span.style.color = "green";
        }else {

            span.style.color = "red";
        }

        span.innerHTML = "PMT = " +pmt.toFixed(decimal);

    }
}

let btnsinal = document.querySelector('button.sinal');

function escreverTexto(input){

    if (cont === "vp"){
        //anular o zero do focus;
        input.value *= 1;

        valor = document.querySelector("input").value;

        if(valor > 0){
            resultado_vp.style.color = "green"
            document.querySelector("input").style.color = "green";
        }else{
            resultado_vp.style.color = "red"
            document.querySelector("input").style.color = "red";
        }
    

        limparResult();
        
        resultado_vp.innerHTML = input.value; 
        
        btn.onclick = function(){
                vp = input.value;
                
                return vp;
        }

        btnsinal.onclick = function(){

            document.querySelector("input").value *= -1
            valor *= -1
            
            resultado_vp.innerHTML = input.value
            
            vp = input.value;
            
            document.querySelector("input").focus();

                if(valor > 0){
                    resultado_vp.style.color = "green"
                    document.querySelector("input").style.color = "green";
                }else{
                    resultado_vp.style.color = "red"
                    document.querySelector("input").style.color = "red";
                    }

            btnsinal.disabled = false;

                btn.onclick = function(){
                    vp = input.value;
                
                    btn.disabled = false;
                    return vp;
        }

        }
          
    }else if (cont ==="vf"){

        //anular o zero do focus;
        input.value *= 1;

        valor = document.querySelector("input").value;

        if(valor > 0){
            resultado_vf.style.color = "green"
            document.querySelector("input").style.color = "green";
        }else{
            resultado_vf.style.color = "red"
            document.querySelector("input").style.color = "red";
        }

        limparResult();
        
        resultado_vf.innerHTML = input.value;

            btn.onclick = function(){
                vf = input.value;
            
                return vf;
        }

        btnsinal.onclick = function(){

            document.querySelector("input").value *= -1
            valor *= -1;
            
            resultado_vf.innerHTML = input.value
            
            vf = input.value;
            
            document.querySelector("input").focus();

                if(valor > 0){
                    resultado_vf.style.color = "green"
                    document.querySelector("input").style.color = "green";
                }else{
                    resultado_vf.style.color = "red"
                    document.querySelector("input").style.color = "red";
                    }

            btnsinal.disabled = false;

                btn.onclick = function(){
                    vf = input.value;
                
                    btn.disabled = false;
                return vf;
                }

        }

    }else if (cont ==="n"){

        //anular o zero do focus;
        input.value *= 1;

        limparResult();
        
        resultado_n.innerHTML = input.value;

        btn.onclick = function(){
            n = input.value
        }

    }else if (cont ==="i"){

        //anular o zero do focus;
        input.value *= 1;

        limparResult();
        
        resultado_i.innerHTML = input.value + "%";
            
        btn.onclick = function(){
            i = input.value 
        }

        /*btnsinal.onclick = function(){

            document.querySelector("input").value *= -1
            
            resultado_i.innerHTML = input.value * "%";
            
            i = input.value;
            
            document.querySelector("input").focus();

            btnsinal.disabled = false;*/

                btn.onclick = function(){
                    i = input.value;
                
                    btn.disabled = false;

                return i;
        }

        //}

    }else if (cont ==="pmt"){

        //anular o zero do focus;
        input.value *= 1;

        valor = document.querySelector("input").value;

        if(valor > 0){
            resultado_pmt.style.color = "green"
            document.querySelector("input").style.color = "green";
        }else{
            resultado_pmt.style.color = "red"
            document.querySelector("input").style.color = "red";
        }
        
        limparResult();

        resultado_pmt.innerHTML = input.value;

        btn.onclick = function(){
            pmt = input.value
        }

        btnsinal.onclick = function(){

            document.querySelector("input").value *= -1
            valor *= -1

            resultado_pmt.innerHTML = input.value
            
            pmt = input.value;
            
            document.querySelector("input").focus();

                if(valor > 0){
                    resultado_pmt.style.color = "green"
                    document.querySelector("input").style.color = "green";
                }else{
                    resultado_pmt.style.color = "red"
                    document.querySelector("input").style.color = "red";
                }

            btnsinal.disabled = false;

            btn.onclick = function(){
                pmt = input.value;
                
                btn.disabled = false;

                return pmt;
            }

        }

    }else if (cont ==="decimal"){

        //anular o zero do focus;
        input.value *= 1;

        limparResult();
        
        if (input.value > 9){
            
            resultado_decimal.innerHTML = 9;

            btn.onclick = function(){
                decimal = 9
                
                btn.disabled = false;

                return decimal;
            }
        }else {
            
            resultado_decimal.innerHTML = input.value;
            
            btn.onclick = function(){
                decimal = input.value
                
                btn.disabled = false;

                return decimal;
            }
        }
}

}

document.addEventListener('keypress', function(e){
    if(e.which == 13){
      captura();
      sinal();
    }
  }, false);

  function captura(){

    if (cont === "vp"){
      
    vp = document.querySelector("input").value;
    return vp;


    }else if (cont === "vf"){
      
        vf = document.querySelector("input").value;
        return vf;
    
    }else if (cont === "n"){
      
        n = document.querySelector("input").value;
        return n;
    
    }else if (cont === "i"){
      
        i = document.querySelector("input").value;
        return i;
    
    }else if (cont === "pmt"){
      
        pmt = document.querySelector("input").value;
        return pmt;
    
    }else if (cont === "decimal"){
        
        decimal = document.querySelector("input").value;

        if (decimal > 9){

            decimal = 9;
            return decimal;

        }else { 
        
        return decimal;

        }
    
    }

}

function sinal(){

    btnsinal.onclick = function(){

        valor = document.querySelector("input").value;

    if (cont === "vp"){
    
        vp = valor;
        vp = vp * (-1)

        return vp;

    }else if (cont === "vf"){
    
        vf = valor;
        vf = vf * (-1);

        return vf;

    }else if (cont === "pmt"){
    
        pmt = valor;
        pmt = pmt * (-1);

        return pmt;

    }else if (cont === "i"){
    
        i = valor;
        i = i * (-1);

        return i;
    }
}
}

function limparResult(){
    
    if (vp === ""){
        resultado_vp.innerHTML = "";
    }

    if (vf === ""){
        resultado_vf.innerHTML = "";
    }

    if (n === ""){
        resultado_n.innerHTML = "";
    }

    if (i === ""){
        resultado_i.innerHTML = "";
    }

    if (pmt === ""){
        resultado_pmt.innerHTML = "";
    }

    if (decimal === ""){
        resultado_decimal.innerHTML = "";
    }
}

