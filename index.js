
// VARIABLES
const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"]
const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"]
const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"]
const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"]

const hombre = document.querySelectorAll('body > div > main > p:nth-child(3) > a')[0];
const mujer = document.querySelectorAll('body > div > main > p:nth-child(4) > a')[0];

//FUNCIONES
function random(array){
  let numero2 = Math.floor(Math.random() * array.length)
    return numero2
}

//MAIN/EJECUCIÓN
hombre.addEventListener('click', function(masculino){
  let final = random(titulos_masculino);
  let final2 = random(adjetivos);
  let final3 = random(sustantivos);
  let name = titulos_masculino[final]+" "+ adjetivos[final2]+" "+ sustantivos[final3]
  document.querySelectorAll('body > div > main > p:nth-child(5) > a')[0].innerHTML = name
})

mujer.addEventListener('click', function(femenino){
  let final = random(titulos_femenino);
  let final2 = random(adjetivos);
  let final3 = random(sustantivos);
  let name = titulos_femenino[final]+" "+ adjetivos[final2]+" "+ sustantivos[final3]
document.querySelectorAll('body > div > main > p:nth-child(5) > a')[0].innerHTML = name
})
