document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (username && title && content) {
        savePost(username, title, content);
        window.location.href = 'blog.html';
    } else {
        document.getElementById('message').innerText = 'Please complete all fields.';
    }
});

initializeDarkMode();
