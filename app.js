//Init Github Class
const github = new Github;
//Init UI Class
const ui = new UI;

/*const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (event) => {
    //get the input text from the searchUser input field
    const userText = event.target.value;
    if(userText !== '') {
        //make an http call to GitHub API
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                //Show alert if user was not found
                ui.showAlert('User Not Found', 'alert alert-danger');
            } else {
                //Show user profile and repos
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
            console.log(data);
        })
    }else {
            ui.clearProfile();
        }
})
*/


loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', getObject);
}

function getObject() {
    const gitHub = new Github;

    gitHub.getUser('NikVin322')
    .then(data=> {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
    });
}