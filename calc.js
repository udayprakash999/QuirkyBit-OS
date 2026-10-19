
const output = document.getElementById("output");
const numvalues = document.querySelectorAll(".numvalue");

numvalues.forEach((btn) =>{
  btn.addEventListener("click", ()=>{
    const value = btn.dataset.value;

    if(value === 'clear'){
      output.value = "";
    }
    else if (value === "backspace"){
      output.value = output.value.slice(0,-1);
    }
    else if (value === "="){
      try {
        let result = output.value;

        if(result === "") return;

        let allowed = "0123456789+-*/%.()";

        for(let char of result){
          if(!allowed.includes(char)){
            output.value = "Err";
            return;
          }
        }
        output.value = eval(result);
        if(!Number.isFinite(Number(output.value))){
          output.value = "Err";
        }
      }
      catch{
        output.value = "Err";
      }
    }
    else{
      if(output.value === "Err"){
        output.value = "";
      }
      output.value += value;
    }
  });
});
