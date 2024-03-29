const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'siktirlenenler');
  if (!modlog) return message.reply('`siktirlenenler` kanalı oluşturman lazım.');
  if (reason.length < 1) return message.reply('Adamı neden kicklediğini de yazsana lan kürt.');
  if (message.mentions.users.size < 1) return message.reply('Kimi kickleyeceğim lan kürt.').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('Yetkilileri kicklemeye çalışma sonu kötü olur. :angry: ');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField(':white_check_mark: Eylem:', 'Sunucudan atma')
    .addField(':bust_in_silhouette: Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField(':cop: Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField(':warning: Sebep', reason);
  return guild.channels.get(modlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
