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
                    for (let i = 0; i < 20; i++) {
                        if(data.articles[i].urlToImage!=null)
                        {
                            let newnews = `<article class="news-card">
                            <img id="img${i}" src="${data.articles[i].urlToImage}" alt="Health News Image">
                            <div class="news-content">
                                <h2 id="article-header${i}">${data.articles[i].title}</h2>
                                <p class="article-meta">Published on <span id="date${i}">${data.articles[i].publishedAt}</span> | By: <span id="author${i}">${data.articles[i].author}</span></p>
                                <p id="article-summary${i}" class="article-summary">${data.articles[i].description}</p>
                                <a id="read-more${i}" href="${data.articles[i].url}" class="read-more-link">Read More</a>
                            </div>
                        </article>`;
                        addnews.insertAdjacentHTML('beforeend', newnews);
                        }
                        
                    }
                    addnews.insertAdjacentElement('beforeend','<p class="red">Looks like you have reached the end!</p>')
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
});
