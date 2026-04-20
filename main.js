// 万能版：主页 + Quiz + 游戏页 暗黑模式全局同步
// 自动识别所有暗黑按钮，不冲突、不报错
document.addEventListener('DOMContentLoaded', function () {

    // 自动寻找页面上的暗黑模式按钮（兼容所有页面）
    const darkModeToggle = 
        document.querySelector('.dark-mode-toggle') || 
        document.getElementById('darkModeToggle') ||
        document.querySelector('#darkModeToggle') ||
        document.querySelector('[data-theme="dark"]');

    // 初始化保存的主题
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        if (darkModeToggle) darkModeToggle.textContent = '🌙';
    }

    // 绑定点击事件（所有页面都能用）
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.textContent = '☀️';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.textContent = '🌙';
            }
        });
    }

    // ========== 返回主页（游戏页专用） ==========
    const backBtn = document.getElementById('backToHome');
    if (backBtn) {
        backBtn.onclick = function () {
            window.location.href = 'index.html';
        };
    }

});