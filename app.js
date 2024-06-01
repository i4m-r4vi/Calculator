inputval="";

function appendnum(num){
    inputval+=num;
    displayy();
}

function displayy(){
    document.getElementById("inputvalues").value=inputval;
}

function calc(){
    try
    {
        inputval=eval(inputval);
        displayy();
    }
    catch(err){
        alert("Invalid Calculation");
        AC();
    }
}

function AC(){
    inputval="";
    displayy();
}

function del(){
    inputval=inputval.slice(0,-1);
    displayy();
}
