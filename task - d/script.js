fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(data => asiaContinent(data))

const asiaContinent = (data) => {
    let initial = 0;
    const result = data.forEach((ele)=>{
        initial = initial+ele.population;
    })
    console.log(initial);
}
