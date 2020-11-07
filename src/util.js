import {v4 as uuidv4} from 'uuid'

function chillHop(){
return
[{
name: "Butterfly",
artist: "Sleepy Fish",
cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-300x300.jpg",
id: uuidv4(),
active: false,
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
}]
}