const { authenToken } = require("./authenToken");
const User = require("../models/user");


const getUsers = async (req, res) => {
    console.log("Getting")
    try {
        if (req.params._id == 0) {
            const user = await User.find({}).exec()
            res.send(user);
        } else {
            const user = await User.find({ _id: req.params._id }).exec()
            res.send(user);
        }
    } catch (e) {
        res.send({ status: 'fail', err: e });
    }
};


const saveUser = async (req, res) => {
    try {
        const data = new User({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            age: req.body.age
        });
        const result = await data.save();
        res.send({ status: 'success', result });
    } catch (e) {
        res.send({ status: 'fail', e });
    }
};


const updateUser = async (req, res) => {
    try {
        await User.findOneAndUpdate({ _id: req.body.userId }, { $set: { email: req.body.email, name: req.body.name, age: req.body.age, }, }, { new: true })
        res.send({ status: 'success' })
    } catch (e) {
        res.send({ status: 'faileee', e});
    }
};

const deleteUser = async (req, res) => {
    try {
        const result = await User.deleteOne({ _id: req.params._id })
        res.send({ status: 'success', result });
    } catch (e) {
        res.send({ status: 'fail', e });
    }
};


module.exports = {
    getUsers,
    saveUser,
    updateUser,
    deleteUser
};

