const main = document.getElementById('main-content');
const input = document.querySelector('.search-input');
const button = document.querySelector('search-button');

button.addEventListener("click",(event) => {
event.proventDefault()
const username = input.value
getGitHubUser (username)
})

getGitHubUser = async (user) => {

    try {
        const response = await fetch {}
    }
    catch(err)
}