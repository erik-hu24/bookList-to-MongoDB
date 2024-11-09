<h2>3.2</h2>
Create a “hackhub” database<br>
Create a “users” collection<br>
Insert 2 user information:<br>
name: Bob Jackson; username: bob; location: Vancouver; bio: I’m a student<br>
name: John Dou; username: john; location: Seattle; bio: I’m a programmer<br>
Find Bob’s personal information in your database<br>
Update Bob’s username to bobjackson<br>
Find Bob’s personal information by his username<be>


<h2>3.3</h2>
Create a “hackhub” database<br>
Create a “users” collection<br>
Insert multiple users information:<br>
name: Ray James; username: rayjames; location: Vancouver; bio: I’m a developer<br>
name: Kate White; username: katewhite; location: Victoria; bio: I’m a designer<br>
Update all “Vancouver” users and make them<br>
bio: I’m a Vancouverist.<br>
Display all users in your database<be>


<h2>3.4</h2>
Add UsersSchema in your project with<br>
Name: String and required<br>
Username: String and required<br>
Location: String<br>
Bio: String<br>
AvatarUrl: String with a default url<br>


<h2>3.5</h2>
Add TweetsSchema in your project with<br>
Content: String and required<br>
ImageUrl: String<br>
Author: Object which contains<br>
Name: String and required<br>
Username: String and required<br>
Location: String<br>
Bio: String<br>
AvatarUrl: String with a default url<br>
CreatedAt: Date and required, the default value is current time<br>


<h2>3.6</h2>
Now, let’s modify your code and make Users model as a foreign key of Author attribute in TweetsSchema and set it as required field.<br>


<h2> Modify database </h2>
Create a database on Atlas to store books<br>
Create booksSchema with mongoose<br>
Add a router (POST) to add new book to database, use mongoose create function, and use Postman to test<br>
Add a router (GET) to fetch all data from books database<br>
Submit your code to GitHub<br>
