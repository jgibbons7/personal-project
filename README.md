# Anti-Social Media
### What problem does your app solve?
  - It removes the angst from social media. 

### How does it solve the problem?
  - No politics or religion, only hobbies.  
  - No feed where your crazy aunt spams radical crazy.

### Who is your target user?
  - 18 - 35 years of age.

### How much experience do they have with technology?
  - Moderate

## Features
  - SMS Messaging
  - Chat feature
  - Create portfolios for various hobbies
  - Show off all your favorite things, to yourself.

## Routes
  - About "Anti-Social Media" - Not Protected
  - Home view (Dashboard)- Protected
  - Hobby Portfolio - Protected
  - Profile - Protected

## Database Schema
![DBSchema](https://github.com/jgibbons7/personal-project/blob/master/public/screenshots/DB-diagram.png)

## Endpoints
  - app.get('/api/hobby', componentDidMount())

  - app.post('/api/user/register', createUser())
    
  - app.post('/api/hobby', createHobby())
    
  - app.delete('/api/user/:id', deleteUser())
    
  - app.delete('/api/hobby/:id', deleteHobby())
    
  - app.put('/api/hobby/:id, updateHobby())
    
  - app.put('/api/user/:id, updateUser())
    

## Controllers
  - createUser() 
    - Body includes username, age, profileImage. Returns a session.
  - createHobby()
    - Body includes hobbyName, description. Returns all hobbies.
  - deleteUser()
    - Params include the ID being deleted. Destroys session.
  - deleteHobby()
    - Params include the ID being deleted. Returns remaining hobbies.
  - updateHobby()
    - Param targets the hobby and the body carries updated info. Returns hobbies.
  - updateUser()
    - Param targets the hobby and the body carries updated info.

## Point Plan
  - CORE (40 pts)
    - 3 responsive views (10 pts)
    - Functional Authnetication (10 pts)
    - Redux Store and 2 Reducers (15 pts)
    - React Hook in at least 2 components (5 pts)

  - Additional Technology (30 pts)
    - Sockets for Chat (10 pts)
    - Twilio for SMS (10 pts)
    - CSS in JS (10 pts)
  
  - Hosting (15 pts)
    - Hosted and registered under unique name. (15 pts)

![Wireframe](https://github.com/jgibbons7/personal-project/blob/master/public/screenshots/App-map.png)

![Hobby-Page](https://github.com/jgibbons7/personal-project/blob/master/public/screenshots/Hobby-Page.png)

![Home-Page](https://github.com/jgibbons7/personal-project/blob/master/public/screenshots/Home-Page.png)

![Login-Page](https://github.com/jgibbons7/personal-project/blob/master/public/screenshots/Login-Page.png)

![Profile-Page](https://github.com/jgibbons7/personal-project/blob/master/public/screenshots/Profile-Page.png)
