const elfMale = ['Elawraek Embersinger', 'Qimenor Eagerdew', 'Fenro Mossfond', 'Kelzumin Birchflight', 'Crahorn Rapidsense', 'Erfir Rephanalonn']
const elfFemale = ['Miazorwyn Starshadow', 'Eilxisys Evenmoon', 'Qithyra Sunwish', 'Chaewynn Wildmind', 'Venxina Ravenhold', 'Tristris Ferandraxen']

const orcMale = ['Gruk Bitter Strangler', 'Mun The Broken', 'Bhokk Iron Ender', 'Gul The Merciless', 'Ukrukk The Butcher', 'Zhadrad The Maniac']
const orcFemale = ['Vih The Volatile', 'Raong The Warped', 'Gauv Muscle Chopper', 'Bhiv Feet Piercer', 'Emzek The Vulgar', 'Bhuwnkoul The Gross']

const humanMale = ['Nhesum Node', 'Bahmud Rimme', 'Nergerk Amberbelly', 'Valork Havengrove', 'Nobrer Glov', 'Vem Chiledz']
const humanFemale = ['Cizinih Dhikin', 'Sheifuh Nuhu', 'Nilseecha Dragontrap', 'Jheeldro Downbluff', 'Tanni Vask', 'Ra Kemev']

const dwarfMale = ['Bhelrom Stormfeast', 'Malgron Hardbrow', 'Dulmand Brightbreaker', 'Amrim Blackmantle', 'Therdrus Bravebreaker', 'Kargrim Daeldaln']
const dwarfFemale = ['Lasryl Lightstrike', 'Brallelyn Madstorm', 'Misdille Moltendelver', 'Jynlyn Drunkhelm', 'Anmyla Mountainhead', 'Mistdryn Grederk']

const LG = 'Lawful good (LG) creatures can be counted on to do the right thing as expected by society. Gold dragons, paladins, and most dwarves are lawful good.'
const LN = 'Lawful neutral (LN) individuals act in accordance with law, tradition, or personal codes. Many monks and some wizards are lawful neutral.'
const LE = 'Lawful evil (LE) creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils, blue dragons, and hobgoblins are lawful evil.'
const NG = 'Neutral good (NG) folk do the best they can to help others according to their needs. Many celestials, some cloud giants, and most gnomes are neutral good.'
const N = `Neutral (N) is the alignment of those who prefer to steer clear of moral questions and don't take sides, doing what seems best at the time. Lizardfolk, most druids, and many humans are neutral`
const NE = 'Neutral evil (NE) is the alignment of those who do whatever they can get away with, without compassion or qualms. Many drow, some cloud giants, and goblins are neutral evil.'
const CG = 'Chaotic good (CG) creatures act as their conscience directs, with little regard for what others expect. Copper dragons, many elves, and unicorns are chaotic good.'
const CN = 'Chaotic neutral (CN) creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral.'
const CE = 'Chaotic evil (CE) creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil.'
 
const button = document.querySelector('button')
const race = document.getElementById('race')
const gender = document.getElementById('gender')
const input = document.getElementById('input')
const body = document.getElementsByTagName('body')
const classes = document.getElementById('class')
const alignment = document.getElementById('alignment')
const barbarian = document.getElementsByClassName('barbarian')
const hidden = document.getElementsByClassName('hidden')
const alignmentText = document.querySelector('.alignmentText')
const classImage = document.getElementById('classImage')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


document.addEventListener('change',(e)=>{
    if(e.target.id="race"){
        if (race.value == 'orc') {
            console.log('Orc selected')
             document.querySelector('body').style.backgroundImage = `url("./img/Orgrimmar2.jpg")`
        }
        if (race.value == 'dwarf') {
            console.log('Dwarf selected')
             document.querySelector('body').style.backgroundImage = `url("./img/Ironforge.png")`
        }
        if (race.value == 'human') {
            console.log('Human selected')
             document.querySelector('body').style.backgroundImage = `url("./img/Stormwind.webp")`
        }
        if (race.value == 'elf') {
            console.log('Human selected')
             document.querySelector('body').style.backgroundImage = `url("./img/Teldrassil.webp")`
        }
        
    }
})


// Name Generator
button.addEventListener('click', () => {

    if (race.value == 'elf' && gender.value == 'male') {
        input.value = elfMale[getRandomInt(0, elfMale.length)]
    }
    if (race.value == 'elf' && gender.value == 'female') {
        input.value = elfFemale[getRandomInt(0, elfFemale.length)]
    }
    if (race.value == 'orc' && gender.value == 'male') {
        input.value = orcMale[getRandomInt(0, orcMale.length)]
    }
    if (race.value == 'orc' && gender.value == 'female') {
        input.value = orcFemale[getRandomInt(0, orcFemale.length)]
    }
    if (race.value == 'human' && gender.value == 'male') {
        input.value = humanMale[getRandomInt(0, humanMale.length)]
    }
    if (race.value == 'human' && gender.value == 'female') {
        input.value = humanFemale[getRandomInt(0, humanFemale.length)]
    }
    if (race.value == 'dwarf' && gender.value == 'male') {
        input.value = dwarfMale[getRandomInt(0, dwarfMale.length)]
    }
    if (race.value == 'dwarf' && gender.value == 'female') {
        input.value = dwarfFemale[getRandomInt(0, dwarfFemale.length)]
    }
})

