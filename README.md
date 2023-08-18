## project name
go here to write a good readme https://readme.so/editor
```
put code in 3 backticks to be copyable
```
![react-badge.svg](public/images/react-badge.svg)
![vitejs-badge.svg](public/images/vitejs-badge.svg)


## gh-pages

1)  Go into package.json -> in the scripts section add the code

```
"deploy": "gh-pages -d dist"
```


2) go to vite.config.js -> after plugins, write base with the current directory on Github

```
base: "/github project directory" 
 ```
3) Install gh-pages that lets us easily deploy to gh-pages branch
    
```
npm install gh-pages --save-dev
```

11) When we are ready to upload to GitHub pages do this
    
    ```
    npm run build
     ```

    ```
    npm run preview
     ```

    ```
    npm run deploy
    ```
If it ask for username, give GitHub username, and by "password" it means GitHub access token. If we get the error "github pages already exist"
. Go into node_modules folder -> .cache folder -> delete "gh-pages" -> redeploy

