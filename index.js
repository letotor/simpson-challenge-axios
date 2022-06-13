console.log('Test fetch');

function fetchAdditionalHTML() {
    fetch('https://wildcodeschool.github.io/ajax-quest/html/additional-content.html')
        .then(res => {
            console.log(res.text)
            return res.text();
        })
        .then(htmlContent => {
            console.log('received data:', htmlContent);
           
            document.querySelector('#additional-content').innerHTML = htmlContent;
        });
}

const fetchGitHubProfileJSON =() =>{
    const username = 'letotor';
    const url = `https://api.github.com/users/${username}`;
    fetch(url)
        .then( (res) =>{
            return res.json();
        })
        .then( (profile) =>{
            const profileHtml = `
        <p><strong>${profile.name}</strong></p>
        <img src="${profile.avatar_url}" />
      `;
            document.querySelector('#github-profile').innerHTML = profileHtml;
        });
}

fetchGitHubProfileJSON();


setTimeout(fetchAdditionalHTML, 3000);