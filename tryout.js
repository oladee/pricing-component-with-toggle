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
console.log(annually[0].plan)
const toggle = document.getElementById("check");
toggle.addEventListener("click", (e) => {
    if(e.target.checked){
        console.log('yeag')
    }else if(!(e.target.checked)){
        console.log('congrats')
    }
})
