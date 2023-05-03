const annually = 
    {
        Basicprice: "199.99",
        Professionalprice: "249.99",
        Masterprice: "399.99",
    }

const monthly = 
    {
        Basicprice: "19.99",
        Professionalprice: "24.99",
        Masterprice: "39.99",
    }
const basicAmount = document.getElementById("Basicamount");
const professionalAmount = document.getElementById("Professionalamount");
const masterAmount = document.getElementById("Masteramount");


const toggle = document.getElementById("check");

toggle.addEventListener("click", (e) => {
    
    if(e.target.checked){
        basicAmount.innerText = monthly.Basicprice
        professionalAmount.innerText = monthly.Professionalprice
        masterAmount.innerText = monthly.Masterprice
    }
    if(!(e.target.checked)){
        
        basicAmount.innerText = annually.Basicprice
        professionalAmount.innerText = annually.Professionalprice
        masterAmount.innerText = annually.Masterprice
    }
})
