require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Handlers
const { sendMainMenu } = require('./handlers/mainMenu');
const handleCallbacks = require('./handlers/callbacks');

// Start command
bot.onText(/\/start/, (msg) => {
  sendMainMenu(bot, msg.chat.id);
});

// Callback queries (button presses)
bot.on('callback_query', (query) => {
  handleCallbacks(bot, query);
});
