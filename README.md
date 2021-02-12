# Project Overview
## Unit 2 project: Book Rack full stack application
- Problem: I have a huge collection of books in my house and want to organize in one place.
- General App Idea/Purpose: An app that allows me to organize it all in one place.
- Who would use it: Book readers/collectors of my family.

## Project Links
- GitHub Repository: https://github.com/sp53852/Unit2-BookRack-app
- Deployment: https://bookreaderssharmila.herokuapp.com/books

## Wireframes
- ![informed optimism?](img/IMG_0597.jpg)
- ![informed optimism?](img/IMG_0598.jpg)

## Requirements
## Technical Requirements
MVP - Full stack application - Book Rack App

### Technologies Used
- Node.js, Express, EJS 
- JavaScript, HTML and CSS
- REST, CRUD
- Postgres
- Sequelize Associations

### Dependencies
- package.json
    - ejs
    - express
    - method_override
    - sequelize
    - sequelize-cli

### MVC File Structure
- Models: book.js and reader.js
- Views: book views( index.ejs, show.ejs,new.ejs and edit.ejs), readers(index.ejs, Signup.ejs,login.ejs  and profile.ejs)
- Controllers: booksController, readersController

### User Stories
1. As a user, I want to be able to see all books in the book rack.

2. As a user, I want to be able to see specific book from the book rack.

3.  As a user, I want to be able to see specific book details from the book rack.

4. As a user, I want to be able to add new book to the book rack.

5. As a user, I want to be able to edit book details of a particular book.

6. As a user, I want to be able to delete book from book rack.

7. As a user, I want to be able to create an account to use the app.

8. As a user, I want to be able to get and see specific reader account details.

9. As a user, I want to be able to login to my account with existing login credentials.

10. As a user, I want to be able to get and update my account details.

11. As a user, I want to be able to delete my account.

11. As a user, I want to be able to add book(s) to the book rack using my account.

12. As a user, I want to see list of all the books that I have added to the book rack on my account.

### Code Snippet
- router.post("/", (req, res) => {
    Book.create(req.body).then((newBook) => {
      res.redirect("/books");
    });
  });

### Future Improvements
1. Would like to add manay to many association between Book and Author.
2. Would like to add encrypted passwords & an authorization flow for sign up/log in functionality.