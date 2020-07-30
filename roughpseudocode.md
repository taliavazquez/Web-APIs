[x] 1. Show title of the application
[ ] 2. show instruction
[x] 3. button to start quiz
   -Once user click (add an event listener .eventListener) in .js
     * hide the previous instruction screen and the start button (hide) in .js
     * Show question and list of possible answer (multi choice) (<buttons>)
     * Show timer - timer count down start (<p> <a> <H1> js function) 
[x] 4. User take quiz- if user answer question- 
    - List 1st questions (<p>) and answer (<button> html or js .eventListener)
    - Once done, Telling user if you got the right or wrong answer (<p> if statement)
     - presented user with another question and list of answers (multiple choice) (<buttons>) (hide) (show new buttons)
     - subtracted from the clock (10 sec) if user answer incorrectly (<p> <a> <H1> js function, if statement -10)
     - User keep taking test until timer reaches 0 or user finish quiz (gamer over )
[ ]5. Game Over
    - Timer stop (clearInterval in js reference activity 08)
    - questions and answer layouts went away (hide questions, show input)
     - display a new form that shows
        * Final score (variable of correct answer )
        * let user enter initial (inside an input)
        * submit btn (button)
            - score and initials get save local storage
    - redirect user to a new screen that show everyone high scores
[ ] 6. High score
    - Show title "Highscores"
    - show everyone high score in a list format
    - 2 button
    - 1st button (allow user to go back- first page)
    - 2nd button: clear information from the local storage
