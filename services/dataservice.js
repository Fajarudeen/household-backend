const db = require('./db')
// to get all products
const getHouses = () => {
    return db.House.find().then((result) => {

        if (result) {
            return {
                status: true,
                statusCode: 200,
                house: result
            }
        }
        else {
            return {
                status: false,
                statusCode: 404,
                message: 'house not found'
            }
        }
    })
}

// to get one products
const viewHouses = (id) => {
    return db.House.findOne({ id }).then((result) => {

        if (result) {
            return {
                status: true,
                statusCode: 200,
                house: result
            }
        }
        else {
            return {
                status: false,
                statusCode: 404,
                message: 'house not found'
            }
        }
    })
}

// add house
const addHouses=(
    id,
    image1,
    image2,
    image3,
    image4,
    title,
    location,
    owner,
    contact,
    cent,
    floor,
    type,
    rooms,
    bhk,
    year,
    price, 
    other
)=>{
    return db.House.findOne({
        id
    }).then((result)=>{
        console.log(result);
        if (result) {
            return {
                message: 'house already exist',
                status: false,
                statusCode: 404
            }
        }
        else{
            let newhouse=new db.House({
                id,
                image1:image1,
                image2,
                image3,
                image4,
                title,
                location,
                owner,
                contact,
                cent,
                floor,
                type,
                rooms,
                bhk,
                year,
                price, 
                other
            })
            newhouse.save()
            return {
                message:"house added succesfully",
                status: true,
                statusCode: 200
            }

        }
    })
}

//  updateHouse
const updateHouse=(
    id,
    image1,
    image2,
    image3,
    image4,
    title,
    location,
    owner,
    contact,
    cent,
    floor,
    type,
    rooms,
    bhk,
    year,
    price, 
    other
)=>{
    return db.House.updateOne({
        id
    })   
    .then((result)=>{
        if (result) {
            let updatehouse=db.House({
                id,
                image1:image1,
                image2,
                image3,
                image4,
                title,
                location,
                owner,
                contact,
                cent,
                floor,
                type,
                rooms,
                bhk,
                year,
                price, 
                other
            })
            updatehouse.save()
            return{
                message:"house updated succesfully",
                status: true,
                statusCode: 200
            }
        }
        else{
            return {
                message: 'failed to update',
                status: false,
                statusCode: 404
            }
        }
    })
}


// delete

const deletehouse=(id)=>{
    return db.House.deleteOne({
        id
    }).then((result)=>{
        if (result) {
            return {
                status: true,
                statusCode: 200,
                message: 'house deleted succesfully'
            }
        }
        else{
            return {
                message:'it cant be deleted',
                status:false,
                statusCode:404
            }
        }
    })
}

module.exports = {
    getHouses, viewHouses,addHouses,deletehouse,updateHouse
}