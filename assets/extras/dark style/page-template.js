// Creates the team
const generateTeam = team => {


    // Creates the Manager HTML
    const generateManager = manager => {
        return `
        <article class="card">
            <h2 class="name">${manager.getName()}</h2>
            <div class="role">
                <h3 class="role-name">${manager.getRole()}</h3>
                <i class="role-icon fas fa-mug-hot"></i>
            </div>
            <div class="id label-value-pair">
                <h4 class="label">ID</h4>
                <p class="value">${manager.getId()}</p>
            </div>
            <div class="email label-value-pair">
                <i class="fas fa-envelope label"></i>
                <a class="value" href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
            </div>
            <div class="label-value-pair">
                <h4 class="label office-number">Office No.</h4>
                <p class="value">${manager.getOfficeNumber()}</p>
            </div>
        </article>
        `;
    };


    // Creates the HTML for Engineers
    const generateEngineer = engineer => {
        return `
        <article class="card">
            <h2 class="name">${engineer.getName()}</h2>
            <div class="role">
                <h3 class="role-name">${engineer.getRole()}</h3>
                <i class="role-icon fas fa-glasses"></i>
            </div>
            <div class="id label-value-pair">
                <h4 class="label">ID</h4>
                <p class="value">${engineer.getId()}</p>
            </div>
            <div class="email label-value-pair">
                <i class="fas fa-envelope label"></i>
                <a class="value" href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
            </div>
            <div class="label-value-pair">
                <h4 class="label github">GitHub</h4>
                <a class="value gh-value" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
            </div>
        </article>
        `;
    };

    // Creates the HTML for Interns
    const generateIntern = intern => {
        return `
        <article class="card">
            <h2 class="name">${intern.getName()}</h2>
            <div class="role">
                <h3 class="role-name">${intern.getRole()}</h3>
                <i class="role-icon fas fa-user-graduate"></i>
            </div>
            <div class="id label-value-pair">
                <h4 class="label">ID</h4>
                <p class="value">${intern.getId()}</p>
            </div>
            <div class="email label-value-pair">
                <i class="fas fa-envelope label"></i>
                <a class="value" href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
            </div>
            <div class="label-value-pair">
                <h4 class="label school">School</h4>
                <p class="value">${intern.getSchool()}</p>
            </div>
        </article>
        `;
    };


    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// Exports function to generate entire page
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <title>My Team</title>
    </head>
    
    <header>
        <h1>My Team</h1>
    </header>
    <body>
        <main class="cards">
            ${generateTeam(team)}
        </main>  
    </body>
    </html>
    `;
};