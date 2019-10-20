const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setImage(message.author.avatarURL)
    .setColor('#90ee90');

        message.channel.send(embed);

};

exports.conf = {
  enabled: true, //komutu açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['pp','avatarım'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'avatar', //adını belirledik (kullanmak için gereken komut)
  description: 'KUllanıcının avatarını gösterir.', //açıklaması
  usage: 'avatar' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz