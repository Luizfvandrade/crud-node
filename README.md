# CRUD
- C: Create,
- R: Read,
- U: Update,
- D: Delete.

## Creating a crud with nest and redis to persistence 
- I used nestjs to create this CRUD to facilitate my progress since it is a very intuitive framework and its documentation is easy to read,
- I decided to use redis for persistence of cached data because I have previous experience with this technology.

## Running the project
- Install your dependencies with the 'npm install' command,
- The execution of the project is very simple, run the command 'npm run start: dev',
- In order to work correctly, you need a folder called 'config' with a file called '.env.developt' with the following environment variables in it: 'CACHE_HOST=localhost &
CACHE_PORT=6379'.
