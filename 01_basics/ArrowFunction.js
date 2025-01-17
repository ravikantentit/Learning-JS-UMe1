user = {
    userName : "Ravi Kant" ,
    price : 999,
    welcome: function() {
        console.log(`${this.userName}, welcome to codeSpaces of GitHub`);
        
    }
    
}
//user.welcome()
//user.userName="RadheyShyam"
//user.welcome()
//console.log(this)
/*function chai(){
    userCource : "UPSSC"
    console.log(this.userCource)
}
chai();
*/
const chai = () => {
    let userAddress = "Entit"
    console.log(userAddress) 
}
chai()