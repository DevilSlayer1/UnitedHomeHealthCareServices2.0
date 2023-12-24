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



    /*Other country*/
    const pop=document.getElementById("populate-country");
    const Go=document.querySelector('.country-btn-submit');
    Go.addEventListener('click',()=>{
        const country=document.getElementById('country-input');
        let countryinputted=country.value;
        console.log(countryinputted);
        if(countryinputted=='India' || countryinputted=='india')
        {
            pop.innerHTML="India";
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
        }
        else{
            
            pop.innerHTML=countryinputted;
            const apiurl=`https://disease.sh/v3/covid-19/countries/${countryinputted}`;
            const active=document.getElementById('act');
            const total=document.getElementById('tot');
            const discharged=document.getElementById('dis');
            const death=document.getElementById('det');
            async function getotherdatacovid()
            {
                const response =await fetch(apiurl);
                let data = await response.json();
                console.log(data);
                active.innerHTML=data.active;
                total.innerHTML=data.cases;
                discharged.innerHTML=data.recovered;
                death.innerHTML=data.deaths
            }
            getotherdatacovid();
        }
          
    })
})