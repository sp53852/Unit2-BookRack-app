const express = require('express');
const router = express.Router();

const Book = require("../models").Book;
const Reader = require('../models').Reader;


//ROUTES

//GET INDEX
// router.get('/', (req, res) => {
//     res.render('index.ejs', {
//         books: books
//     });
// });
router.get("/", (req, res) => {
    Book.findAll().then((books) => {
      res.render("index.ejs", {
        books: books,
      });
    });
  });

//GET NEW
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

//POST CREATE
// router.post('/', (req, res)=>{
//     books.push(req.body);
//     console.log(books);
//     res.redirect('/books');
// });
router.post("/", (req, res) => {
    Book.create(req.body).then((newBook) => {
      res.redirect("/books");
    });
  });

//GET SHOW
// router.get('/:index', (req, res) => {
//     res.render('show.ejs', {
//     book: books[req.params.index]
//     });
// });
// router.get("/:id", (req, res) => {
//     Book.findByPk(req.params.id).then((book) => {
//       res.render("show.ejs", {
//         book: book,
//       });
//     });
//   });
// router.get("/:id", (req, res) => {
//     Book.findByPk(req.params.id, {
//         include : [Reader]
//     })
//     .then(book => {
//         //console.log(book.datavalues);
//         res.render('show.ejs', {
//             book: book
//         });
//     })
// })
router.get("/:id", (req, res) => {
    Book.findByPk(req.params.id, {
        include : [{
            model: Reader,
            attributes: ['name']
        }],
        attributes: ['title', 'isbn', 'publisher', 'country','img']
    })
    .then(book => {
        console.log(book)
        res.render('show.ejs', {
            book: book
        });
    })
})

//GET EDIT
// router.get('/:index/edit', function(req, res){
// 	res.render(
// 		'edit.ejs', //render views/edit.ejs
// 		{ //pass in an object that contains
// 			book: books[req.params.index], 
// 			index: req.params.index 
// 		}
// 	);
// });
router.get("/:id/edit", function (req, res) {
    Book.findByPk(req.params.id).then((book) => {
      res.render("edit.ejs", {
        book: book,
      });
    });
  });

//UPDATE PUT
// router.put('/:index', (req, res) => { 
// 	books[req.params.index] = req.body; 
// 	res.redirect('/books'); 
// });
router.put("/:id", (req, res) => {
    Book.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }).then((book) => {
      res.redirect("/books");
    });
  });

//DESTROY DELETE
// router.delete('/:index', (req, res) => {
// 	books.splice(req.params.index, 1);
// 	res.redirect('/books');  
// });
router.delete("/:id", (req, res) => {
    Book.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/books");
    });
  });



module.exports = router;