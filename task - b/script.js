// Countries Name which population less than 2 lakhs....

fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(data => asiaContinent(data))

const asiaContinent = (data) => {
    data.filter((ele)=>{
        if(ele.population  < 200000){
            console.log(ele.name)
        }
    })
}
