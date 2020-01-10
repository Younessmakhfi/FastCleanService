function checkInput(type){
    let input = document.getElementById(type);
    if(type === 'name'){
        markError(/^([A-Za-z]{3,})+([\s[A-Za-z]?]?)+$/.test(input.value), input, type);
    }else if(type === 'email'){
        markError(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(input.value), input,type);
    }else if( type === 'service'){
        markError(input.value.length >= 3, input, type);
    }else if(type === 'message'){
        markError(input.value.length >= 10, input, type);
    }
}

function markError(state,input, type){
        if(!state){
            input.style.borderColor = "red";
            document.getElementById("warning-"+type).style.display = "block";
        }else{
            input.style.borderColor = "seagreen";
            document.getElementById("warning-"+type).style.display = "none";
        }
}