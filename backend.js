class Backend {
    getRandomPokemon = async () => {
        const responce = await fetch('https://reactmarathon-api.netlify.app/api/pokemons?random=true');
        const data = await responce.json();
        return data;
    }

    getDamage = async (player1, player2, attack) => {
        const responce = await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${player1}&attackId=${attack}&player2id=${player2}`);
        const data = await responce.json();
        return data;
    }
}

export default Backend;