// Alignment Description
alignment.addEventListener('change', (e) => {
    if(e.target.value == 'lawful good') {
        alignmentText.innerText = LG
    }
    if(e.target.value == 'lawful neutral') {
        alignmentText.innerText = LN
    }
    if(e.target.value == 'lawful evil') {
        alignmentText.innerText = LE
    }
    if(e.target.value == 'neutral good') {
        alignmentText.innerText = NG
    }
    if(e.target.value == 'neutral') {
        alignmentText.innerText = N
    }
    if(e.target.value == 'neutral evil') {
        alignmentText.innerText = NE
    }
    if(e.target.value == 'chaotic good') {
        alignmentText.innerText = CG
    }
    if(e.target.value == 'chaotic neutral') {
        alignmentText.innerText = CN   
    }
    if(e.target.value == 'chaotic evil') {
        alignmentText.innerText = CE
    }
})

// Class Description
classes.addEventListener('change', (e) => {
    console.log(e.target.value)
    document.querySelector('.artificer').setAttribute('style', 'display: none')
    document.querySelector('.barbarian').setAttribute('style', 'display: none')
    document.querySelector('.bard').setAttribute('style', 'display: none')
    document.querySelector('.cleric').setAttribute('style', 'display: none')
    document.querySelector('.druid').setAttribute('style', 'display: none')
    document.querySelector('.fighter').setAttribute('style', 'display: none')
    document.querySelector('.monk').setAttribute('style', 'display: none')
    document.querySelector('.paladin').setAttribute('style', 'display: none')
    document.querySelector('.ranger').setAttribute('style', 'display: none')
    document.querySelector('.rogue').setAttribute('style', 'display: none')
    document.querySelector('.sorcerer').setAttribute('style', 'display: none')
    document.querySelector('.warlock').setAttribute('style', 'display: none')
    document.querySelector('.wizard').setAttribute('style', 'display: none')
    if(e.target.value === 'artificer') {
        document.querySelector('.artificer').setAttribute('style', 'display: block') 
        classImage.src = './img/Classes/Artificer.png'
    }
    if(e.target.value == 'barbarian') {
        document.querySelector('.barbarian').setAttribute('style', 'display: block') 
        classImage.src = './img/Classes/Barbarian.png'
    }
    if(e.target.value == 'bard') {
        document.querySelector('.bard').setAttribute('style', 'display: block')
        classImage.src = './img/Classes/Bard.png' 
    }
    if(e.target.value == 'cleric') {
        document.querySelector('.cleric').setAttribute('style', 'display: block') 
        classImage.src = './img/Classes/Cleric.png'
    }
    if(e.target.value == 'druid') {
        document.querySelector('.druid').setAttribute('style', 'display: block') 
        classImage.src = './img/Classes/Druid.png'
    }
    if(e.target.value == 'fighter') {
        document.querySelector('.fighter').setAttribute('style', 'display: block') 
        classImage.src = './img/Classes/Fighter.png'
    }
    if(e.target.value == 'monk') {
        document.querySelector('.monk').setAttribute('style', 'display: block') 
        classImage.src = './img/Classes/Monk.png'
    }
    if(e.target.value == 'paladin') {
        document.querySelector('.paladin').setAttribute('style', 'display: block') 
        classImage.src = './img/Classes/Paladin.png'
    }
    if(e.target.value == 'ranger') {
        document.querySelector('.ranger').setAttribute('style', 'display: block') 
        classImage.src = './img/Classes/Ranger.png'
    }
    if(e.target.value == 'rogue') {
        document.querySelector('.rogue').setAttribute('style', 'display: block') 
        classImage.src = './img/Classes/Rogue.png'
    }
    if(e.target.value == 'sorcerer') {
        document.querySelector('.sorcerer').setAttribute('style', 'display: block') 
        classImage.src = './img/Classes/Sorcerer.png'
    }
    if(e.target.value == 'warlock') {
        document.querySelector('.warlock').setAttribute('style', 'display: block') 
        classImage.src = './img/Classes/Warlock.png'
    }
    if(e.target.value == 'wizard') {
        document.querySelector('.wizard').setAttribute('style', 'display: block') 
        classImage.src = './img/Classes/Wizard.png'
    }
})

//  change images syntax
// {/* <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button> */}
// {/* <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button> */}