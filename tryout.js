const toggle = document.getElementById("check");
toggle.addEventListener("click", (e) => {
    if(e.target.checked){
        console.log('yeag')
    }else if(!(e.target.checked)){
        console.log('congrats')
    }
})

