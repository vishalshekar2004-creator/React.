fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
.then((res)=>res.json())
.then((d)=>{
    let body = document.body
    let section = document.createElement("sectiomn")
    d.map((value,index)=>{
        section.innerHTML +=
        `<div class="card">
        <img src="${value.image_link}" alt="" height="200px" width="200px">
        <div class="title">${value.title}</div>
        <div class="price">${value.price}</div>
    </div>`
    })
    body.appendChild(section)
})