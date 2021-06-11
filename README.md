# Front-end task: Movie app

## Task

1.  Minimal requirements:
    1. Modify js and scss files in order to mimic views from screenshots folder
    2. In order to retrieve data from backend use './api/videos.json' path, GET method, no additional headers necessary
    3. Solution should work on IE11 
    4. Some HTML and CSS have already been written. You need to implement missing parts. If you want to refactor some of the styling that's a plus
    
    5.  Selecting radio button should sort listed movies accordingly. 
        Sorting order (asc/desc) is up to you. 
        
    6.  Filter channels by title based on an input text. Filtering should be case-insensitive. 
        
    7.  Pressing `clear` button should reset both sorting options and text filter.

    8.  Create a pagination/show more button at the bottom - solution should show maximum 5 movies at the beginning and for the rest - pagination and/or show more button should show them. No designs, styling for this feature is optional
    
    9.  Write unit tests for filtering/sorting functions

4.  Fill out `NOTES.md` file, commenting the task and your solution,
    e.g. which browsers or devices you tested on, what assumptions or simplifications have been made, etc.

5.  Add unit tests for parts of your code responsible for sorting and filtering. 
    If you wish to add more tests, you are welcome to do it.

**Solve the task as best as you can. Code quality is more important for us than a quick but mediocre solution.**

## Limitations
*   You must NOT use any JS frameworks (i.e. Angular / React / Redux / Vue). We want to see if you are
    able to create a working app in plain JavaScript (ES6/ES2015+ is encouraged).
    
*   jQuery is forbidden in this task, please use other libraries if necessary (e.g. for AJAX call);

*   We recommend not to use any CSS frameworks. We want to see what your CSS code looks like.

## Notes

*   Everything else is permitted, including changing code or project structure, adding build tools, testing frameworks or dependencies.

*   Application layout does not have to be pixel-perfect when compared to screenshots.

*   Your solution will be judged by its code quality (HTML/CSS/JS) and look and feel of the finished product.


## Running the task

Node.js 8 or greater is required.

```bash
$ npm install
$ npm run build
$ npm start
```

Server address will appear in the terminal.

## How to deliver your solution

*   Create a private repository on [bitbucket.org](https://bitbucket.org)
    
*   Put original, unchanged content of this task in _master_ branch. Put your solution in a different branch.
    
*   Create a pull request from the branch with your solution to _master_ branch in your repository. 
    We will go through it and comment your work based on it.
    
Good luck!
