const users = [
    {name:"user1", age:"16"},
    {name:"user2", age:"18"}
];

module.exports = function(app) {
    app.get("/", (req,res) => {
        res.statusCode = 200;
        res.send("Hi!");
    });
    app.get("/users", (req,res) => {
        res.statusCode = 200;
        res.send(users);
    });
    
    
    app.post("/users", (req,res) => {
        res.json(users);
    });
}