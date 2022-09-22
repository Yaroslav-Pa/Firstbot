const Telegraf = require("telegraf").Telegraf;
        const os = require('node:os')
        BOT_TOKEN = "5696222306:AAFnS77vQCXcE34mvpM5-iLxGCAzoMdEbs4";

const bot = new Telegraf(BOT_TOKEN);

bot.start(ctx =>{
    ctx.reply("Good day sir")
})
bot.hears([/Hi+/i,"\u{1F600}"],(ctx) =>{
    ctx.reply("Good day sir")
})

bot.hears(/[A-Z]+/i,(ctx) =>{
    let massage = ctx.message.text;
    console.log(massage);
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
            ctx.reply(massage + ": " + data["data"]["stats"][massage]);
            // console.log("Персонал: "+data["data"]["stats"]["personnel_units"]+"\n"+"Літаків: "+data["data"]["stats"]["planes"]);
            // console.log("Персоналу: "+data.data.increase.personnel_units+" літаків: "+data.data.increase.planes+" (За 1 день)")
        }
    )
    .catch((er) => {
        console.log(`Error:${er}`);
    })
});
bot.launch(); 