function savePost(username, title, content) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push({ username, title, content });
    localStorage.setItem('posts', JSON.stringify(posts));
}

function getPosts() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function initializeDarkMode() {
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
    }
}

document.getElementById('toggleMode').addEventListener('click', toggleDarkMode);
