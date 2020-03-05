# Backend

# Co-Make

The Site where you can keep create and support local issues that are affecting your community

### Some of the features include:

-Ability to see the things that are affecting your local environment
-Users can add issues in their local areas for their community to see and discuss
-Users can upvote the issues they think deserve priority
-A user can delete issues they have posted previously.
-A user can comment on their own issue post or the issues of others to foster discussion.

## View current deployment of this site

- [ ] Currently you can see this site in its current state at [netlify](//add site)

## MVP Goals for Back End Architect

- [ ] create a database with tables that account for users, comments, and issues.
- [ ] The user should have the ability to add, delete, and update issues from their posts.
- [ ] The user should have the ability to add, delete, and update comments on their posts and others as well.
- [ ] The user should have the ability to upvote comments or issues that are posted.

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

- [ ] Create a forked copy of this project.

**Follow these steps for completing your project.**

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master.

## Set Up with Yarn or NPM

- [ ] cd into the root directory and run yarn to retrieve the client side dependencies.

- [ ] RUN yarn start to fire up your React application.

## Deploy on Heroku

- [ ] command for resetting your heroku migrations.
      heroku restart -a co-make && npx heroku pg:reset DATABASE --confirm co-make -a co-make && npx heroku run knex migrate:latest -a co-make

## Testing

- [ ] Run the command yarn test

## Documentation of the API

https://documenter.getpostman.com/view/7901618/SVYouzdi?version=latest
