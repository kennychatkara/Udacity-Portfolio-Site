# Portfolio Website

**Description**
---------------
A responsive portfolio website which displays images and links for cooresponding development projects.


**Download**
---------------
To download the project source code, simply clone the repository or download and extract the zip of the repository.


**Generate Responsive Images**
---------------
A set of responsive images that are used for the website can be found in the 'images/responsive' folder. These images are generated from source images in the 'images/src' folder, using [ImageMagick](https://www.imagemagick.org/script/index.php) with the help of [Grunt](https://gruntjs.com/) and [Grunt Responsive Images](https://github.com/andismith/grunt-responsive-images/).

**System Requirements**
- ImageMagick
- Node.js
  - With latest npm (Node Package Manager) version
- Grunt v0.4.5+
- Grunt Responsive Images Node Module

**Requirements Installation**
- To install ImageMagick, visit http://www.imagemagick.org/script/download.php

- To install Node.js, visit https://nodejs.org/en/download/
  - Update npm to the latest version
    - In Terminal (or Command Shell for Windows), enter:  
    ```shell
       npm update -g npm             # npm commands may require 'sudo' (or the command shell to be run as Admin for Windows)
    ```

- Install Grunt Node Modules inside the project folder (as Grunt must be installed on a per-project basis)
  - In Terminal/Command Shell:
    - change directory to the root of the project folder 
    ```shell
       cd [path of project root]
    ```
    - install Node modules  
    ```shell
       npm install
    ```

- Install Grunt CLI (Command Line Interface) to allow Grunt to be run using terminal commands
  - In Terminal/Command Shell, enter:  
  ```shell
     npm install -g grunt-cli
  ```

**Generate**
- Generate responsive images
  - In Terminal/Command Shell, enter:  
  ```shell
     grunt
  ```


**Run**
---------------
To open the Portfolio Website, simply open the "index.html" file in your favorite browser
