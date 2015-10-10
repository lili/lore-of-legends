var titles = [
        //Aatrox
        "the Darkin Blade",
        //Ahri
        "the Nine-Tailed Fox",
        //Akali
        "the Fist of Shadow",
        //Alistar
        "the Minotaur",
        //Amumu
        "the Sad Mummy",
        //Anivia
        "the Cryophoenix",
        //Annie
        "the Dark Child",
        //Ashe
        "the Frost Archer",
        //Azir
        "the Emperor of the Sands",
        //Bard
        "the Wandering Caretaker",
        //Blitzcrank
        "the Great Steam Golem",
        //Brand
        "the Burning Vengeance",
        //Braum
        "the Heart of the Freljord",
        //Caitlyn
        "the Sheriff of Piltover",
        //Cassiopeia
        "the Serpent's Embrace",
        //Cho'Gath
        "the Terror of the Void",
        //Corki
        "the Daring Bombardier",
        //Darius
        "the Hand of Noxus",
        //Diana
        "Scorn of the Moon",
        //Dr. Mundo
        "the Madman of Zaun",
        //Draven
        "the Glorious Executioner",
        //Ekko
        "the Boy Who Shattered Time",
        //Elise
        "the Spider Queen",
        //Evelynn
        "the Widowmaker",
        //Ezreal
        "the Prodigal Explorer",
        //Fiddlesticks
        //Fiora
        //Fizz
        //Galio
        //Gangplank
        //Garen
        //Gnar
        //Gragas
        //Graves
        //Hecarim
        //Heimerdinger
        //Irelia
        //Janna
        //Jarvan IV
        //Jax
        //Jayce
        //Jinx
        //Kalista
        //Karma
        //Karthus
        //Kassadin
        //Katarina
        //Kayle
        //Kennen
        //Kha'Zix
        //Kog'Maw
        //LeBlanc
        //Lee Sin
        //Leona
        //Lissandra
        //Lucian
        //Lulu
        //Lux
        //Malphite
        //Malzahar
        //Maokai
        //Master Yi
        //Miss Fortune
        //Mordekaiser
        //Morgana
        //Nami
        //Nasus
        //Nautilius
        //Nidalee
        //Nocturne
        //Nunu
        //Olaf
        //Oriana
        //Pantheon
        //Poppy
        //Quinn
        //Rammus
        //Rek'Sai
        //Renekton
        //Rengar
        //Riven
        //Rumble
        //Ryze
        //Sejuani
        //Shaco
        //Shen
        //Shyvana
        //Singed
        //Sion
        //Sivir
        //Skarner
        //Sona
        //Soraka
        //Swain
        //Syndra
        //Tahm Kench
        //Talon
        //Taric
        //Teemo
        //Thresh
        //Tristana
        //Trundle
        //Tryndamere
        //Twisted Fate
        //Twitch
        //Udyr
        //Urgot
        //Varus
        //Vayne
        //Veigar
        //Vel'Koz
        //Vi
        //Viktor
        //Vladimir
        //Volibear
        //Warwick
        //Wukong
        //Xerath
        //Xin Zhao
        //Yasuo
        //Yorick
        //Zac
        //Zed
        //Ziggs
        //Zilean
        //Zyra
];

var terminals = {};
var startWords = [];
var wordStats = {};

for (var i = 0; i < titles.length; i++) {
    var words = titles[i].split(' ');
    terminals[words[words.length-1]] = true;
    startWords.push(words[0]);
    for (var j = 0; j < words.length - 1; j++) {
        if (wordStats.hasOwnProperty(words[j])) {
            wordStats[words[j]].push(words[j+1]);
        } else {
            wordStats[words[j]] = [words[j+1]];
        }
    }
}

var choice = function (a) {
    var i = Math.floor(a.length * Math.random());
    return a[i];
};

var make_title = function (min_length) {
    word = choice(startWords);
    var title = [word];
    while (wordStats.hasOwnProperty(word)) {
        var next_words = wordStats[word];
        word = choice(next_words);
        title.push(word);
        if (title.length > min_length && terminals.hasOwnProperty(word)) break;
    }
    if (title.length < min_length) return make_title(min_length);
    return title.join(' ');
};