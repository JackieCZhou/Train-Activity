# Train-Activity
This project was designed using moment.js to caclulate the schedule of trains added by the user.

To add a train simply follow tthe form on the page and fill in the follow:
Train Name:
Destination:
First Train Time (in hh:MM format):
Frequency (in minutes format):

By clicking submit your train will be added to the scheudle. Refreshing the page will update the "Next Arrival" and "Minutes Away" columns to the most current times based on information given earlier.

The visuals were designed through bootstrap.



Train Scheduler: 

Follow the link to use this app: https://jackieczhou.github.io/Crystal-Collector/

A functional matching game, Crystal Collector uses Math.floor(Math.random() to generate random intergers for the computer and crystal buttons via auto-loading the page or through an onWin() or onLoss() event. Accumulated wins and losses are stored using sessionStorage until the page is refreshed. The goal of Crystal Collector being to match the computer score to the users score based on the addition of each crystals points via the onClick() event.

Game Layout:

-Upon loading the page a randomly generated interger for the computer is applied to the "Computer Score" field. -Additionaly each of the crystals are assigned randomly generated intergers as well that are hidden from the player using a similar function. -As the user clicks a crystal the "Your Score" field is updated based on that crystals currently assigned point value.

Going over the computers score will result in the "Loss" field increasing by one. An exact match to the "Your Score" and "Computer Score" fields will result in the "Win" field increasing by one.

Upon a win or loss being triggered the game automatically restarts. New intergers are generated and assigned to the computer player as well as the crystals. The "Wins" and "Losses" fields keep track of their points until the page is refreshed.

Coded in: HTML, CSS, Javascript

Design: Bootstrap
