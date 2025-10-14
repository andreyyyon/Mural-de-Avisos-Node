module.exports = {
    posts: [
        {
            id: "001",
            title: "Teste do mural",
            description: "Descrição teste."
        },
        {
            id: "002",
            title: "Teste do mural 2",
            description: "Descrição teste 2."
        } 
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id: generateID(), title, description});
    },

    deletePost(id){
        this.posts = this.posts.filter(post => post.id != id)
    }
}

function generateID(){
    return Math.random().toString(36).substring(2, 9);
}