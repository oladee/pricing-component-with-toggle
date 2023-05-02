const annually = [
    {
        plan: 'Basic',
        price: "199.99",
        storage: "500 GB Storage",
        users: "2 Users Allowed",
        fileSize: "Send uP to 3GB"
    },
    {
        plan: 'Professional',
        price: "249.99",
        storage: "1 TB Storage",
        users: "3 Users Allowed",
        fileSize: "Send up to 10 GB"
    },
    {
        plan: 'Master',
        price: "399.99",
        storage: "2 TB Storage",
        users: "10 Users Allowed",
        fileSize: "Send up to 20GB"
    }
]
const monthly = [
    {
        plan: 'Basic',
        price: "19.99",
        storage: "500 GB Storage",
        users: "2 Users Allowed",
        fileSize: "Send uP to 3GB"
    },
    {
        plan: 'Professional',
        price: "24.99",
        storage: "1 TB Storage",
        users: "5 Users Allowed",
        fileSize: "Send up to 10 GB"
    },
    {
        plan: 'Master',
        price: "39.99",
        storage: "2 TB Storage",
        users: "10 Users Allowed",
        fileSize: "Send up to 20GB"
    }
]
const basicPlan = document.getElementById("Basicplan");
const basicAmount = document.getElementById("Basicamount").innerText;
const basicStorage = document.getElementById("Basicstorage").innerText;
const basicUsers = document.getElementById("Basicusers").innerText
const basicSend = document.getElementById("Basicsend").innerText;
const professionalPlan = document.getElementById("Professionalplan").innerText;
const professionalAmount = document.getElementById("Professionalamount").innerText;
const professionalStorage = document.getElementById("Professionalstorage").innerText;
const professionalUsers = document.getElementById("Professionalusers").innerText
const professionalSend = document.getElementById("Professionalsend").innerText;

const masterPlan = document.getElementById("Masterplan").innerText;
const masterAmount = document.getElementById("Masteramount").innerText;
const masterStorage = document.getElementById("Masterstorage").innerText;
const masterUsers = document.getElementById("Masterusers").innerText
const masterSend = document.getElementById("Mastersend").innerText;


const toggle = document.getElementById("check");

toggle.addEventListener("focus", (e) => {
    
    if(e.target.checked){
        basicPlan.textContent = monthly[0].plan
        console.log(basicPlan)
    }
    if(!(e.target.checked)){
        
    }
})
