## Customize the *Drop* base theme

### Setup Grunt

1. Download and install *node.js* from [http://nodejs.org/](nodejs.org).

2. Add */usr/local/bin* to your *$PATH* by adding this line to *.bash_profile*
 
 ```
PATH=/usr/local/bin:$PATH
```

3. install npm
`sudo npm install npm -g`

4. Intsall grunt
`sudo npm install -g grunt-cli`

5. Intsall grunt favicons
`sudo npm install grunt-favicons --save-dev`

6. Install imagemagick
`composer global require rfd/imagemagick`
 (If you run into errors here, male sure you have xcode installed on your mac).

7. Intall bundler
`sudo gem install bundler`

8. cd into the project dir and run

`sudo bundle install`

9. cd into the *Grunt* dir and run

`grunt`

10. Add this snippet to your template files just before the closing *<body>* tag

 ```
<script type='text/javascript'>//<![CDATA[
;document.write("<script defer src='//HOST:3000/socket.io/socket.io.js'><\/script><script defer src='//HOST:3001/client/browser-sync-client.0.9.1.js'><\/script>".replace(/HOST/g, location.hostname));
//]]></script>
 ```

npm install gulp-sass
npm install --save-dev gulp-livereload
npm install --save-dev gulp-minify-css
npm install --save-dev gulp-minify-css
npm install --save imagemin-jpegoptim
npm install --save imagemin-pngquant
npm install --save imagemin-optipng