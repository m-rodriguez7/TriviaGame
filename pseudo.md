starts with a start button

as soo as you press it, a timer starts
    
as soon as you press it it shows a list of questions with answers.
    the questions have a mc, only one can be chosen. radio buttons. 

there is a done button at the bottom of the page
    changes page to a scoreboard
        questions answered, wrong, not answered?

good to note that when the timer ends its the same as pressing the "done" button
there should also be a button that resets after a user "checks their score"



start button: created with html. 
    next, you press it. this moves it to a hidden div.
    then, appends all the questions and radio buttons to the page.

above all the questions there is a timer, most likely inplemented with a "set interval" function. 
    time variable
    set interval function decreases time by 1 every second
    DOM is updated every second. this is the only part of the page that has any sort of crazy dom manipulation

I can either: 
    keep all the necessary divs in the "hidden div" and move them as ncessary
    create them as they are needed?

