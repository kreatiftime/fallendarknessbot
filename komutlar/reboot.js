const Discord = require('discord.js');


exports.run = function(client, message) {

      const embed = new Discord.RichEmbed()



      .setColor('#18dcff')
      .setDescription(':robot: **Bot yeniden başlatılıyor...** :arrows_counterclockwise:');

    message.channel.send(embed).then(msg => {
        console.log("Bot Yeniden Başlatılıyor...");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['yenidenbaslat'], //farklı çağrılar ekledik
  permLevel: 4 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'reboot', //adını belirledik (kullanmak için gereken komut)
  description: 'Botu Yeniden Başlatır.', //açıklaması
  usage: 'reboot' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz