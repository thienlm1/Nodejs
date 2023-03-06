const Blog = require("../models/blog");


const getBlog = async (req, res) => {
    try {
        if (req.params._id == 0) {
            const blogs = await Blog.find({}).exec()
            res.send(blogs);
        } else {
            const blogs = await Blog.find({ _id: req.params._id }).exec()
            res.send(blogs);
        }
    } catch (e) {
        res.send({ status: 'fail', e });
    }
};

const saveBlog = async (req, res) => {
    try {
        const data = new Blog({
            title: req.body.title,
            description: req.body.description
        });
        const result = await data.save();
        res.send({ status: 'success', result });
    } catch (e) {
        res.send({ status: 'fail', e });
    }
};

const updateBlog = async (req, res) => {
    try {
        console.log(req.body)
        const result = await Blog.findOneAndUpdate({ _id: req.body.id }, { $set: { title: req.body.title, description: req.body.description }, }, { new: true })
        res.send({ status: 'success', result });
    } catch (e) {
        res.send({ status: 'fail', e });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const result = await Blog.deleteOne({ _id: req.params._id })
        res.send({ status: 'success', result });
    } catch (e) {
        res.send({ status: 'fail', e });
    }
};


module.exports = {
    getBlog,
    saveBlog,
    updateBlog,
    deleteBlog
};

