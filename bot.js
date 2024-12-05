
const mineflayer = require('mineflayer');

const SERVER_HOST = 'im_cube.aternos.me';
const SERVER_PORT = 15593; // Default Minecraft port
const USERNAME = 'im_here';
const PASSWORD = 'daliri1388';

function createBot() {
  const bot = mineflayer.createBot({
    host: SERVER_HOST,
    port: SERVER_PORT,
    username: USERNAME,
  });

  bot.on('login', () => {
    console.log('Bot has logged in.');
    bot.chat(`/login ${PASSWORD}`); // Send login command
  });

  bot.on('spawn', () => {
    console.log('Bot has spawned in the server.');
  });

  bot.on('end', () => {
    console.log('Bot has disconnected. Reconnecting in 5 seconds...');
    setTimeout(createBot, 5000); // Reconnect after 5 seconds
  });

  bot.on('error', (err) => {
    console.error('Error:', err);
  });

  bot.on('kicked', (reason) => {
    console.log('Bot was kicked:', reason);
  });

  // Leave the server after 15 minutes and reconnect
  setTimeout(() => {
    console.log('Bot is leaving the server...');
    bot.quit();
  }, 15 * 60 * 1000); // 15 minutes
}

createBot();
