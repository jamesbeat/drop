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

5. Intall bundler
`sudo gem install bundler`

6. cd into the project dir and run

`sudo bundle install`

7. cd into the *Grunt* dir and run

`grunt`

8. Add this snippet to your template files just before the closing *<body>* tag

 ```
<script type='text/javascript'>//<![CDATA[
;document.write("<script defer src='//HOST:3000/socket.io/socket.io.js'><\/script><script defer src='//HOST:3001/client/browser-sync-client.0.9.1.js'><\/script>".replace(/HOST/g, location.hostname));
//]]></script>
 ```
