// bot.js
const TelegramBot = require('node-telegram-bot-api');
const Agent = require('socks5-https-client/lib/Agent');

// Replace with your BotFather token
const token = '8192918300:AAELExcLyKJDTcQHCPaYu3i0I9jWyhOdno0';

// Create a bot using polling (for local use)
const bot = new TelegramBot(token, { polling: true });

// Basic /start command
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'سلام بر گومبولی خوشمزه حالت چطوره');
});

// /help command
bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, `Available commands:
/start - Start the bot
/help - Show this help message`);
});

// Example /echo command
bot.onText(/\/echo (.+)/, (msg, match) => {
    const resp = match[1];
    bot.sendMessage(msg.chat.id, resp);
});
