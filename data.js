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
        active.innerHTML=data.total.active.toLocaleString();
        total.innerHTML=data.total.cases.toLocaleString();
        discharged.innerHTML=data.total.recovered.toLocaleString();
        death.innerHTML=data.total.deaths.toLocaleString();
    }
    getdatacovid();    

    /*Global data*/
    const apiurl2="https://disease.sh/v3/covid-19/all";
    const activeglobal=document.getElementById('act-glo');
    const totalglobal=document.getElementById('tot-glo');
    const dischargedglobal=document.getElementById('dis-glo');
    const deathglobal=document.getElementById('det-glo');

    async function globalcoviddata(){
        const responseglobal=await fetch(apiurl2);
        let dataglobal=await responseglobal.json();
        console.log(dataglobal);
        activeglobal.innerHTML=dataglobal.active.toLocaleString();
        totalglobal.innerHTML=dataglobal.cases.toLocaleString();
        dischargedglobal.innerHTML=dataglobal.recovered.toLocaleString();
        deathglobal.innerHTML=dataglobal.deaths.toLocaleString();
    }
    globalcoviddata();
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
                active.innerHTML=data.total.active.toLocaleString();
                total.innerHTML=data.total.cases.toLocaleString();
                discharged.innerHTML=data.total.recovered.toLocaleString();
                death.innerHTML=data.total.deaths.toLocaleString();
            }
            getdatacovid(); 
        }
        else if(countryinputted=='')
        {
            error.innerHTML=`No country entered!`;
            active.innerHTML=data.total.active.toLocaleString();
            total.innerHTML=data.total.cases.toLocaleString();
            discharged.innerHTML=data.total.recovered.toLocaleString();
            death.innerHTML=data.total.deaths.toLocaleString();
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