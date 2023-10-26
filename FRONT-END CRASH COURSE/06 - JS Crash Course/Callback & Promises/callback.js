const posts = [
    {title: 'Post One', body: 'This is the post one.'},
    {title: 'Post Two', body: 'This is the post two.'}
];

function getPosts (){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

/* function createPost(post){
    setTimeout(() => {
        posts.push(post);
    }, 2000);
} */
//This  cannot be shown in the html because getPosts happend in 1 sec but ceratePost happend in 2 secs

function createPost(post,callback){ //function take callback asa parameter and used after the post function and when we create the the post we just give get post as a parameter
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: 'Post Three', body: 'This is post three.'}, getPosts);
 