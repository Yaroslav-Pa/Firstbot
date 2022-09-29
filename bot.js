const Telegraf = require("telegraf").Telegraf;
        const os = require('node:os')
        BOT_TOKEN = "5696222306:AAFnS77vQCXcE34mvpM5-iLxGCAzoMdEbs4";

const bot = new Telegraf(BOT_TOKEN);
let data_from_server = {};
let date_of_data_from_server ="";
let KindOfStatistik = "stats";

function getCurrentDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today =  yyyy + '-' + mm + '-' + dd;
    console.log(today);
    return today;
};

async function getDataFromServer(forceFetch=false){
    if (!forceFetch){
        return;
    }
    return fetch("https://russianwarship.rip/api/v1/statistics/latest",{
        method:"GET",
        headers:{'Content-Type': 'application/json'}
    })   
    .then((response) =>
    response.json()
    )
    .then ((data) =>
        { 
            data_from_server=data;
            date_of_data_from_server=data_from_server.data.date;
            console.log("go to server");
        })
    .catch((er) => {
        ctx.reply("Undefiend massage");
    })

    // let responce = await fetch("https://russianwarship.rip/api/v1/statistics/latest",{
    //     method:"GET",
    //     headers:{'Content-Type': 'application/json'}
    // });
    // const data = await response.json();
    // data.then ((data) =>
    //     { 
    //         data_from_server=data;
    //         date_of_data_from_server=data_from_server.data.date;
    //         console.log("go to server");
    //     })
    // .catch((er) => {
    //     ctx.reply("Undefiend massage");
    // })    
}

bot.start(ctx =>{
    ctx.reply("Good day sir", {
        reply_markup : {
            inline_keyboard: [
                [{text : "Resource", url: "https://russianwarship.rip/"}],
                [{text : "Get latest data", callback_data: "getAll"},{text : "Get latest data by day", callback_data: "getAllByDay"}]
            ]
        }
    });
    // fetch("https://russianwarship.rip/api/v1/statistics/latest",
    // {
    //     method:"GET",
    //     headers:{'Content-Type': 'application/json'}
    // })
    // .then((response) =>
    // response.json()
    // )
    // .then ((data) =>
    //     {
    //        data_from_server = data.data.stats;
    //     }
    // )
    // .catch((err) => {
    //     console.log(`Error:${er}`);
    // })
})

bot.action("getAll", ctx =>{
    ctx.reply("DDDDDD");
    KindOfStatistik = "stats";
    // ctx.reply(data_from_server.data[KindOfStatistik]) 
})
bot.action("getAllByDay", ctx =>{
    ctx.reply("ByDay");
    KindOfStatistik = "increase";
})


 bot.command("/planes", ctx =>{
     ctx.reply("show planes")
 })
 bot.command("/tanks", ctx =>{
     ctx.reply("show tanks")
 })




bot.hears([/Hi+/i,"\u{1F600}"],(ctx) =>{
    ctx.reply("Anything i can do for you?")
})

bot.hears(/[A-Z]+/i,async ctx =>{
    let massage = ctx.message.text;
    console.log(massage);
    // if (date_of_data_from_server!=getCurrentDate())
    // {
    await getDataFromServer(date_of_data_from_server!=getCurrentDate());
    ctx.reply(massage + ": " + data_from_server.data[KindOfStatistik][massage]);
    // });
    
    // }else
    // {
    //     ctx.reply(massage + ": " + data_from_server["data"]["stats"][massage]);
    //     console.log("didnt go to server");
    // }
});

bot.launch(); 