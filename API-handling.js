// Fetch all posts

async function getAllPosts() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log('Data',data);
    }catch(err){
        console.error("error fetching Posts :",err);
    }
}

getAllPosts();

// // Fetch a single post

async function getPost(id) {
    try{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    console.log("Single post",data);
    }catch(err){
        console.error('error fetching Posts :',err);
    }
}
getPost(1);

// Create a new post

async function createPost(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json; charset=UTF-8',
            },
            body:JSON.stringify({
                title : 'MY new Post',
                body: 'This is the content of the new Post',
                userId : 1,
            }),
        });
        const data = await res.json();
        console.log('Created Post :',data);
    }catch(err){
        console.error('Error creating Post :',err);
    }
}

createPost();

// Update a post

async function updatePost(id) {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method : 'PUT',
            headers:{
                'Content-Type' : 'application/json;  charset=UTF-8',
            },
            body : JSON.stringify({
                id : id,
                title : 'Updated Title',
                body : 'This Post has been Updated!',
                userId : 1,
            }),
        })
        const data = await  res.json();
        console.log('Updated Post', data);
    } catch(err){
        console.error('Error updating Post',err);
    }
}

updatePost(1);

async function deletePost(id) {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method : 'DELETE',
        });
        if(res.ok){
            console.log(`Post ${id} delete Successfully`);
        } else{
            console.log("Failed to delete Post");
        }
    }catch(err){
        console.error('Error deleting Post',err);
    }
}
deletePost(1);