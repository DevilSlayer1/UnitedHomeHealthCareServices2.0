
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
                            let newnews = `<article class="news-card" >
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

/*function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
document.addEventListener('DOMContentLoaded', () => {
    //const apiKey = "a43095fc9fbb40e791dc3b251a4d3449";
    const apiUrl = `news.json`;
    
    async function getNewsArticle() {
        try {
            const addnews = document.querySelector('.news-section');
            let response = await fetch(apiUrl);
    
            if (response.status === 200) {
                let data = await response.json();
    
                if (data.status === "ok" && data.articles.length > 0) {
                    console.log(data.articles.length);
                    let length=data.articles.length;
                    const shuffledArticles = shuffleArray(data.articles);
                    addnews.innerHTML = '';
                    for (let i = 0; i <9; i++) {
                            const article = shuffledArticles[i];
                            if(article.urlToImage!=null)
                            {
                                const newnews = `<article class="news-card">
                            <img src="${article.urlToImage}" alt="Health News Image">
                            <div class="news-content">
                                <h2>${article.title}</h2>
                                <p class="article-meta">Published on <span>${article.publishedAt}</span> | By: <span>${article.author}</span></p>
                                <p class="article-summary">${article.description}</p>
                                <a href="${article.url}" class="read-more-link">Read More</a>
                            </div>
                        </article>`;
                            addnews.insertAdjacentHTML('beforeend', newnews);
                        }     
                    }
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
    
    getNewsArticle();
    const reload=document.getElementsByClassName('btn')[2];
    reload.addEventListener('click',()=>{
        getNewsArticle();
    })
});
*/
