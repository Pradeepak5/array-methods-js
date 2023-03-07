// Asian Countries Name....

fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(data => asiaContinent(data))

const asiaContinent = (data) => {
    data.filter((ele)=>{
        if(ele.region  == "Asia"){
            console.log(ele.name)
        }
    })
}
