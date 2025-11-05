// 异步加载JSON文件
function loadGamesData() {
    fetch('N64/game.json')
        .then(response => response.json())
        .then(data => renderGameCards(data))
        .catch(error => console.error('Error loading games data:', error));
}

// 渲染所有游戏卡片
function renderGameCards(games) {
    const gameCardsContainer = document.getElementById('gameCards');
    gameCardsContainer.innerHTML = ''; // 清空容器

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        // 自动加上 N64 文件夹前缀
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

// 切换描述文字的展开和收起
function toggleDescription(element) {
    element.classList.toggle('expanded');
}

// 初始化页面
window.onload = function() {
    loadGamesData();
};
