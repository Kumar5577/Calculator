let btns = document.querySelectorAll("input");

let string = "";

Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.value=='='){
            string = eval(string);
            document.querySelector(".text").value = string;
        }
        else if(e.target.value=='AC'){
            string = "";
            document.querySelector(".text").value = string;

        }
        else if(e.target.value=='DE'){
            string = document.querySelector(".text").value.slice(0,-1);
            document.querySelector(".text").value = string;
        }
        else{
        console.log(e.target);
        string = string + e.target.value;
        document.querySelector(".text").value = string;
        }
    })
})