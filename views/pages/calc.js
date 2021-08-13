function atualizarDisplay(num){ 
  var  salvo = document.calc.display.value;
  document.calc.display.value = salvo + num ; 
}
function limparDisplay(){
  document.getElementById("display").value= '';
}

function calcularOperacao(){ 
   var resul = 0;
   resul = document.getElementById('display').value;  
  document.getElementById('display').value = eval (resul);

}

function Raiz(){
  var sr = document.calc.display.value 
  var raiz = Math.sqrt(sr);
  document.calc.display.value = raiz;
}

function quadrado(){
  var sq = document.calc.display.value 
  var quadrado = sq * sq;
  document.calc.display.value = quadrado;
}

function porcen(){
  var sp = document.calc.display.value 
  var porce = sp / 100;
  document.calc.display.value = porce;
}

function excluir(){
  var se = document.getElementById("display").value 
  se = se.slice(0, -1)
  document.getElementById('display').value = se;
}
