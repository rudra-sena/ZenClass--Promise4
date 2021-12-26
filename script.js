document.getElementById('btn').addEventListener('click',()=>{

    fetch('https://restcountries.com/v3.1/all')
.then((response)=>{
    return response.json();
})
.then(result => {

    console.log(result);
    var result1=result.filter(result => result.continents[0]==='Antarctica');
    var list=document.getElementById('countryList');
    result1.forEach((country) => {
        list.innerHTML+="<li><a href="+country.flags.png+">"+country.name.official+"</a></li>"
        console.log(country.flags);

    })
})
.catch((error) => {
    console.error(error);
})

})

