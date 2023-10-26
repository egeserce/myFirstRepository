const posts = [
    { title: 'Post One', body: 'This is the post one.' },
    { title: 'Post Two', body: 'This is the post two.' }
];

function getPosts() {
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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;
            if(!error){
                resolve(); //if there is no error it waits the post pushing THEN resolve mening .then(getPosts)
            }else{
                reject('Error: Something wnet wrong!');
            }
        }, 2000);
    })
}

createPost({ title: 'Post Three', body: 'This is post three.' }).then(getPosts)
.catch(err => console.log(err)); //catches the rejected one to give error



