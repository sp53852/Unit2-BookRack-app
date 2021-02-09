const express = require('express');
const router = express.Router();

const books = require("../models/books.js");


//ROUTES

//GET INDEX
router.get('/', (req, res) => {
    res.render('index.ejs', {
        books: books
    });
});

//GET NEW
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

//POST CREATE
router.post('/', (req, res)=>{
    books.push(req.body);
    console.log(books);
    res.redirect('/books');
});

//GET SHOW
router.get('/:index', (req, res) => {
    res.render('show.ejs', {
    book: books[req.params.index]
    });
});

//GET EDIT
router.get('/:index/edit', function(req, res){
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			book: books[req.params.index], //the fruit object
			index: req.params.index //... and its index in the array
		}
	);
});

//UPDATE PUT
router.put('/:index', (req, res) => { //:index is the index of our fruits array that we want to change
	books[req.params.index] = req.body; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
	res.redirect('/books'); //redirect to the index page
});

//DESTROY DELETE
router.delete('/:index', (req, res) => {
	books.splice(req.params.index, 1); //remove the item from the array
	res.redirect('/books');  //redirect back to index route
});



module.exports = router;