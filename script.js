// const url = 'http://localhost:3001'

// //READ ALL POSTS
// //READ ALL POSTS
// async function showAllPosts(){
// const response =  await fetch(url+'/todos')
// const posts = await response.json()
// const ul = document.querySelector('ul')
// posts.map((todo)=>{
//  //post.id
//  //post.title
//  //post.body
//  const li = document.createElement('li')
 
//  // CREATE A DELETE BUTTON
//  const deleteButton = document.createElement('button');
//  deleteButton.onclick = async function(){
//         await fetch(url+'/todos/'+todo.id,{
//             method:'DELETE'
//         })
//     }
//     deleteButton.appendChild(document.createTextNode('DELETE'))
//     li.appendChild(document.createTextNode(todo.body))
//     li.appendChild(deleteButton)
//     ul.appendChild(li)


// const updateButton = document.createElement('button');
// updateButton.onclick = async function(){
//     const body = document.querySelector('#body').value
//        await fetch(url+'/todos/'+todo.id,{
//            method:'PUT', 
//            body
           
//        })
//    }
//    deleteButton.appendChild(document.createTextNode('UPDATE'))
//    li.appendChild(document.createTextNode(todo.body))
//    li.appendChild(deleteButton)
//    ul.appendChild(li)
//  })
// }

// // CREATE A POST
// async function createAPost(){
    
//     const body = document.querySelector('#body').value
//     const response = await fetch(url+'/todos',{
//         method:'POST',
//         body:JSON.stringify({
//             body
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     })
//     const post = await response.json()

    
// }
// showAllPosts()