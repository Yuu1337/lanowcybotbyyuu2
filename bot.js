const Discord = require('discord.js');
const client = new Discord.Client();
const tokens = require('./tokens.json');

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', () => {
  client.user.setActivity(".help - Komendy Bota! #BOT1", {url: "https://www.twitch.tv"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on('message', async msg=> {
  if (msg.content === '.gotospam') {
	  msg.channel.send(`LANOWCY.STORE - NAJLEPSZY SKLEP Z KONTAMI W POLSCE!`)
  }

  if (msg.content === '.wyslijzaproszenie') {
	  msg.channel.send(`LANOWCY.STORE NAJLEPSZY SKLEP Z KONTAMI W POLSCE! https://discord.gg/sZt564u`)
  }
  if (msg.content === '.dzik') {
	  msg.channel.send(`http://www.drapiezniki.pl/Photos/dzik.jpg `)
  }
    if (msg.content === '.tradeknifeTajgakodbyYuu') {
	  msg.channel.send(`Czy mam polaczyc ze steam? tak/nie? `)
  }
    if (msg.content === 'nie') {
	  msg.channel.send(`Nie polaczyles ze steam bot'em nie mozesz przeprowadzic wymiany! `)
  }
    if (msg.content === 'tak') {
	  msg.channel.send(`Podaj swoj trade link! `)
  }
  if (msg.content === 'https://steamcommunity.com/tradeoffer/new/?partner=300605304&token=Q_HNgDIC') {
	  msg.channel.send(`Czy mam wyslac do ciebie ten noz w prezencie? tak1/nie1 `)
  }
    if (msg.content === 'tak1') {
	  msg.channel.send(`Lacze z botem steam.... `)
  }
    if (msg.content === 'nie1') {
	  msg.channel.send(`To R.I.P trade! `)
  }
    if (msg.content === 'Lacze z botem steam....') {
	  msg.channel.send(`Polaczono pomyslnie! `)
  }
    if (msg.content === 'Polaczono pomyslnie!') {
	  msg.channel.send(`Czy chcesz potwierdzic wymiane? tak2/nie2? `)
  }
    if (msg.content === 'tak2') {
	  msg.channel.send(`Noz zostal wyslany na tradelink: https://steamcommunity.com/tradeoffer/new/?partner=300605304&token=Q_HNgDIC `)
  }
    if (msg.content === 'Noz zostal wyslany na tradelink: https://steamcommunity.com/tradeoffer/new/?partner=300605304&token=Q_HNgDIC ')  {
	  msg.channel.send(`Twoja kosa bd za 15minut w twoim ekwipunku! `)
  }
    if (msg.content === 'nie2') {
	  msg.channel.send(`No to nie!`)
  }
  if (msg.content === '.Bicek') {
	  msg.channel.send(`https://imgur.com/a/s18597H `)
  }
  if (msg.content === '.') {
	  msg.channel.send(`Wpisales zla komende! Wpisz help aby zobaczec komendy! `)
  }
  if (msg.content === '.play') {
	  msg.channel.send(`Wpisales zla komende! Wpisz help aby zobaczec komendy! `)
  }
  if (msg.content === '.stop') {
	  msg.channel.send(`Wpisales zla komende! Wpisz help aby zobaczec komendy! `)
  }
  if (msg.content === '.pause') {
	  msg.channel.send(`Wpisales zla komende! Wpisz help aby zobaczec komendy! `)
  }
  if (msg.content === '.play link') {
	  msg.channel.send(`Wpisales zla komende! Wpisz help aby zobaczec komendy! `)
  }
  if (msg.content === '.rokos') {
	  msg.channel.send(`https://imgur.com/a/RzgSUyD `)
  }
  if (msg.content === '.prefix') {
	  msg.channel.send(`Moj prefix to (.) `)
  }
  if (msg.content === '.ciszanocna') {
	  msg.channel.send(`---TERAZ JEST NOC!---








**PROSZE BYC CICHO BO ADMINISTRACJA PROSI!** `)
  }
  if (msg.content === '.restart') {
	  msg.channel.send(`Restartuje BOT'a! `)
  }
  if (msg.content === '.Bicekgif') {
	  msg.channel.send(`https://imgur.com/a/i523cLX `)
  }
  if (msg.content === '.cat') {
	  msg.channel.send(`https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80 `)
  }
  if (msg.content === '.dog') {
	  msg.channel.send(`https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg `)
  }
  if (msg.content === '.komendy') {
	  msg.channel.send(`**---KOMENDY GRACZA---**
 **.gotospam**
 **.wyslijzaproszenie - wysyla zaproszenie do servera Lanowcy.store**
 **.autor - Pokazuje autora bota!**
 **.wyslijtekstdoeveryone - wysyla reklame servera do wszystkich osob na discord!**
 **.mojeIQ - pokazuje ile masz IQ**
 **.wygenerujALT - otrzymasz wygenerowane konto alt!**
 **.stronawww - nasza strona www**
 **.fajnyavatar - wyswietla bardzo ladny avatar!**
 **.smiesznygif - wyswietla smieszny gif!**
 **.swastyka - wyswietla swastyke!**
 **.MaleDzieci - bekowy tekst!**
 **.dzik - wyswietla dzika**
 **.Bicek - wyswietla bicka**
 **.prefix - prefix bot'a**
 


















**---KOMENDY ADMINISTRATORA---**

**.chat-clear - czysci chat!**
**.ciszanocna - Prosi o cisze nocna!**
**.restart - Restartuje BOT'a**`)
  }
  if (msg.content === '.autor') {
	  msg.channel.send(`Autorem bota jest Yuu  `)
  }
  if (msg.content === '.mojeIQ') {
	  msg.channel.send(`Twoje IQ wynosi 99999iq `)
  }
  if (msg.content === 'LANOWCY.STORE - NAJLEPSZY SKLEP Z KONTAMI W POLSCE ZAPRASZAMY!') {
	  msg.channel.send(`LANOWCY.STORE - NAJLEPSZY SKLEP Z KONTAMI W POLSCE ZAPRASZAMY!`)
  }
  if (msg.content === '.fajnyavatar') {
	  msg.channel.send(`https://imgur.com/a/CbbH16x `)
  }
  if (msg.content === '.help') {
	  msg.channel.send(`Wszystkie komendy pod **.komendy** `)
  }
  if (msg.content === '.smiesznygif') {
	  msg.channel.send(`https://imgur.com/a/XXFlBwN `)
  }
  if (msg.content === '.swastyka') {
	  msg.channel.send(`https://imgur.com/a/C3hwrWd `)
  }
  if (msg.content === '.MaleDzieci') {
	  msg.channel.send(`MaleDzieci lubia Dzieci! :D <3 `)
  }
  if (msg.content === '.stronawww') {
	  msg.channel.send(`Talk-speak.pl - nasza strona www `)
  }
  if (msg.content === 'Zapraszamy na lanowcy.store - najlepszy server z kontami w Polsce!') {
	  msg.channel.send(`Zapraszamy na lanowcy.store - najlepszy server z kontami w Polsce! `)
  }
  if (msg.content === '.wygenerujALT') {
	  msg.channel.send(`LANOWCY.STORE - NAJLEPSZY SKLEP Z KONTAMI W POLSCE!



OTO TWOJ MINECRAFT ALT:
nicholas.garrell3@gmail.com:M1n3craftR0CK5 `)
  }
  if (msg.content === '.wyslijtekstdoeveryone') {
	  msg.channel.send(`@everyone LANOWCY.STORE - Na naszym serverze discord jest mozliwosc wygenerowania minecraft alta! Zapraszamy na naszego discorda! `)
  }
  if (msg.content === '@everyone Na naszym serverze discord jest mozliwosc wygenerowania minecraft alta!') {
	  msg.channel.send(`@everyone Na naszym serverze discord jest mozliwosc wygenerowania minecraft alta!  `)
  }
  if (msg.content === '.chat-clear') {
	  msg.channel.send(`






.











.










.






.









                                                         ---CHAT CLEAR----  `)
  }
  if (msg.content === '.help') {
	  msg.channel.send(`Nie wczytano komendy!  
Wpisz "komendy" - Wyswietli dostepne komedy bota!`)
}
});

client.login(tokens.token);