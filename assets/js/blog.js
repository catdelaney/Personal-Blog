document.addEventListener('DOMContentLoaded', function() {
    const posts = getPosts();
    const postsContainer = document.getElementById('posts');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><em>by ${post.username}</em></p>`;
        postsContainer.appendChild(postElement);
    });

    document.getElementById('toggleMode').addEventListener('click', toggleDarkMode);
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    initializeDarkMode();
});
