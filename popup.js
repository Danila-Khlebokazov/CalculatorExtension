document.getElementById("result").addEventListener("click", calculate)
document.getElementById("b7").addEventListener("click", () => (des(7)))
document.getElementById("b8").addEventListener("click", () => (des(8)))
document.getElementById("b9").addEventListener("click", () => (des(9)))
document.getElementById("b4").addEventListener("click", () => (des(4)))
document.getElementById("b5").addEventListener("click", () => (des(5)))
document.getElementById("b6").addEventListener("click", () => (des(6)))
document.getElementById("b1").addEventListener("click", () => (des(1)))
document.getElementById("b2").addEventListener("click", () => (des(2)))
document.getElementById("b3").addEventListener("click", () => (des(3)))
document.getElementById("zero_btn").addEventListener("click", () => (des(0)))
document.getElementById("addition").addEventListener("click", () => (change_act("+")))
document.getElementById("divide").addEventListener("click", () => (change_act("/")))
document.getElementById("substract").addEventListener("click", () => (change_act("-")))
document.getElementById("multiply").addEventListener("click", () => (change_act("*")))
document.getElementById("clear").addEventListener("click", clear)
document.getElementById("change_sign").addEventListener("click", change_sign)
document.getElementById("persent").addEventListener("click", persent)
document.getElementById("comma").addEventListener("click", comma)

var op = "";
var number1 = 0;
var number2;

var ab = document.getElementById("addition");
var db = document.getElementById("divide");
var sb = document.getElementById("substract");
var mb = document.getElementById("multiply");

function change_act(act){
    if (act != ""){
        calculate();
    }
    op = act;
    document.getElementById("actionField").value = op;

    ab.classList.remove("cur_action");
    db.classList.remove("cur_action");
    sb.classList.remove("cur_action");
    mb.classList.remove("cur_action");

    if(op == '+'){
        ab.classList.add("cur_action");
    }
    else if(op == '-'){
        sb.classList.add("cur_action");
    }
    else if(op == '*'){
        mb.classList.add("cur_action");
    }
    else if(op == '/'){
        db.classList.add("cur_action");
    }
}

function clear(){
    number1 = 0;
    number2 = 0;
    change_act("");
    document.getElementById("resultField").value=number1
    document.getElementById("numberField").value=''
}

function calculate(){
    number2 = Number(document.getElementById("numberField").value);
    switch (op) {
        case '+':
          number1 = number1 + number2;
          break;
        case '-':
            number1 = number1 - number2;
          break;
        case '*':
            number1 = number1 * number2;
          break;
        case '/':
            number1 = number1 / number2;
          break;
        case "":
            if (document.getElementById("resultField").value == 0){
                number1 = number2;
                document.getElementById("resultField").value=number2;
                number2 = 0;
                document.getElementById("numberField").value="";
            }
            return;
      }
      document.getElementById("resultField").value=number1;
      number2 = 0;
      document.getElementById("numberField").value = "";
      change_act("");
    // var input = document.getElementById("resultField").value
    // const value = eval(input)
    // document.getElementById("resultField").value=value
}

function change_sign(){
    document.getElementById("resultField").value *= (-1);
}
function persent(){
    document.getElementById("resultField").value /= 100;
}
function comma(){
    var number = String(document.getElementById("numberField").value);
    if (!number.includes(",")){
        if(number == ""){
            document.getElementById("numberField").value = "0."
        }
        else{
            document.getElementById("numberField").value += "."
        }
    }
}

function des(val){
    document.getElementById("numberField").value+=val
}