const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.bulkDelete(50);
    message.channel.send('**50** Adet Mesaj Silindi.').then(msg =>{
                msg.delete('5000')
    });

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['clear','cls'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'temizle', //adını belirledik (kullanmak için gereken komut)
  description: '50 Adet Mesaj Temizler.', //açıklaması
  usage: 'temizle' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz