const getAll = (req, res) => {
    const response = {
        status: "success",
        message: "GETTING messages",
        data: {
            messages: [
                {
                    "user": "John",
                    "message": "Hello"
                },
                {
                    "user": "Jane",
                    "message": "Hey there"
                }
            ]
        }
    };
    res.json(response);
};

const getId = (req, res) => {
    const id = req.params.id;

    const response = {
        status: "success",
        message : `GETTING message with id ${id}`,
        data : {
            messages : [
                {
                    "user" : "Jane",
                    "message" : "Hey there"
                }
            ]
        }
    };
    res.json(response);
};

const create = (req, res) => {
    const response = {
        status : "success",
        message : "POSTING a new message for user Jane",
        data : {
            messages : [
                {
                    "user" : "Jane",
                    "message" : "Hello person"
                }
            ]
        }
    };
    res.json(response);
};

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.create = create;