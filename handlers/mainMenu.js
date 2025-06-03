const { mainMenuKeyboard } = require('../utils/keyboards');

function sendMainMenu(bot, chatId) {
  bot.sendMessage(chatId, 'Main Menu:', {
    reply_markup: {
      inline_keyboard: mainMenuKeyboard
    }
  });
}

module.exports = { sendMainMenu };
