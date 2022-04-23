const logger = (req, res, next) => {
    console.log("👌");
    next(); //gaat de volgende middleware aanroepen
}

module.exports = logger;