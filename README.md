# Vocabulary of the Media Critic - Front End

Backend Repository: https://github.com/LGmedia954/vocabulary-media-critic-backend

This Single Page Application (SPA) was created in memory of a fun college professor, dean, and mentor. In one of her communications classes, each student was handed a stack of 3x5 flash cards. On each card was a unique new word that we had to research and build a sentence using that word in an instance of mass media critique. Most of my classwork is lost in storage somewhere, but somehow these flash cards survived all household moves and continued to linger around my desk.

I wanted my application to serve as a brief sampling of the critical vocabulary used by media critics and influencers. For brevity, this project was created with 50 vocabulary words. The frontend is built with HTML, CSS, and JavaScript, and communicates with a backend API of Ruby and Rails.

# How To Use This Application

To use this app, clone the Back End repository and run bundle install for the necessary gems. Run rake db:migrate and rake db:seed to populate the seed data for this application. Then enter 'rails s' to run rails server. JSON is set for http://localhost:3000/.

Clone the Front End repository, then open the index.html file in your browser. On initial load, a user will see a list of vocabulary words from the seed file. Each word is accompanied by its part of speech (within the scope of media critique), plus its definition. You are welcome to type and submit your own sentence using that word. The DOM will update to include that new submission.

# Project Requirements

The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.
