import Video from '../models/video';

export default {

    // async findOne(req, res, next) {
    //     const video = await Video.findOne({ _id: req.params._id });
    //     if (!video) return next();
    //     return res.status(200).send({ data: video });
    // },
    //
    // async findAll(req, res) {
    //     const videos = await Video.find().sort({ createdAt: 'desc' });
    //     return res.status(200).send({ data: videos });
    // },
    //
    // async create(req, res) {
    //     const video = await new Video({
    //         title: req.body.title
    //     }).save();
    //
    //     return res.status(201).send({ data: video, message: `Video was created` });
    // },
    //
    // async update(req, res, next) {
    //     const video = await Video.find({ '_id': req.params._id });
    //     if (!video) return next();
    //
    //     video.title = req.body.title;
    //     await video.save();
    //
    //     return res.status(200).send({ data: video, message: `Video was updated` });
    // },
    //
    // async remove(req, res, next) {
    //     const video = await Video.findOne({ '_id': req.params._id });
    //     if (!video) return next();
    //     await video.remove();
    //
    //     return res.status(200).send({ message: `Video was removed` });
    // },
    //
    // async findRandom(req, res) {
    //     const videos = await Video.find().sort({ createdAt: 'desc' });
    //     const video = videos [Math.floor(Math.random() * videos.length)];
    //     return res.status(200).send({ data: video });
    // }
    async searchByTags(req, res) {
        const videos = await Video.find({tags: { $regex: req.query.search}});
        return res.status(200).send({ data: videos });
    },

    async addRecord(req, res) {
        const video = await new Video({
                title: req.body.title,
                url: req.body.url,
                description: req.body.description,
                tags: req.body.tags
        }).save();
        return res.status(201).send({ data: video, message: `Video was created` });
    },
    async randomRecords(req, res) {
        const videos = await Video.find();
        const video = videos.sort( () => .5 - Math.random()).slice(0, 5);
        // res.setHeader('Content-Type', 'application/json');
        // res.render('home', { title: 'Express', data: JSON.stringify(json_code) });
        res.send(video);
        // return res.status(200).render('home');
    },

    async searchRecords(req, res) {
        const videos = await Video.find({title: { $regex: req.query.search}});
        return res.status(200).send({data: videos});
    },

    async updateRecord(req, res, next) {
        const video = await Video.findOne({ _id: req.params.id });
            if (!video) return next();
        console.log(req.params.title);
            video.title = req.query.title;
            await video.save();

            return res.status(200).send({ data: video, message: `Video was updated` });
    },

    async addRecordForm(req, res) {
        res.render('addVideo');
    },

    async updateRecordForm(req, res) {
        res.render('updateVideo');
    }
}