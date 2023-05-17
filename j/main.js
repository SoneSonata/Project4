document.addEventListener('DOMContentLoaded', init);

function init() {
    let gen = document.getElementById("gen");
    var arc = {};
    var ind = {};

    fetch("games.json")
    .then(response => response.json()) 
    .then(data => {
        arc = data;
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
                let type1n = ''; 
                type1n = Math.floor(Math.random() * ind.types);
                let ttext = document.querySelector('.type1');
                let randtype1 = "";
                randtype1 = myTypes[type1n];
                ttext.innerText = randtype1;
                let typesize = 0
                const pokebutton1 = document.getElementById("p1");
                let typepool = [];
                let filteredmon1;
                let mymons1 = [];
                
                fetch("https://pokeapi.co/api/v2/type/" + randtype1)
                .then(response => response.json()) 
                .then(data =>{
                    typesize = data.pokemon.length;
                    typepool = data.pokemon;
                    mymons1 = filltype(typepool);
                    console.log("compare",typepool,mymons1)
                    filteredmon1 = filtermons(mymons1,ind.maxpkm);
                });
                

                
                pokebutton1.addEventListener('click', e=> {
                    let rp1 = Math.floor(Math.random() * typesize);
                    randpoke1 = typepool[rp1].pokemon.name;
                    fetch("https://pokeapi.co/api/v2/pokemon/" + randpoke1)
                    .then(response => response.json()) 
                    .then(data => {
                        console.log(data.order);
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
                 });
                
    
            });
        }).catch(err => {
            console.error('oops', err.message);
        });

    });


    
    
}


function filltype (mons,max){
    let typemons = [];
    let tr = {};
    mons.forEach(mon => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + mon.pokemon.name)
        .then(response => response.json()) 
        .then(data => {
            typemons.push(data);
        });
    });
    return typemons;
}

function filtermons (mons,max){
    let genlist = [];
    let i;
    console.log("mon", mons);
    mons.forEach(item => {
        let place = {};
        place = item;
        if(place.id <= max){
            genlist.push(place);
        }
    });
    // for(i = 0; i < mons.length; i++)
    // {
    //     console.log(mons[i].id)
    //     if(mons[i].id <= max){
    //         filt = mons[i];
    //         genlist.push(filt);
    //     }
    // }
    console.log(genlist);
    return genlist;
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
