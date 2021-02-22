"How I got this app to work"

REMEMBER, when making a new repository on github make sure the first branch says 'master' not 'main'
npx create-react-app my-first-react-app

remove all files except node_modules, package.json, and package-lock.json
copy all other files from login-app into this app
copy and paste the lines from the login-app package.json, (except the title line), and paste it into mood-apps package.json
npm i, so all the packages from the package.json will install into the node_modules folder.
npm start, to test the app, app is working, now forming a list of todos down belove.

KEEP THESE FOR REFERENCE
modify pack-age.json to:
"start": "concurrently \"npm run server\" \"react-scripts start\" ",

create server scrtip for "start" to run:
"server": "nodemon Server/index.js",

npm i pacakges:
React
React-Redux
Redux
concurrently
mysql
jsonwebtoken
bcrypt
@material-ui/core
@material-ui/icons
react-router-dom
thunk / redux-thunk

GAMEPLAN:
1: Create React-app : DONE
2: Migrate contents from login-app to mood-app, test functionality : DONE
3: Make gameplan : DONE
4A: Make a Repl.it for front end javascript that will take in user data regarding mood, and return it as a object : DONE, may need changes later, needs modfiication in actual component.
4B: Update server files with new routers and countrolers for passing user mood data, test in postman when database is up : DONE
4C: Update database to hold new tables to hold the data apropriately. OR make new database to hold app data, and all future apps : DONE
5: Integrate Repl.it javascript into src app and make the necessary components, actions, and user interface. Test it to pass new data, and update local state. : IN PROGRESS
6: Add front end functionality to pull user database info on login
7: Make a graph to serve as visual add for user mood data using the updated state
8: Pretty up the app/polish
9: Deploy and test.

FRONTEND WHITEBOARD:
Once user logs in the user data needs to be passed to the global state,
Whenever reaching the homepage, it should at least
