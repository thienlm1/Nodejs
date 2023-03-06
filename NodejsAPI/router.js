const router = require("express").Router();
const { getUsers, updateUser, deleteUser, saveUser } = require("./controllers/user")
const {deleteBlog, updateBlog, saveBlog, getBlog } = require("./controllers/blog")
const { login} = require("./controllers/login");
const { authenToken} = require("./controllers/authenToken");


router.get("/users/:_id",authenToken, getUsers);

router.post("/users", saveUser);

router.put("/users/:_id", updateUser);

router.delete("/users/:_id", deleteUser);

router.get("/blogs/:_id",authenToken, getBlog);

router.post("/blogs", saveBlog);

router.put("/blogs/:_id", updateBlog);

router.delete("/blogs/:_id", deleteBlog);

router.post("/login", login);

module.exports = router;
