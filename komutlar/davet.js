const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
    .setAuthor("BOTU SUNUCUNA DAVET ETMEK İÇİN")
    .setColor('#0099ff')
    .setURL('https://discordapp.com/oauth2/authorize?client_id=635198114046935042&scope=bot&permissions=8')
    .setFooter('Bot Yapımcısına Ulaşmak İçin Valor#2370')
    .setTitle(':flag_black:  BOTUN DAVET LİNKİ :robot: :flag_tr: ')
    .setDescription('https://discordapp.com/oauth2/authorize?client_id=635198114046935042&scope=bot&permissions=8');

            message.channel.send(embed);

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: true, //sadece servere özel yapmadık
  aliases: ['davet','invite'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'davet', //adını belirledik (kullanmak için gereken komut)
  description: 'Botun davet linki.', //açıklaması
  usage: 'davet' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz