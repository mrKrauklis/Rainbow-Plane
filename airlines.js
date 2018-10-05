const tokenfile = require("../config/config.json");
const discord = require("discord.js");
const fs = require("fs");
const bot = new discord.Client();



bot.on("message", message => {
  if(message.content.startsWith("!airlines")){
      // let's


      let Ryanair = "Ryanair";
      let EasyJet = "EasyJet";
      let Atlantic_Airways = "Atlantic Airways";
      let Norwegian = "Norwegian";
      let Private_Pilot = "Private Pilot";
      let American_Airlines = "American Airlines";
      let Delta = "Delta";
      let Lufthansa = "Lufthansa";
      let British_Aiways = "British Aiways";
      let Finnair = "Finnair";
      let Aer_Lingus = "Aer Lingus";
      let Jet_Airways = "Jet Airways";
      let FlyBe = "FlyBe";
      let Scandinavian_Airlines = "Scandinavian Airlines";

      // after let's

      //filter start


///////

let Ryanair1 = message.guild.members.filter(member => { 
  return member.roles.find(c => c.name === Ryanair); // role => role.name === "Epic Gamer"
}).map(member => {
  return member.user.username;
  
})



let embed1 = new discord.RichEmbed({
  "description": Ryanair1.join("\n"),
  "color": 0xFFFF
});

////////

      let EasyJet1 = message.guild.members.filter(member => { 
          return member.roles.find(c => c.name === EasyJet); // role => role.name === "Epic Gamer"
      }).map(member => {
          return member.user.username;
          
      })



      
     // console.log(membersWithRole.length);   // то что выводит количество элементов из эррэя

      // filter end

      //message final

    //  console.log(EasyJet1.length);   // то что выводит количество элементов из эррэя
  let embed2 = new discord.RichEmbed({
      "description": EasyJet1.join("\n"),
      "color": 0xFFFF
  });



/////

let Atlantic_Airways1 = message.guild.members.filter(member => { 
  return member.roles.find(c => c.name === Atlantic_Airways); // role => role.name === "Epic Gamer"
}).map(member => {
  return member.user.username;
  
})



let embed3 = new discord.RichEmbed({
  "description": Atlantic_Airways1.join("\n"),
  "color": 0xFFFF
});

/////

let Norwegian1 = message.guild.members.filter(member => { 
  return member.roles.find(c => c.name === Norwegian); // role => role.name === "Epic Gamer"
}).map(member => {
  return member.user.username;
  
})



let embed4 = new discord.RichEmbed({
  "description": Norwegian1.join("\n"),
  "color": 0xFFFF
});

/////

let Private_Pilot1 = message.guild.members.filter(member => { 
  return member.roles.find(c => c.name === Private_Pilot); // role => role.name === "Epic Gamer"
}).map(member => {
  return member.user.username;
  
})



let embed5 = new discord.RichEmbed({
  "description": Private_Pilot1.join("\n"),
  "color": 0xFFFF
});

/////

let American_Airlines1 = message.guild.members.filter(member => { 
  return member.roles.find(c => c.name === American_Airlines); // role => role.name === "Epic Gamer"
}).map(member => {
  return member.user.username;
  
})



let embed6 = new discord.RichEmbed({
  "description": American_Airlines1.join("\n"),
  "color": 0xFFFF
});

/////

let Delta1 = message.guild.members.filter(member => { 
  return member.roles.find(c => c.name === Delta); // role => role.name === "Epic Gamer"
}).map(member => {
  return member.user.username;
  
})



let embed7 = new discord.RichEmbed({
  "description": Delta1.join("\n"),
  "color": 0xFFFF
});

/////

let Lufthansa1 = message.guild.members.filter(member => { 
  return member.roles.find(c => c.name === Lufthansa); // role => role.name === "Epic Gamer"
}).map(member => {
  return member.user.username;
  
})



let embed8 = new discord.RichEmbed({
  "description": Lufthansa1.join("\n"),
  "color": 0xFFFF
});

/////


let British_Aiways1 = message.guild.members.filter(member => { 
  return member.roles.find(c => c.name === British_Aiways); // role => role.name === "Epic Gamer"
}).map(member => {
  return member.user.username;
  
})



let embed9 = new discord.RichEmbed({
  "description": British_Aiways1.join("\n"),
  "color": 0xFFFF
});


/////

let Finnair1 = message.guild.members.filter(member => { 
  return member.roles.find(c => c.name === Finnair); // role => role.name === "Epic Gamer"
}).map(member => {
  return member.user.username;
  
})



let embed10 = new discord.RichEmbed({
  "description": Finnair1.join("\n"),
  "color": 0xFFFF
});

/////

let Aer_Lingus1 = message.guild.members.filter(member => { 
  return member.roles.find(c => c.name === Aer_Lingus); // role => role.name === "Epic Gamer"
}).map(member => {
  return member.user.username;
  
})



let embed11 = new discord.RichEmbed({
  "description": Aer_Lingus1.join("\n"),
  "color": 0xFFFF
});



/////

let Jet_Airways1 = message.guild.members.filter(member => { 
  return member.roles.find(c => c.name === Jet_Airways); // role => role.name === "Epic Gamer"
}).map(member => {
  return member.user.username;
  
})



let embed12 = new discord.RichEmbed({
  "description": Jet_Airways1.join("\n"),
  "color": 0xFFFF
});


/////

let FlyBe1 = message.guild.members.filter(member => { 
  return member.roles.find(c => c.name === FlyBe); // role => role.name === "Epic Gamer"
}).map(member => {
  return member.user.username;
  
})


let embed13 = new discord.RichEmbed({
  "description": FlyBe1.join("\n"),
  "color": 0xFFFF
});

/////

let Scandinavian_Airlines1 = message.guild.members.filter(member => { 
  return member.roles.find(c => c.name === Scandinavian_Airlines); // role => role.name === "Epic Gamer"
}).map(member => {
  return member.user.username;
  
})
message.channel.send("Ryanair : "+Ryanair1.length+" Pilots <:ryanair:477190056294088714>\n EasyJet : "+EasyJet1.length+" Pilots <:easyjet:477190373798576136> \n Atlantic Airways : "+Atlantic_Airways1.length+" Pilots <:atlantic:477193608773107723> \n Norwegian : "+Norwegian1.length+" Pilots <:norwegian:477191769738444810> \n Private Pilot : "+Private_Pilot1.length+" Pilots <:737:467929209520521226> \n American Airlines : "+American_Airlines1.length+" Pilots <:american:477188699785003018> \n Delta : "+Delta1.length+" Pilots <:delta:477204862237671425> \n Lufthansa : "+Lufthansa1.length+" Pilots <:lufthansa:477191546735951893> \n British Aiways : "+British_Aiways1.length+" Pilots <:britishairways:477191255928078354>  \n Finnair : "+Finnair1.length+" Pilots <:finnair:493473623043211289> \n Aer Lingus : "+Aer_Lingus1.length+" Pilots <:lingus:493820748021104641> \n Jet Airways : "+Jet_Airways1.length+" Pilots <:jetairways:493825228363923466> \n FlyBe : "+FlyBe1.length+" Pilots <:flybe:467930127611854878>")










let embed14 = new discord.RichEmbed({
  "description": Scandinavian_Airlines1.join("\n"),
  "color": 0xFFFF
});

/////
  ////end////



  //////end of end////
}




}
,
)


/*
bot.on("message", message => {
if(message.content.startsWith("//1")){
    let roleName = message.content.split(" ").slice(1).join(" ");

    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their usernames
    var membersWithRole = message.guild.members.filter(member => { 
        return member.roles.find(c => c.name === roleName); // role => role.name === "Epic Gamer"
    }).map(member => {
        
        return member.user.username;
        
    })
    console.log(membersWithRole.length);   // то что выводит количество элементов из эррэя
    let embed = new discord.RichEmbed({
        "title": `Users with the ${roleName} role`,
        "description": membersWithRole.join("\n"),
        "color": 0xFFFF
    });

    return message.channel.send({embed});
}
})

var greeteng = "/utils/flyhelp.js";  */

bot.login(tokenfile.token);