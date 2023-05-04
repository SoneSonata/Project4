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
                console.log("Hello",ind);
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
                ttext.innerText = myTypes[type1n];
    
            });
        }).catch(err => {
            console.error('oops', err.message);
        });
    });

    console.log(ind);
    fetch("https://pokeapi.co/api/v2/type")
    .then(response => response.json()) 
    .then(data => {
        let myTypes = [];
        data.results.forEach(item => {
            myTypes.push(item.name);
        });
        const t1button = document.getElementById('t1');

        t1button.addEventListener('click', (e) => {

        let type1n = Math.floor(Math.random() * arc.types);
        let ttext = document.querySelector('.type1');
        ttext.innerText = myTypes[type1n];

    });
    }).catch(err => {
        console.error('oops', err.message);
    });


    
    
}
