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
![DBSchema](https://github.com/jgibbons7/personal-project/tree/master/public/screenshots/DB-diagram.png)

## Endpoints
  - app.post('/api/user', createUser())
    - Body includes username, age, profileImage.
  - app.post('/api/hobby', createHobby())
    - Body includes hobbyName, description.
  - app.delete('/api/user/:id', deleteUser())
    - Params include the ID being deleted.
  - app.delete('/api/hobby/:id', deleteHobby())
    - Params include the ID being deleted.
  - app.put('/api/hobby/:id, updateHobby())
    - Param targets the hobby and the body carries updated info.
  - app.put('/api/user/:id, updateUser())
    - Param targets the hobby and the body carries updated info.