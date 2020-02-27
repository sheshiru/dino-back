const Show = require('../models/Show');

module.exports.listShow = async (req, res) => {
    try {
        let shows;
        let query = {}
        if (Object.values(req.query).length > 0) {
            for (let i in req.query) {
                regex = new RegExp(req.query[i])
                query[i] = { $regex: regex, $options: 'i' }
            }
            shows = await Show.find(query, 'title');
        } else {
            shows = await Show.find();
        }
        res.json(shows);
    } catch (err) { throw err }

}
module.exports.getShow = (req, res) => {
    Show.findOne({ _id: req.params.id })
        .then(shows => res.status(200).json(shows))
        .catch(error => console.log(error));
}
module.exports.createShow = (req, res) => {
    let show = new Show(req.body);
    show.save();
    res.status(200).json(show);
}
module.exports.updateShow = (req, res) => {
    Show.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(shows => res.status(200).json(shows))
        .catch(error => console.log(error));
}
module.exports.deleteShow = (req, res) => {
    Show.findOneAndDelete({ _id: req.params.id })
        .then(shows => res.status(200).json(shows))
        .catch(error => console.log(error));
}
module.exports.addDate = (req, res) => {
    query = { $push: { dates: { meetUp: req.body.date } } };
    Show.findOneAndUpdate({ _id: req.params.id }, query, { new: true })
        .then(show => res.status(200).json(show))
        .catch(error => console.log(error));
}
module.exports.delDate = (req, res) => {
    let id = req.body.idDate;
    Show.findOne(
        { 'dates._id': id },
        function (err, result) {
            let date = result.dates.id(id)
            if (date.reservations.length === 0) {
                date.remove();
                result.save()
                .then(result => res.status(200).json(result))
                .catch(error => console.log(error));
                
            }
        }
    )
}
module.exports.addResa = async (req, res) => {}
