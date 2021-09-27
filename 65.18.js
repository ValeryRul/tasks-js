/* Написать функцию-конструктор для объекта Post. Функция должна принимать заголовок поста, его содержимое, количество просмотров,
объект комментарий c полями: автор и текст комментария, булевское значение, говорящее существует пост или нет */


function Post (title, body, author, views, comments, isAlive){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments;
    this.isAlive = isAlive;
}

let post = new Post('JavaScript', 'About JS', 'Valera', 100500, [{author: 'Dima', body: 'blabla'}], true );

console.log(blog);