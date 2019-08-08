### App Functionality
    this.state = {
                wins:
                losses:
            }
            incrementWins() {
                setState wins: prevState + 1
            }
            incrementLosses() {
                setState losses: prevState + 1
            }

- [ ] [STRETCH] Keep track of wins and losses in a scoreboard

### Game Functionality
    <Game />
        turns:
        time:
        difficulty:
        reset:

- [x] Increment turn count on every cell open
- [x] Increment timer on every passing second
- [x] Trigger board reset on game difficulty change
- [x] End Game method to assess win state
        - wins and losses invoke passed incrementor method for leaderboard?


### Board Functionality (Stateful component using props methods and properties)
    <Board />
        Constructor(props) {
            super(props)
            this.state = {
                difficulty: '';
                cells: [],
            }

            // resetBoard()
            for (let i = 0; i < this.props.width; i += 1) {
                let row = [];
                for (let j = 0; j < this.props.height; j += 1) {
                    row.push(
                        <Cell 
                        >
                    )
                }
            }
        }

        gameOver() {
            alert('Game Over. Don't quit yet!')
            this.props.resetBoard(this.state.difficulty)
        }
        gameWon() {
            alert('Game Won. Challenge yourself with another one!')
            this.props.resetBoard(this.state.difficulty)
        }
        openCell(id) {
            this.state.cells.map((cv) => {
                this
            })
        }
        resetBoard(string) {
            switch
                case 'beginner'
                    return <Board />
                case 'intermediate'
                    return <Board />
                case 'advanced'
                    return <Board />
        }

- [x] 3 difficulty levels
    - 'Beginner' = 9x9, 10 mines
    - 'Intermediate' = 16x16, 40 mines
    - 'Advanced' = 16x30, 99 mines

    - ResetBoard() function taking string as argument with set params per argument 
        - previous argument saved & used if a new argument has not been passed
            - default to beginner
        - called on every time we click
- [x] Randomly place mines on cells on each new game
        - mine boolean value per cell
        - map through cells
        - Random number generated between min and max of cell count
        - cell number to determine whether mine is applied or not


### Cell Functionality (Stateless component using props methods and properties)
    <Cell />
    onClick = () => {
        this.props.openCell(this.props.cellId)
    }

- [x] Open cell when player clicks on cell
        - onClick changing cell style value -> style ternary for cell open boolean
        - open and closed state for cell
- [x] Clicking on a cell containing a mine results in game over, resetting the game
        - Check mine boolean value of cell
        - gameOver() method resetting the board, calling ResetBoard()
- [ ] Clicking on cell with no mines as neighbors opens those cells as well
        - onClick checks adjacent coordinates
- [ ] Opening all un-mined cells results in winning the game
        - onClick of cells triggers incrementor value in board with conditional triggering gameWon()
        - gameWon() alerts user that the game has been won, resets the board with ResetBoard()
- [ ] Right click on buttons marks them and disallows further clicking until it is right-clicked again
- [x] Cells display the number of adjacent mines


### Style

- [x] Make the board's width adaptive to consistently hold the correct amount of cells
- [x] Inline game settings bar
- [ ] Animation for cell opening & chain opening effect
- [ ] Explosion for mine click
- [x] Center the board


### Docs

- [ ] Add docs to every component explaining necessary props for functionality
- [ ] Add docs for methods in every component

--------------------------------------------------------------------------------------------------------------------

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
