const express = require("express");
const router = express.Router();

//const readers = require("../readers");
const Reader = require("../models").Reader;
const Book = require('../models').Book;

// GET INDEX
router.get('/', (req, res) => {
    res.render('readers/index.ejs')  
});

//GET SIGN UP FORM
router.get('/signup', (req, res)=>{
    res.render('readers/signup.ejs');
});

//GET LOGIN 
router.get('/login', (req, res)=>{
    res.render('readers/login.ejs');
});

//POST LOGIN
//  router.post('/login', (req,res)=> {                             
//     let thisReader = readers.findIndex((reader)=>
//     reader.username === req.body.username && reader.password === req.body.password)
//     res.redirect('/readers/profile/'+ thisReader)
// });
router.post("/login", (req, res) => {
    Reader.findAll({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    }).then((readers) => {
      if (readers.length > 0) {
        console.log('username/password combo is correct');
        let reader = readers[0];
        res.redirect(`/readers/profile/${reader.id}`);
      } else {
        console.log('username/password combo is not correct');
        res.redirect('/readers');
      }
    });
  });


//POST CREATE NEW READER FROM SIGNUP
// router.post('/profile', (req, res) => { 
//     readers.push(req.body);
//     //console.log(req.body);
//     //console.log(readers);
//     let readerIndex = readers.length - 1
//     res.redirect(`profile/${readerIndex}`);    
// });
router.post('/profile', (req, res) => {
    Reader.create(req.body)
    .then(newReader => {
    res.redirect(`profile/${newReader.id}`); 
    });  
});

//GET to SHOW READERS PROFILE
// router.get('/profile/:index', function (req, res){
//     //console.log(req.params.index)
// 	res.render('readers/profile.ejs', {
//         readerInfo: readers[req.params.index],        
// 		index: req.params.index  
//     })                                            
// });
// router.get('/profile/:id', (req, res) => {
//     Reader.findByPk(req.params.id) 
//     .then((reader) => {
// 	res.render('readers/profile.ejs', { reader });       
//         });
//     }); 
router.get("/profile/:id", (req, res) => {
    Reader.findByPk(req.params.id, {
      include: [
        {
          model: Book,
          attributes: ["id", "title"],
        },
      ],
    }).then((readerProfile) => {
      res.render("readers/profile.ejs", {
        reader: readerProfile,
      });
    });
  });

//EDIT PROFILE
// router.put('/profile/:index', (req, res) => {     
//     readers[req.params.index] = req.body;            
//     let index = (req.params.index)
//     //console.log(readers)
// 	res.redirect('/readers/profile/' + index);               
// });
router.put('/profile/:id', (req, res) => {     
    Reader.update (req.body, {
        where: { id: req.params.id },
        returnin: true
    }).then((reader) => res.redirect(`/readers/profile/${req.params.id}`));
});

// DELETE PROFILE
// router.delete('/:index', (req, res) => {
//     readers.splice(req.params.index, 1); 
//     console.log(readers)
// 	res.redirect('/readers');  
// });
router.delete("/:id", (req, res) => {
    Reader.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/readers"); 
    });
  });


module.exports = router;