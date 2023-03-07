// Countries which use US dollar as currency...

fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(data => asiaContinent(data))

const asiaContinent = (data) => {
    data.filter((ele)=>{ 
        if(ele.currencies){
            console.log(ele.currencies[0].code == "USD" ? ele.name : null)
        }
    })
}
