alert('Bom dia Calabreso');
let numeroSecreto = 1000;
let tentativa = prompt('A sua estagiária é nota?');

if (numeroSecreto == tentativa) {
    alert('Ainda bem que você sabe');
} else {
    while (tentativa != numeroSecreto) {
        if (tentativa > numeroSecreto) {
            alert(`Calma lá, nem tanto também`);
            tentativa = prompt('A sua estagiária é nota?');
        } else {
            alert(`Eu sou 10 vezes 100 `)
            tentativa = prompt('A sua estagiária é nota?');
        }
    }
}