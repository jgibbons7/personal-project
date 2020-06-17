# Anti-Social Media
### What problem does your app solve?
  - It removes the angst from social media. 

### How does it solve the problem?
  - No politics or religion, only hobbies.  
  - No feed where your crazy aunt spams radical crazy.

### Who is your targer user?
  - 18 - 35 years of age.

### How much experience do they have with technology?
  - Moderate

## Features
  - Ability to message friends.
  - Upload pictures
  - Create portfolios for various hobbies
  - 

## Routes
  - About "Anti-Social Media" - Not Protected
  - Home view (Dashboard)- Protected
  - Hobby Portfolio - Protected
  - Profile - Protected

## Database Schema
![DBSchema](https://github.com/jgibbons7/personal-project/blob/master/public/screenshots/DB-diagram.png)

## Endpoints
  - app.post('/api/user', createUser())
    
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

![Wireframe](https://github.com/jgibbons7/personal-project/blob/master/public/screenshots/App-map.png)

![Hobby-Page](https://github.com/jgibbons7/personal-project/blob/master/public/screenshots/Hobby-Page.png)

![Home-Page](https://github.com/jgibbons7/personal-project/blob/master/public/screenshots/Home-Page.png)

![Login-Page](https://github.com/jgibbons7/personal-project/blob/master/public/screenshots/Login-Page.png)

![Profile-Page](https://github.com/jgibbons7/personal-project/blob/master/public/screenshots/Profile-Page.png)
