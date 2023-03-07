// name, capital, flag using forEach function

fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(data => asiaContinent(data))

const asiaContinent = (data) => {
    data.forEach((ele)=>{
        console.log(`country ${ele.name}, capital ${ele.capital}, flag ${ele.flag}`)
    })
}
