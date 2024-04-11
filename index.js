let DisplayVariable;
let CalculateVariable;

document.getElementById("reset").onclick = function(){
    document.getElementById("display").textContent = "";
    CalculateVariable = "";
    DisplayVariable = "";
}

document.getElementById("delete").onclick = function(){
    DisplayVariable = DisplayVariable.slice(0,-1);
    CalculateVariable = CalculateVariable.slice(0,-1);
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("equal").onclick = function(){
    CalculateVariable = eval(CalculateVariable);
    DisplayVariable = CalculateVariable;
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("percentage").onclick = function(){
    DisplayVariable += "%";
    CalculateVariable += "%";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("plus").onclick = function(){
    DisplayVariable += "+";
    CalculateVariable += "+";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("minus").onclick = function(){
    DisplayVariable += "-";
    CalculateVariable += "-";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("divide").onclick = function(){
    DisplayVariable += String.fromCharCode(247);
    CalculateVariable += "/";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("multiply").onclick = function(){
    DisplayVariable += String.fromCharCode(215);
    CalculateVariable += "*";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("decimal").onclick = function(){
    DisplayVariable += ".";
    CalculateVariable += ".";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("hundred").onclick = function(){
    DisplayVariable += "00";
    CalculateVariable += "00";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("nine").onclick = function(){
    DisplayVariable += "9";
    CalculateVariable += "9";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("zero").onclick = function(){
    DisplayVariable += "0";
    CalculateVariable += "0";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("eight").onclick = function(){
    DisplayVariable += "8";
    CalculateVariable += "8";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("seven").onclick = function(){
    DisplayVariable += "7";
    CalculateVariable += "7";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("six").onclick = function(){
    DisplayVariable += "6";
    CalculateVariable += "6";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("five").onclick = function(){
    DisplayVariable += "5";
    CalculateVariable += "5";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("four").onclick = function(){
    DisplayVariable += "4";
    CalculateVariable += "4";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("three").onclick = function(){
    DisplayVariable += "3";
    CalculateVariable += "3";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("two").onclick = function(){
    DisplayVariable += "2";
    CalculateVariable += "2";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("one").onclick = function(){
    DisplayVariable += "1";
    CalculateVariable += "1";
    document.getElementById("display").textContent = DisplayVariable;
}

document.getElementById("zero").onclick = function(){
    DisplayVariable += "0";
    CalculateVariable += "0";
    document.getElementById("display").textContent = DisplayVariable;
}