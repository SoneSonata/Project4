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
            const t2button = document.getElementById('t2');
            const t3button = document.getElementById('t3');
    
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
                    //console.log("compare",typepool,mymons1)
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
                        pokesprite1.classList.remove('hide');
                        pokesprite1.src = data.sprites.front_default;
                        pokesprite1.className = "firstsprite";
                        const firstpokecontainer = document.getElementById("poke1container");
                        firstpokecontainer.innerHTML = "";

                        firstpokecontainer.appendChild(pokesprite1);
                        firstpokecontainer.appendChild(start1name);

                        
                    });
                 });
            })

            t2button.addEventListener('click', (e) => {
                let type2n = ''; 
                type2n = Math.floor(Math.random() * ind.types);
                let ttext = document.querySelector('.type2');
                let randtype2 = "";
                randtype2 = myTypes[type2n];
                ttext.innerText = randtype2;
                let typesize = 0
                const pokebutton2 = document.getElementById("p2");
                let typepool = [];
                let filteredmon2;
                let mymons2 = [];
                
                fetch("https://pokeapi.co/api/v2/type/" + randtype2)
                .then(response => response.json()) 
                .then(data =>{
                    typesize = data.pokemon.length;
                    typepool = data.pokemon;
                    mymons2 = filltype(typepool);
                    //console.log("compare",typepool,mymons2)
                    filteredmon2 = filtermons(mymons2,ind.maxpkm);
                });
                

                
                pokebutton2.addEventListener('click', e=> {
                    let rp2 = Math.floor(Math.random() * typesize);
                    randpoke2 = typepool[rp2].pokemon.name;
                    fetch("https://pokeapi.co/api/v2/pokemon/" + randpoke2)
                    .then(response => response.json()) 
                    .then(data => {
                        console.log(data.order);
                        console.log(data.species.name);
                        let start2name = document.getElementById("poke2");
                        start2name.textContent = data.species.name;
                        let pokesprite2 = document.getElementById("pokepic2");
                        pokesprite2.classList.remove('hide');
                        pokesprite2.src = data.sprites.front_default;
                        pokesprite2.className = "secondsprite";
                        const secondpokecontainer = document.getElementById("poke2container");
                        secondpokecontainer.innerHTML = "";

                        secondpokecontainer.appendChild(pokesprite2);
                        secondpokecontainer.appendChild(start2name);

                        
                    });
                });
            })

            t3button.addEventListener('click', (e) => {
                let type3n = ''; 
                type3n = Math.floor(Math.random() * ind.types);
                let ttext = document.querySelector('.type3');
                let randtype3 = "";
                randtype3 = myTypes[type3n];
                ttext.innerText = randtype3;
                let typesize3 = 0
                const pokebutton3 = document.getElementById("p3");
                let typepool3 = [];
                let filteredmon3;
                let mymons3 = [];
                
                fetch("https://pokeapi.co/api/v2/type/" + randtype3)
                .then(response => response.json()) 
                .then(data =>{
                    typesize = data.pokemon.length;
                    typepool = data.pokemon;
                    mymons3 = filltype(typepool3);
                    //console.log("compare",typepool,mymons3)
                    filteredmon3 = filtermons(mymons3,ind.maxpkm);
                });
                
    
                
                pokebutton3.addEventListener('click', e=> {
                    let rp3 = Math.floor(Math.random() * typesize);
                    randpoke3 = typepool[rp3].pokemon.name;
                    fetch("https://pokeapi.co/api/v2/pokemon/" + randpoke3)
                    .then(response => response.json()) 
                    .then(data => {
                        console.log(data.order);
                        console.log(data.species.name);
                        let start3name = document.getElementById("poke3");
                        start3name.textContent = data.species.name;
                        let pokesprite3 = document.getElementById("pokepic3");
                        pokesprite3.classList.remove('hide');
                        pokesprite3.src = data.sprites.front_default;
                        pokesprite3.className = "thirdsprite";
                        const secondpokecontainer = document.getElementById("poke3container");
                        thirdpokecontainer.innerHTML = "";
    
                        thirdcontainer.appendChild(pokesprite3);
                        thirdpokecontainer.appendChild(start3name);
    
                        
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
