function loadGamesData() {
    fetch('N64/game.json')
        .then(response => response.json())
        .then(data => renderGameCards(data))
        .catch(error => console.error('Error loading games data:', error));
}


function renderGameCards(games) {
    const gameCardsContainer = document.getElementById('gameCards');
    gameCardsContainer.innerHTML = ''; 

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        const iconPath = `N64/${game.icon}`;
        const targetUrl = `N64/?rom=${encodeURIComponent(game.url)}`;

        gameCard.innerHTML = `
            <div class="card">
                <img src="${iconPath}" class="card-img-top" alt="${game.name}">
                <div class="card-body">
                    <h5 class="card-title">${game.name}</h5>
                    <p class="card-text" onclick="toggleDescription(this)">
                        ${game.description}
                    </p>
                    <a href="${targetUrl}" target="_blank" class="btn">开始游戏</a>
                </div>
            </div>
        `;
        gameCardsContainer.appendChild(gameCard);
    });
}

function toggleDescription(element) {
    element.classList.toggle('expanded');
}

window.onload = function() {
    loadGamesData();
};
