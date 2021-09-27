function Blog(title, body, author, views, comments, isAlive){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments;
    this.isAlive = isAlive;
}

let blog = new Blog('JavaScript', 'About JS', 'Valera', 100500, [{author: 'Dima', body: 'blabla'}], true );

console.log(blog);