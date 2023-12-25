document.addEventListener('DOMContentLoaded', () => {
    const apiKey = "a43095fc9fbb40e791dc3b251a4d3449";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`;
    
    /*async function getNewsArticle() {
        try {
            const header = document.getElementById('article-header1');
            const img=document.getElementById('img1');
            const summary=document.getElementById('article-summary1');
            const readmore=document.getElementById('read-more1');
            let response = await fetch(apiUrl);

            if (response.status === 200) {
                let data = await response.json();

                if (data.status === "ok" && data.articles.length > 0) {

                    header.innerHTML = data.articles[0].title;
                    img.src=data.articles[0].urlToImage;
                    summary.innerHTML=data.articles[0].description;
                    readmore.href=data.articles[0].url;
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

    getNewsArticle();*/
    async function getNewsArticle() {
        for (let i = 0; i < 10; i++) {
            const header = document.getElementById(`article-header`+`${i}`);
            console.log(header);
            const img = document.getElementById(`img${i}`);
            const summary = document.getElementById(`article-summary${i}`);
            const readmore = document.getElementById(`read-more${i}`);
            const date=document.getElementById(`date${i}`);
            const author=document.getElementById(`author${i}`);
            try {
                let response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Upgrade': 'HTTP/2.0'  // Adjust this based on the API requirements
                    }
                });
                
                if (response.status === 200) {
                    let data = await response.json();
    
                    if (data.status === "ok" && data.articles.length > i) {
                        header.innerHTML = data.articles[i].title;
                        img.src = data.articles[i].urlToImage;
                        summary.innerHTML = data.articles[i].description;
                        readmore.href = data.articles[i].url;
                        date.innerHTML=data.articles[i].publishedAt;
                        author.innerHTML=data.articles[i].author;
                    } else {
                        console.error("News API request successful, but no articles found.");
                    }
                } else {
                    console.error(`Error: ${response.status} - ${response.statusText}`);
                }
            } catch (error) {
                console.error("Error fetching news data:", error);
            }
    
            // Add a delay between API requests (e.g., 1 second)
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }
    
    getNewsArticle();
    
});
