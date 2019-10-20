const Discord = require('discord.js');


exports.run = function(client, message) {
    
    const embed = new Discord.RichEmbed()
    .setAuthor("Sunucu İkonu")
    .setImage(message.guild.iconURL)
    .setColor('#ff3838')
    
            message.channel.send(embed);

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'servericon', //adını belirledik (kullanmak için gereken komut)
  description: 'Server ikonunun göster,r.', //açıklaması
  usage: 'servericon' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz