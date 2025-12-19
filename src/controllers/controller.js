// GET handler
const getHome = (req, res) => {
    res.send("hello from the server");
};

// POST handler
const postData = (req, res) => {
    res.json({
        recieved: req.body
    });
};

module.exports = {
    getHome,
    postData
};
