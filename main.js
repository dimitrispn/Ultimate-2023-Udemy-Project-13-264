const randomName = Math.ceil(Math.random()*88)
$.get(`https://akabab.github.io/starwars-api/api/id/${randomName}.json`, function (data) {
    
    console.log(data["name"])
    console.log(data["image"])
})
