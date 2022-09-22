const Telegraf = require("telegraf").Telegraf;
        const os = require('node:os')
        BOT_TOKEN = "5696222306:AAFnS77vQCXcE34mvpM5-iLxGCAzoMdEbs4";

const bot = new Telegraf(BOT_TOKEN);
let data_from_server = [];

bot.start(ctx =>{
    ctx.reply("Good day sir")
    fetch("https://russianwarship.rip/api/v1/statistics/latest",
    {
        method:"GET",
        headers:{'Content-Type': 'application/json'}
    })
    .then((response) =>
    response.json()
    )
    .then ((data) =>
        {
           data_from_server = data.data.stats;
        }
    )
    .catch((err) => {
        console.log(`Error:${er}`);
    })
})
bot.hears([/Hi+/i,"\u{1F600}"],(ctx) =>{
    ctx.reply("Anything i can do for you?")
})

bot.hears(/[A-Z]+/i,(ctx) =>{
    let massage = ctx.message.text;
    
    console.log(massage);
    switch (massage){
        case "planes":ctx.reply(massage + ": " + data["data"]["stats"][massage]);break;
        case "tanks":ctx.reply(massage + ": " + data["data"]["stats"][massage]);break;
        default: ctx.reply("Undefiend massage");
    }
});
bot.launch(); 