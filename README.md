# Eat-Da-Burger!

A burger logger application is a webbased application where the front end is generated with handlebars dynamic html pages, the application also has middleware for GET, UPDATE and routes and data is persistent stored in mySQL. Entire app is deployed in Heroku.

Technologies used are: 
	MySQL, Node, Express, Handlebars, homemade ORM, Heroku 

Most important learning/feature of this project is MVC as it allows to create scalable application.

as per MVC (Model View Controller), the code base is modularized into three sections. MVC pattern helps developers collaborate and resolve merge conflicts and adapt an application to changing technical needs, team can change the backend database or handlebars to a different technology.


1. View layer: Dynamically generate the HTML using a template engine (handlebars.js). In implementing a template engine, we are separating the concern of client-side rendering from other aspects of the application. 

2. Data layer: Model is the data layer having structure of our database and the logic used to retrieve that data. We will implement object-relational mapping to create reusable methods for querying our database.

3. Controller layer: Intermediary between the View and the Model. The Controller handles input from the user, interacts with the Model to create, read, update or delete data, and then returns the results of that query to the user via the View layer. Also creating separation between our client-side and server-side routes.
