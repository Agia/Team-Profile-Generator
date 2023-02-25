// Generates the HTML for all team objects
const generateTeam = team => {

    // Generates the HTML for Manager objects
    const generateManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h3 class="name bold sticky">${manager.getName()}
                    <div class="tape"></div>
                </h3>
                <h4 class="position sticky">
                    <div class="tape-lg"></div>${manager.getRole()}  <i class="fas fa-mug-hot"></i>
                </h4>
            </div>
            <div class="card-body">
                <dl class="card-list">
                    <dt class="id-num label">ID</dt>
                    <dd>${manager.getId()}</dd>
                    <dt class="label">Email</dt>
                    <dd><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></dd>
                    <dt class="label">Office Number</dt>
                    <dd>${manager.getOfficeNumber()}</dd>
                </dl>
            </div>
        </div>
        `;
    };

    // Generates the HTML for Engineer objects
    const generateEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
                <h3 class="name bold sticky">${engineer.getName()}
                    <div class="tape"></div>
                </h3>
                <h4 class="position sticky">
                    <div class="tape-lg"></div>${engineer.getRole()}  <i class="fas fa-glasses"></i>
                </h4>
            </div>
            <div class="card-body">
                <dl class="card-list">
                    <dt class="id-num label">ID</dt>
                    <dd>${engineer.getId()}</dd>
                    <dt class="label">Email</dt>
                    <dd><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></dd>
                    <dt class="label">GitHub</dt>
                    <dd><a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></dd>
                </dl>
            </div>
        </div>
        `;
    };

    // Generates the HTML for Intern objects
    const generateIntern = intern => {
        return `
        <div class="card">
            <div class="card-header">
                <h3 class="name bold sticky">${intern.getName()}
                    <div class="tape"></div>
                </h3>
                <h4 class="position sticky">
                    <div class="tape-lg"></div>${intern.getRole()}  <i class="fas fa-user-graduate"></i>
                </h4>
            </div>
            <div class="card-body">
                <dl class="card-list">
                    <dt class="id-num label">ID</dt>
                    <dd>${intern.getId()}</dd>
                    <dt class="label">Email</dt>
                    <dd><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></dd>
                    <dt class="label">School</dt>
                    <dd>${intern.getSchool()}</dd>
                </dl>
            </div>
        </div>
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

// Exports function to render entire page
module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.css">
    <script defer src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>My Team</title>
</head>
<body>
    
    <header>
        <h1>My Team</h1>
    </header>

    <main class="cards">
        ${generateTeam(team)}
    </main>


</body>
</html>
    `;
};