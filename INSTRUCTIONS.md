## Run the app

- Open Terminal
- Navigate to this Project (`cd` to get to home directory, `cd folderName` to go to folder)
- Run `npm start`
- Open `localhost:3000` in browser (should open automatically)

## Pull new changes 

Before pulling changes from the GitHub repository, make sure you have no unsaved (un-committed) changes 

- Run `git status`

If there are some changes (in red), you can:

- a) Commit your changes with `git add .` and `git commit -m "describe your changes"`
- OR b) Undo your changes with `git checkout .`

Then, to pull new changes run `git pull`. If you have any un-committed changes, you will not be able to `git pull` from the repository.


## Push your changes

- `git status` to see your changes (marked in red)
- `git add .` to add all of your changes. Run `git status` to see that your changes are now green.
- `git commit -m "describe your changes here"` to commit your changes
- `git push` to push your commits to the repository

