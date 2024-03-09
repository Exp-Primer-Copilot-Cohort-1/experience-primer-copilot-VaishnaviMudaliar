// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments

const express = require('express');
const app = express();
app.use(express.json());

const comments = [
    { id: 1, username: 'alice', comment: 'I love this article' },
    { id: 2, username: 'bob', comment: 'This article is the worst' }
];

app.get('/comments', (req, res) => {
    res.json(comments);
}
);

app.post('/comments', (req, res) => {
    const comment = req.body;
    comment.id = comments.length + 1;
    comments.push(comment);
    res.json(comment);
}
);

app.listen(3000, () => {
    console.log('Server started');
}
);

