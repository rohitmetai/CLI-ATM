import inquirer from "inquirer";    

const pincode:number=1234
let currentBalance=5000

function welcome(){
   console.log("-------------------------")
   console.log("     WELCOME TO ATM      ")
   console.log("-------------------------")
   login()  
}

const login=async function () {
    let answers=await inquirer.prompt([
        {
            name:"PinCode",
            type:"password",
            message:"Enter Your Four digit Pin-Code : "
        }
    ])
    if(answers.PinCode==pincode){
       homepage()
    }
    else{
        console.log("Invalid PinCode :(")
        let answers7=await inquirer.prompt([
            {
                name:"login",
                type:"list",
                choices:["YES","NO"],
                message:"Wanna Try again ?"
            }
        ])
        if(answers7.login=="YES"){
            login()
        }
        else{
            console.log("ThankYou For Using Our ATM :)")
        }    
        
    }
}

const homepage= async function(){
    let answers2=await inquirer.prompt([
        {
           name:"operation",
           type:"list",
           message:"What do you want to do?",
           choices:["CHECK BALANCE","DEPOSIT AMOUNT","WITHDRAW AMOUNT","EXIT ATM"]
        }
    ])
    if(answers2.operation=="CHECK BALANCE"){
        console.log(" Your current Balance is : "+currentBalance)
    }
    else if(answers2.operation=="DEPOSIT AMOUNT"){
        let answers3=await inquirer.prompt([
            {
               name:"Damount",
               type:"list",
               message:"Choose the Amount You want to Deposit : ",
               choices:["500","1000","5000","Other Amount"]
            }
        ])
        if(answers3.Damount=="500"){
            currentBalance+=500
            console.log("Deposit, Your new Balance is : "+currentBalance)
        }
        else if(answers3.Damount=="1000"){
            currentBalance+=1000
            console.log("Deposit, Your new Balance is : "+currentBalance)
        } 
        else if(answers3.Damount=="5000"){
            currentBalance+=5000
            console.log("Deposit, Your new Balance is : "+currentBalance)
        }
        else{
            let answers4=await inquirer.prompt([
                {
                name:"OtherAmount",
                type:"number",
                message:"Enter Other Deposit Amount in multiples of 500 : " 
                }
            ])
            currentBalance+=answers4.OtherAmount
            console.log("Deposit Successful, Your new Balance is : "+currentBalance)

        } 
    }
    else if(answers2.operation=="WITHDRAW AMOUNT"){
        let answers5=await inquirer.prompt([
            {
               name:"Wamount",
               type:"list",
               message:"Choose the Amount You want to WithDraw : ",
               choices:["500","1000","5000","Other Amount"]
            }
        ])
        if(answers5.Wamount=="500"){
            if(currentBalance>=500){
                currentBalance-=500
                console.log("Withdraw Successful, Your new Balance is : "+currentBalance)
            }
            else{
                console.log("Oops, Insufficient Balance")
            }
        }
        else if(answers5.Wamount=="1000"){
            if(currentBalance>=1000){
                currentBalance-=1000
                console.log("Withdraw Successful, Your new Balance is : "+currentBalance)
            }
            else{
                console.log("Oops, Insufficient Balance")
            }
        }
        else if(answers5.Wamount=="5000"){
            if(currentBalance>=5000){
                currentBalance-=5000
                console.log("Withdraw Successful, Your new Balance is : "+currentBalance)
            }
            else{
                console.log("Oops, Insufficient Balance")
            }
        }
        else{
            let answers6=await inquirer.prompt([
                {
                name:"OtherAmount",
                type:"number",
                message:"Enter Other Withdraw Amount in multiples of 500 : " 
                }
            ])
            if(currentBalance>=answers6.OtherAmount){
                currentBalance-=answers6.OtherAmount
                console.log("Withdraw Successful, Your new Balance is : "+currentBalance)
            }
            else{
                console.log("Oops, Insufficient Balance")
            }
        }

    }
    else{
        console.log("EXIT FROM ATM , THANKYOU ")
    }
}

welcome()

