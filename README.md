# Portfolio Website

**Description**
---------------
Source code for a portfolio website project which displays a set screenshots and source code links for cooresponding projects.


**Download**
---------------
To download the project source code, simply clone the repository or download and extract the zip of the repository.


**Generate Responsive Images**
---------------
**System Requirements**
- ImageMagick
- Node.js
  - With latest npm (Node Package Manager) version
- Grunt v0.4.5+

**Requirements Installation**
- To install ImageMagick, visit http://www.imagemagick.org/script/download.php

- To install Node.js, visit https://nodejs.org/en/download/
  - Update npm to the latest version
    - In Terminal, enter:  
    ```shell
        npm update -g npm         # may require 'sudo'
    ```

- Install Grunt Node Modules
  - In Terminal:
    - change directory to the root of the project folder 
    ```shell
        cd [path of project root]
    ```
    - install Node modules  
    ```shell
        npm install
    ```

- Install Grunt CLI
  - In Terminal, enter:  
  ```shell
      npm install -g grunt-cli
  ```

**Generate**
- Generate responsive images
  - In Terminal, enter:  
  ```shell
      grunt
  ```


**Run**
---------------
To open the Portfolio Website, simply open the "index.html" file in your favorite browser
