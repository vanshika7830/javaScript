const { use } = require("react")

const user = {
    username: "vanshika",
    price: 9999,
    welcomeMessage: function(){
        console.log(`${username}, welcome to website`)
    }
}
user.welcomeMessage()