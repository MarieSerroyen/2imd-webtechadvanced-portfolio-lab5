const getAll = (req, res) => {
    if(req.query.user) {
        const response = {
            status: "success",
            data: {
                "user": req.query.user,
                "message": `GETTING message with username ${req.query.user}`
            }
        };
        res.json(response);
    };
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
        message: `GETTING message with id ${id}`,
        data: {
            messages: [
                {
                    "user": "Jane",
                    "message": "Hey there"
                }
            ]
        }
    };
    res.json(response);
};

const create = (req, res) => {
    const response = {
        status: "success",
        message: "POSTING a new message for user Jane",
        data: {
            messages: [
                {
                    "user": "Jane",
                    "message": "Hello person"
                }
            ]
        }
    };
    res.json(response);
};

const update = (req, res) => {
    const id = req.params.id;

    const response = {
        status: "success",
        message: `UPDATING a message with id ${id}`,
        data: {
            messages: [
                {
                    "user": "Jane",
                    "message": "I love it here"
                }
            ]
        }
    };
    res.json(response);
};

const deleteMessage = (req, res) => {
    const id = req.params.id;

    const response = {
        status: "success",
        message: `DELETING a message with id ${id}`,
        data: {
            messages: [
                {
                    "message": "The message was removed"
                }
            ]
        }
    };
    res.json(response);
};

//exports
module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.create = create;
module.exports.update = update;
module.exports.deleteMessage = deleteMessage;