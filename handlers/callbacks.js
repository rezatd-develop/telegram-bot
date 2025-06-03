const { sendMainMenu } = require('./mainMenu');

function handleCallbacks(bot, query) {
  const chatId = query.message.chat.id;
  const data = query.data;

  switch (data) {
    case 'submenu1':
      bot.sendMessage(chatId, 'This is submenu 1.', {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Back to Menu', callback_data: 'back_to_menu' }]
          ]
        }
      });
      break;

    case 'submenu2':
      bot.sendMessage(chatId, 'This is submenu 2.', {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Back to Menu', callback_data: 'back_to_menu' }]
          ]
        }
      });
      break;

    case 'back_to_menu':
      sendMainMenu(bot, chatId);
      break;

    default:
      bot.sendMessage(chatId, 'Unknown command.');
  }

  bot.answerCallbackQuery(query.id); // removes the "loading" state
}

module.exports = handleCallbacks;
