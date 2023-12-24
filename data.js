document.addEventListener('DOMContentLoaded',()=>{
    const apiurl="https://disease.sh/v3/covid-19/gov/India";
    const active=document.getElementById('act');
    const total=document.getElementById('tot');
    const discharged=document.getElementById('dis');
    const death=document.getElementById('det');
    async function getdatacovid()
    {
        error.innerHTML=``;
        const response =await fetch(apiurl);
        let data = await response.json();
        console.log(data);
        active.innerHTML=data.total.todayActive.toLocaleString();
        total.innerHTML=data.total.cases.toLocaleString();
        discharged.innerHTML=data.total.recovered.toLocaleString();
        death.innerHTML=data.total.deaths.toLocaleString();
    }
    getdatacovid();    



    /*Other country*/
    const pop=document.getElementById("populate-country");
    const Go=document.querySelector('.country-btn');
    Go.addEventListener('click',()=>{
        const country=document.getElementById('country-input');
        let countryinputted=country.value;
        console.log(countryinputted);
        if(countryinputted=='India' || countryinputted=='india')
        {
            error.innerHTML=``;
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
                active.innerHTML=data.total.todayActive.toLocaleString();
                total.innerHTML=data.total.cases.toLocaleString();
                discharged.innerHTML=data.total.recovered.toLocaleString();
                death.innerHTML=data.total.deaths.toLocaleString();
            }
            getdatacovid(); 
        }
        else
        {
                pop.innerHTML=countryinputted;
                const apiurl=`https://disease.sh/v3/covid-19/countries/${countryinputted}`;
                const active=document.getElementById('act');
                const total=document.getElementById('tot');
                const discharged=document.getElementById('dis');
                const death=document.getElementById('det');
                const error=document.getElementById('error');
                async function getotherdatacovid()
                {
                    const response =await fetch(apiurl);
                    let data = await response.json();
                    console.log(data);
                    if(response.ok)
                    {
                        error.innerHTML=``;
                        active.innerHTML=data.active.toLocaleString();
                        total.innerHTML=data.cases.toLocaleString();
                        discharged.innerHTML=data.recovered.toLocaleString();
                        death.innerHTML=data.deaths.toLocaleString();
                        
                    }
                    else{
                        error.innerHTML=`No country named "${countryinputted}" !`;
                        active.innerHTML="N/A";
                        total.innerHTML="N/A";
                        discharged.innerHTML="N/A";
                        death.innerHTML="N/A";
                    }
                    
                }
                getotherdatacovid();
        }
          
    });
});