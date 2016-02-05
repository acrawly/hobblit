# Hobblit Node Server

#instructions for setup
1. You'll need to copy `config.js.default` to `config.js` and edit the values to point to a MySQL database, etc. 
This file is ignored by the repo so when the code gets pushed to AWS the server has it's own config.js file that will set it for that environment

2. Run `npm install` to install the dependencies on your machine

3. Run `npm start` or `node server.js` to run the server

    Tip: you can use `forever` to automatically reboot the node server when changes are made.