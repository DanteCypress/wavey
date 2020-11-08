import {v4 as uuidv4} from 'uuid'

function chillHop(){
return(
[
    {
name: "Butterfly",
artist: "Sleepy Fish",
cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-300x300.jpg",
id: uuidv4(),
active: true,
color: ['#1d5d7d','#a1c0c3'],
audio: 'https://mp3.chillhop.com/serve.php/?mp3=10021'

}
,{
    name: "Day and Night",
    artist: "Aiguille",
    cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-300x300.jpg",
    id: uuidv4(),
    active: false,
    color: ['#62558d','#ffc6b5'],
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9278"
},
,{
    name: "Calm",
    artist: "ØDYSSEE, Florent Garcia",
    cover: "https://chillhop.com/wp-content/uploads/2020/06/d9d8ae69141cb7838e3c53bbf393c6218285e384-300x300.jpg",
    id: uuidv4(),
    active: false,
    color: ['#4459ced','#ffc9bd'],
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9285"
},
,{
    name: "Wistfulness",
    artist: "xander., WEI",
    cover: "https://chillhop.com/wp-content/uploads/2020/07/7c34f98dc16fd387b1d9c89618eaef13201f307e-300x300.jpg",
    id: uuidv4(),
    active: false,
    color: ['#92533a','#d19d6b'],
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9337"
},
]
)}

export default chillHop