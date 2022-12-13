const express = require('express')
const cors = require('cors')
const dataservice = require('./services/dataservice')

const app = express()
app.use(cors({
    origin:'http://localhost:4200'
}))

// to parse json
app.use(express.json())
app.listen(3000,()=>{
    console.log('server started at port 3000');
})

app.get('/allHouses',(req,res)=>{
    dataservice.getHouses()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/viewHouse/:id',(req,res)=>{
    dataservice.viewHouses(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// add-house
app.post('/addHouse',(req,res)=>{
    dataservice.addHouses(
        req.body.id,
        req.body.image1,
        req.body.image2,
        req.body.image3,
        req.body.image4,
        req.body.title,
        req.body.location,
        req.body.owner,
        req.body.contact,
        req.body.cent,
        req.body.floor,
        req.body.type,
        req.body.rooms,
        req.body.bhk,
        req.body.year,
        req.body.price, 
        req.body.other
    )
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


// update
app.put('/updateHouse',(req,res)=>{
    console.log(req.body);
    dataservice.updateHouse(
        req.body.id,
        req.body.image1,
        req.body.image2,
        req.body.image3,
        req.body.image4,
        req.body.title,
        req.body.location,
        req.body.owner,
        req.body.contact,
        req.body.cent,
        req.body.floor,
        req.body.type,
        req.body.rooms,
        req.body.bhk,
        req.body.year,
        req.body.price, 
        req.body.other
    )
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
 

// delete
app.delete('/deleteHouse/:id',(req,res)=>{
    dataservice.deletehouse(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})





