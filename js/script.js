const apiURL = 'https://api.github.com/users/OfficialMarinho/repos';
const projectsList = document.getElementById('projects');
var request = new XMLHttpRequest();

const container = document.createElement('div')
container.setAttribute('class', 'container')

projectsList.appendChild(container);

request.open('GET', apiURL, true);
request.send();

request.onload = function () {
    var projects = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        projects.forEach(projects => {
            if (projects.fork != true && projects.language != 'C' && projects.description != null) {
                const link = document.createElement('a');
                link.setAttribute('href', projects.html_url);

                const linkText = document.createElement('p');
                linkText.textContent = 'See code';

                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                const projectName = document.createElement('h3');
                projectName.textContent = projects.name;
                projectName.setAttribute('class', 'project-name');

                const projectDescription = document.createElement('p');
                projectDescription.textContent = projects.description;
                projectDescription.setAttribute('class', 'project-description');

                container.appendChild(card);
                link.appendChild(linkText);
                card.appendChild(projectName);
                card.appendChild(projectDescription);
                card.appendChild(link);
            }
        });
    } else {
        console.log('Mmmmmmm... something it\'s wrong with the GitHub.');
    }
}