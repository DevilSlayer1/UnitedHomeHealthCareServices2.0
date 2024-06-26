
document.addEventListener('DOMContentLoaded', () => {
    //const apiKey = "a43095fc9fbb40e791dc3b251a4d3449";
    const apiUrl = `news.json`;
    
    async function getNewsArticle(a,b) {
        try {
            const addnews = document.querySelector('.news-section');
            let response = await fetch(apiUrl);
    
            if (response.status === 200) {
                let data = await response.json();
    
                if (data.status === "ok" && data.articles.length > 0) {
                    //console.log(data.articles.length);

                    //const data = JSON.parse(jsonData);

                    // Sort the articles by the "publishedAt" date in ascending order
                    data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));


                    // Convert the sorted data back to JSON
                    const sortedJsonData = JSON.stringify(data, null, 2);
                    
                    //console.log(sortedJsonData);
                    for (let i = a; i < b; i++) {
                        if(data.articles[i].urlToImage!=null)
                        {
                            let newnews = `
                            <article class="news-card">
                                <img id="img${i}" src="${data.articles[i].urlToImage}" alt="Health News Image">
                                <div class="news-content" >
                                    <h2 id="article-header${i}">${data.articles[i].title}</h2>
                                    <p class="article-meta">Published on <span id="date${i}">${data.articles[i].publishedAt}</span> | By: <span id="author${i}">${data.articles[i].author}</span></p>
                                    <p id="article-summary${i}" class="article-summary">${data.articles[i].description}</p>
                                    <a id="read-more${i}" href="${data.articles[i].url}" class="read-more-link">Read More</a>
                                </div>
                            </article>`;
                        addnews.insertAdjacentHTML('beforeend', newnews);
                        }
                        
                    }
                    let articleArray=document.querySelectorAll('.news-card');
                        console.log(articleArray)
                    articleArray.forEach(element => {
                        element.classList.add('vertical-bottom')
                    });
                } else {
                    console.error("News API request failed or no articles found.");
                }
                
            } else {
                console.error(`Error: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error("Error fetching news data:", error);
        }
    }
    
    getNewsArticle(0,16);
    const reload=document.getElementsByClassName('btn')[2];
    const end=document.getElementById('end-of-news');
    let c=13;
    reload.addEventListener('click',()=>{
       try{
        getNewsArticle(c,c+13);
        c=c+13;
        console.log(c);
        if(c>156)
        {
            end.innerHTML='Looks like you have reached the end.'
            reload.style.display='none'; // Enable the button

        }
       }
       catch(error){
        
        
       }
    });
});

