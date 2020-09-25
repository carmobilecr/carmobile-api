const { DB_CAR } = require('../../database/index');

const postCar = async (req, res) => {
    try {
        const newCar = new DB_CAR(req.body);
        const result = await newCar.save();

        console.log(result);
        res.status(200).json({});

    } catch (error) {
        res.status(status.error).json({'MessageBody':'An Error occured, try later'});
    }
    
}

module.exports = {
    postCar
}