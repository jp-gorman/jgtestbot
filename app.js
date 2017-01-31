var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat bot
var connector = new builder.ChatConnector({
    // appId: '95bf383a-2276-4f74-a120-e3d85d7e2e78',
   appId: process.env.MICROSOFT_APP_ID,
    // appPassword: 'vA1jXnN7axwixnmpWLt3tdM'
   appPassword: process.env.MICROSOFT_APP_PASSWORD
});

console.log('AppId: %s', process.env.MICROSOFT_APP_ID);
console.log('AppId: %s', process.env.MICROSOFT_APP_PASSWORD);

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', function (session) {
    session.send("Hello World");
});
