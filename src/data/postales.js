const postales = [
    { img: 'postal1.jpeg' },
    { img: 'postal2.jpeg' },
    { img: 'postal.3png' },
    { img: 'reverso.png', caption: 'Reverso de las postales' },
]

let id=1;
for (let postal of postales) {
    postal.id = id++;
}

export default postales;
