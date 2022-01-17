/*Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente. */


const icons=[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generateColor()
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generateColor()
	}
];


const container = document.getElementById('containerIcons');
const filter = document.getElementById('icons-select');

createIconsContainer(filter.value);

filter.addEventListener('change', function(){
	container.innerHTML = "";
	createIconsContainer(this.value);
	console.log(this.value)
});


		

function createIconsContainer(filter){
	console.log('wwwwwwwwww');
	icons.forEach((element) => {
		console.log('wwwwwwwwww')
		if((element.type == filter) || (filter == "all")){
			container.innerHTML += createIconContainer(element);
			console.log('ghj')
		}
    })
};

function createIconContainer (icon){
	const{family, prefix, color, name}=icon;
		return`
		<div class="box">
			<i class="${family} ${prefix}${name}" style="color: ${color};"></i>
			<div class="title">${name}</div>
		</div>`
};

function generateColor(){	
	console.log('generateColor')
    // pick highest possible number -> 0xFFFFFF = 16777215 = 16mb-1 = 2^24-1
	var color = '#'+Math.floor(Math.random()*0xffffff).toString(16);
	console.log(color);
	return color;
};

function generateRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min +1)) + min;
};





/*function generateColor(){
	const symbols = '0123456789ABCDEF';
	let color ="#";
	for(let i=0; i<6; i++){
		const posizione = generateRandomN

	}
} */
