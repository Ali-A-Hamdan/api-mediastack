// // Fetch news data from the mediastack API
// function fetchNews() {
//     const apiUrl = `http://api.mediastack.com/v1/news?access_key=bf21cadf811ae439740dabe068c305f1&sources=cnn,bbc&limit=10`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => displayNews(data))
//         .catch(error => console.log(error));
// }

// // Display news articles on the page
// function displayNews(data) {
//     const newsContainer = document.getElementById("news-container");

//     if (data && data.data && Array.isArray(data.data)) {
//         data.data.forEach(article => {
//             const { title, description, source, url } = article;

//             const newsCard = document.createElement("div");
//             newsCard.classList.add("news-card");

//             const newsTitle = document.createElement("h2");
//             newsTitle.textContent = title;

//             const newsDescription = document.createElement("p");
//             newsDescription.textContent = description;

//             const newsSource = document.createElement("p");
//             newsSource.textContent = `Source: ${source}`;

//             const newsLink = document.createElement("a");
//             newsLink.textContent = "Read more";
//             newsLink.href = url;
//             newsLink.target = "_blank";

//             newsCard.appendChild(newsTitle);
//             newsCard.appendChild(newsDescription);
//             newsCard.appendChild(newsSource);
//             newsCard.appendChild(newsLink);

//             newsContainer.appendChild(newsCard);
//         });
//     } else {
//         console.log("Invalid response data");
//     }
// }

// // Call the fetchNews function to load news articles
// fetchNews();
