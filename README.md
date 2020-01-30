# Train-Scheduler

Train Scheduler: 

Follow the link to use this app: https://jackieczhou.github.io/Train-Scheduler/

Scheudler Layout:

Using a Firebase database and a moment.js NPM this form allows the user to dynaically add new trains to a scheudle board. 

Upon clicking submit your train will be dynamically added to the scheudle. This data will be saved until you choose to remove said train via the Firebase database itself.

To see the most current "Next Arrival" and "Minutes Away" times refresh the page to the most current times based on information given up submission.


To add a train simply fill out the form with new criteria for all of the following options:
Train Name:
Destination:
First Train Time (in hh:MM format):
Frequency (in minutes format):

Languages Used: HTML, CSS, Javascript

Database: Firebase

NPM's used: moment.js

Layout & Design: Bootstrap

The next steps of this project would be:
Add more paramenters to the form/details available on each train
Add another page for purchasing tickets to these trains
Update the remove feature so the trains can be removed from the database directly from the page
Add a feature to search for train options based on a variety of parameters such as "location" or "depature time"
