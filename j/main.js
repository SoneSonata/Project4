document.addEventListener('DOMContentLoaded', init);

function init() {
    let gen = document.getElementById("gen");
    var arc = {};
    var ind = {};

    fetch("games.json")
    .then(response => response.json()) 
    .then(data => {
        arc = data;
        let generations = [];
        let generation = {};
        data.forEach(generation => {
            let gen = document.getElementById("gen");
            const option = document.createElement('OPTION');
            option.value = generation.code;
            option.innerText = generation.name;
            gen.append(option);
        });
    });

    gen.addEventListener('change', (e) => {
        console.log(gen.value);
        console.log(arc);
        const code = e.target.value;
        let dd = document.getElementById("gen");
        arc.forEach(gen => {
            if(gen.code === code){
                ind = gen;
            }

        });

        fetch("https://pokeapi.co/api/v2/type")
        .then(response => response.json()) 
        .then(data => {
            let myTypes = [];
            data.results.forEach(item => {
                myTypes.push(item.name);
            });
            const t1button = document.getElementById('t1');
    
            t1button.addEventListener('click', (e) => {
    
                let type1n = Math.floor(Math.random() * ind.types);
                let ttext = document.querySelector('.type1');
                let randtype1 = myTypes[type1n];
                ttext.innerText = randtype1;
                let typesize = 0
                const pokebutton1 = document.getElementById("p1");
                
                fetch("https://pokeapi.co/api/v2/type/" + randtype1)
                .then(response => response.json()) 
                .then(data =>{
                    console.log(data.pokemon);
                    typesize = data.pokemon.length;
                    console.log(typesize);
                
                });
                

                
                pokebutton1.addEventListener('click', e=> {
                    let rp1 = Math.floor(Math.random() * ind.maxpkm + 1);
                    typecheck(rp1,nametype,ind.maxpkm);
                    fetch("https://pokeapi.co/api/v2/pokemon/" + rp1)
                    .then(response => response.json()) 
                    .then(data => {
                        let poketypes = [];
                        data.types.forEach(type => {
                            poketypes.push(type.type.name);
                        });
                        console.log(randtype1);
                        console.log(poketypes);
                        console.log(data);
                        console.log(data.species.name);
                        let start1name = document.getElementById("poke1");
                        start1name.textContent = data.species.name;
                        let pokesprite1 = document.getElementById("pokepic1");
                        pokesprite1.src = data.sprites.front_default;
                        pokesprite1.className = "firstsprite";
                        const firstpokecontainer = document.getElementById("poke1container");
                        firstpokecontainer.innerHTML = "";

                        firstpokecontainer.appendChild(pokesprite1);
                        firstpokecontainer.appendChild(start1name);

                        
                    });
                    console.log(ind.maxpkm,rp1);
                    
                 });
                
    
            });
        }).catch(err => {
            console.error('oops', err.message);
        });

    });


    
    
}

function generaterandpoke (max, type) {
    let rp1 = Math.floor(Math.random() * max);
    fetch("https://pokeapi.co/api/v2/pokemon/" + rp1)
        .then(response => response.json()) 
        .then(data => {
            
        })
}

// function typecheck (dex,randtype, max) {
//     fetch("https://pokeapi.co/api/v2/pokemon/" + dex)
//         .then(response => response.json()) 
//         .then(data => {
//             let poketypes = [];
//             data.types.forEach(item => {
//                 //poketypes.push(item.type.name);
//                 if (item.type.name == randtype ){
//                     return true;
//                 }
//                 else{
//                     generaterandpoke(max)                }
//             });
// }
