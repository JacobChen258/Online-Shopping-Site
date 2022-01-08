<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Online-Shopping-Site</h3>

  <p align="center">
    <div>A Full-Stack Project of User-Seller Ecommerce Site</div>
    <br />
    <a href="https://github.com/JacobChen258/Online-Shopping-Site"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/JacobChen258/Online-Shopping-Site/issues">Report Bug</a>
    ·
    <a href="https://github.com/JacobChen258/Online-Shopping-Site/issues">Request Feature</a>
    <br/>
    <br/>
    <div>This project is still <strong>In Progress</strong> and <strong>Not Deployed</strong>.</div>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
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
    <!--<li><a href="#usage">Usage</a></li>-->
    <li><a href="#roadmap">Roadmap</a></li>
    <!--<li><a href="#contributing">Contributing</a></li>-->
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
My Shopping site is a Ecommerce Website allows users to purchase items and list items for selling. 

### Initiative
This project is initiated for learning full-stack development procedures and practicing design models. With zero experience of front-end coding, my first goal is to learn and practice HTML, CSS and JavaScript from start. Then, to comprehance client-server communication in practice.

Besides frontend UI and server interaction, online shopping site also needs account and payment security and 
an admin to manage the flow of goods, which I believe it is the best practice for full-stack development.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

#### Stacks
* [React](https://reactjs.org)
* [Django](https://www.djangoproject.com)
* [Django-Rest](https://www.django-rest-framework.org)
* [Postgresql](https://www.postgresql.org)
#### Others
* [JQuery](https://jquery.com)
* [Babel](https://babeljs.io)
* [Webpack](https://webpack.js.org)
* [React-Icons](https://react-icons.github.io/react-icons/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

In order to avoid version conflicts, these following steps are recommanded to be done in virtual environment
* npm
  ```sh
  npm install npm@latest -g
  ```
 * [python](https://www.python.org/downloads/)
 * django
  ```sh
  pip install Django==4.0.1
  ```
 * django-rest
  ```sh
  pip install djangorestframework
  ```
  

### Installation

In order to avoid version conflicts, these following steps are recommanded to be done in virtual environment

1. Clone the repo
   ```sh
   git clone https://github.com/JacobChen258/Online-Shopping-Site.git
   ```
2. Go to `/shopping_web`
   run server with default database
   ```sh
   python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver
   ```
   run server with your empty database
   * open `/shopping_web/shopping_web/settings.py`
   * add your database in `DATABASES` section
   then, run the following command 
   ```sh
   python manage.py makemigrations
   python manage.py migrate --database=database_name
   python manage.py runserver
   ```
3. Copy local host IP from terminal
4. Open a new terminal and go to `/shopping_web/front-end`
5. Install NPM packages
   ```sh
   npm install
   ```
6. Run web server
   ```ssh
   npm run dev
   ```
7. Open My Shopping Site using pasted IP as url to browser

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!--
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>
-->



<!-- ROADMAP -->
## Roadmap
#### In-Scope
- [100%] Setting up stacks (Installation and Database Design)
- [80%] Front-end skeleton pages
- [20%] User registration
- [0%] Seller sign up and item creation
- [0%] Payment Method
#### Good to Have
- [] User-Seller Chat Box
- [] Adminitrator
- [] Recommandation (Machine Learning)
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>
-->



<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE.txt](https://github.com/JacobChen258/Online-Shopping-Site/blob/main/LICENSE) for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Litao Chen - litao.chen@mail.utoronto.ca

Project Link: [https://github.com/JacobChen258/Online-Shopping-Site](https://github.com/JacobChen258/Online-Shopping-Site)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Great Appreciation to 
* [React Icons](https://react-icons.github.io/react-icons/search)
* [Markdown Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)
* [Django & React Turorial](https://www.youtube.com/watch?v=JD-age0BPVo&list=PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/JacobChen258/Online-Shopping-Site/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/litao-jacob-chen-98680614a/
[product-screenshot]: images/screenshot.png
