document.addEventListener('DOMContentLoaded',()=>{
    const home = document.getElementById('home');
    const prevent=document.getElementById('prevent');
    const symptoms=document.getElementById('symptoms');
    const precaution=document.getElementById('precaution');
    const data=document.getElementById('data');
    const contact=document.getElementById('contact');
    const news=document.getElementById('news');

    const gohome=document.querySelector('.navigation-bar');
    home.addEventListener('click',()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    const goprevent=document.querySelector('.prevention-section');
    prevent.addEventListener('click',()=>{
        goprevent.scrollIntoView({ behavior: 'smooth' });
    });
    const gosymptoms=document.querySelector('.symptoms');
    symptoms.addEventListener('click',()=>{
        gosymptoms.scrollIntoView({ behavior: 'smooth' });
    });
    const goprecaution=document.querySelector('.prevent');
    precaution.addEventListener('click',()=>{
        goprecaution.scrollIntoView({ behavior: 'smooth' });
    });
    const gocontact=document.querySelector('.consult-doctor');
    contact.addEventListener('click',()=>{
        gocontact.scrollIntoView({ behavior: 'smooth' });
    });
    const godata=document.querySelector('.covid-data');
    data.addEventListener('click',()=>{
        godata.scrollIntoView({ behavior: 'smooth' });
    });
    const gonews=document.querySelector('.covid-news');
    news.addEventListener('click',()=>{
        gonews.scrollIntoView({behavior: 'smooth'});
    });
/*background-color: rgb(81, 187, 164);
    color: white;
    border-radius: 5px;*/
    // Attach the handleScroll function to the scroll even




    /*Navbar hide and show*/
    const navicon=document.querySelector('.nav-icon');
    const navcross=document.querySelector('.nav-cross');
    const ul=document.getElementById('ul');
    navicon.addEventListener('click',()=>{
        ul.style.right='0px';
    });
    navcross.addEventListener('click',()=>{
        ul.style.right='-200px';
    })
    

})