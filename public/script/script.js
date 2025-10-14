
document.addEventListener("DOMContentLoaded", () => {
    updatePosts();
})

function updatePosts(){
    const url = "http://192.168.64.1:3000/api/all";

    fetch(url).then(res => {
        return res.json();
    }).then(json => {
        let postElements = "";

        // Convertendo de string para formato JSON
        let posts = JSON.parse(json);
        posts.forEach(post => {
            let postElement = 
            `<div class="card mb-4" id="${post.id}">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
                <div class="card-body">
                    <div class="card-text">${post.description}</div>
                </div>
            </div>`;
            postElements += postElement;
        });

        document.getElementById("posts").innerHTML = postElements;
    })
}

function newPost(){
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#desc").value;
    
    let post = {title, description};
    
    const url = "http://192.168.64.1:3000/api/new";
    const options = {
        method: "POST",
        headers: new Headers({
            "content-type": "application/json"
        }),
        body: JSON.stringify(post)
    };

    fetch(url, options).then(res => {
        console.log(res);
        updatePosts();
        document.querySelector("#title").value = "";
        document.querySelector("#desc").value = "";
    })

}