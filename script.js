const Key = "https://fakestoreapi.com/users"
const Name = "popular"
const contaBox = document.querySelector(".contaBox")
const input = document.querySelector("input")
const closeX = document.querySelector(".contaModal span")
const contaModal = document.querySelector(".contaModal")
const myLocalData = JSON.parse(localStorage.getItem("data"))
console.log(closeX);

fetch("https://fakestoreapi.com/users")
.then(response=>response.json())
.then(data=>{
    console.log(data.results);



const getData = (handleData) => {
    contaBox.innerHTML = "";
    handleData.forEach(data => {
        contaBox.innerHTML += `
        <div class="box">
             <div class="imgBox">
                <img src="default-avatar-icon-of-social-media-user-vector.jpg" alt="photo">
            </div>
            <div class="name">NAME: ${data.name.firstname} ${data.name.lastname}</div>
            <div class="username">USERNAME: ${data.username}</div>
            <div class="email">EMAIL: ${data.email}</div>
            <div class="password">PASSWORD: ${data.password}</div>
            <div class="phone">PHONE: ${data.phone}</div>
            <div class="adress">CITY: ${data.address.city}</div>
        </div> 
        `
    })

}

getData(data)

input.addEventListener("input", (e) => {
    const filterData = data.filter((item) => {
        return item.username.toLowerCase().includes(e.target.value)
    })
    getData(filterData)

})

contaBox.addEventListener("click", (e) => {
    contaModal.style.display = "flex";
})

closeX.addEventListener("click", (e) => {
    contaModal.style.display = "none"
})

const allBox = document.querySelectorAll(".imgBox")
console.log(allBox);
allBox.forEach(data => {
    data.results.forEach(item => {
        if (item.id === handleId) {
            localStorage.setItem("data", JSON.stringify(item))
        }
    });
    
});

console.log(myLocalData);
if (detailsSection1) {
    detailsSection1.innerHTML = `
        <div class="info">
            <h1 class="usernamenameDetails">${myLocalData.username}</h1>
            <h3 class="passwordDetails">${myLocalData.password}</h3>
            <p class="infoDetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere vel quisquam quo
                numquam cumque repellendus velit dolore sunt rerum voluptatem?</p>
        </div>
`
}
})

