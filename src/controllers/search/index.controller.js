const { DB_SEARCH } = require('../../database/index');

const postSearch = async (req, res) => {
    try {
        const newSearch = new DB_SEARCH(req.body);
        const result = await newSearch.save();

        console.log(result);
        res.status(200).json({});
    } catch (error) {
        res.status(error).json({'MessageBody':'An Error occured, try later'});
    }
}

module.exports = {
    postSearch
}