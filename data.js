document.addEventListener('DOMContentLoaded',()=>{
    const apiurl="https://disease.sh/v3/covid-19/gov/India";
    const active=document.getElementById('act');
    const total=document.getElementById('tot');
    const discharged=document.getElementById('dis');
    const death=document.getElementById('det');
    async function getdatacovid()
    {
        const response =await fetch(apiurl);
        let data = await response.json();
        console.log(data);
        active.innerHTML=data.total.todayActive;
        total.innerHTML=data.total.cases;
        discharged.innerHTML=data.total.recovered;
        death.innerHTML=data.total.deaths
    }
getdatacovid();    
})