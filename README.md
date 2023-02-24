<div align="center">

<h1 align="center">Team Profile Generator</h1>

  <p align="center">
    A CLI application that generates an HTML webpage of a team, based on user input.
    <br />
    <a href="https://github.com/Agia/Team-Profile-Generator"><strong>View Demo</strong></a>
    <strong>||</strong>
    <a href="https://github.com/Agia/Team-Profile-Generator/issues">Report Bug</a>
    <strong>||</strong>
    <a href="https://github.com/Agia/Team-Profile-Generator/issues">Request Feature</a>
  </p>

  <img src="https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=orange&style=for-the-badge" />
</div>

<br />

## Table of Contents
<details>
  <summary>Expand TOC...</summary>
  <ol>
    <li>
      <a href="#description">Description</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#future-plans">Future Plans</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br />
<hr />

## Description

A Node.js command-line application, that takes in information, from the user, about employees on a software engineering team, and then generates an HTML webpage that displays summaries for each person, based on that input.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built Using

* [![Node][Node.js]][Node-url]
* <img src="https://img.shields.io/badge/inquirer-ff0000?style=for-the-badge&logo=npm&logoColor=white" />
* <img src="https://img.shields.io/badge/jest-blue?style=for-the-badge&logo=npm&logoColor=white" />


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started

To get a local copy up and running follow the steps outlined below.

<hr/>

### Prerequisites

You'll need to have Node.js `18.x` (or higher) installed on your system (you can visit the [Node.js website](https://nodejs.org/en/) for instructions on installing Node).


### Installation

1. With Node installed, you can clone the repo to your local system, for example, by running:
    ```sh
    git clone git@github.com:Agia/Team-Profile-Generator.git
    ```
2. Navigate into the repo directory on your local system, and install the required NPM packages by running the following command:
    ```sh
    npm i
    ```
3. You're all set!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<hr/>

## Usage

- Open your command-line, and navigate to the parent folder of the repo (it will contain `index.js`).
- Enter the following into your command-line:
    ```sh
    node index.js
    ```
- Follow the prompts, answering the questions as prompted.
- Once you select the option to 'Finish building your team', a `team.html` file will be generated, containing your team profiles from the information provided, and can be found in the `output` directory (`output/team.html`).

### Video Demo
<!-- TODO: Upload and add link to GIF once completed -->
![Gif showing the command-line application is use]()

### Screenshots

#### Application in Use
<!-- TODO: Upload and add link to PNG once completed -->
- ![Screenshot of the command-line application in use]()

#### Generated Output
<!-- TODO: Upload and add link to PNG once completed -->
- ![Screenshot of the generated HTML output from the app]()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<hr/>

## Future Plans

As this project was part of a time-limited challenge, my focus was on meeting the remit of the challenge, and it's particular requirements as completely, and as well as possible, within the time alloted.

With that in mind, I have listed a few areas I would like to revisit, and improve upon, in the future, that were outside of the requirements of the challenge, but could provide an opportunity to further develop my skill set.

- [ ] Validation for repeated number inputs relating to employee `ID` number.
- [ ] Clear previous input from command-line, if not validated (currently retains previous entry)
- [ ] Improve the responsiveness of the provided HTML, and change the aesthetic to be less generic.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br/>

## License
<img src="https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=orange&style=for-the-badge" />

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br/>

## Acknowledgments

* [Inquirer]() for building out the prompt functionality, and it's documentation.
* [StackOverflow]() - primarily for researching errors.
* [MDN]() for general syntax confirmation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[issues-url]: https://github.com/Agia/Team-Profile-Generator/issues
[product-screenshot]: images/screenshot.png
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org