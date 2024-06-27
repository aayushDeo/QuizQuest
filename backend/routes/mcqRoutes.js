const express = require("express");
const router = express.Router();
const {getMCQ,  createMCQ, updateMCQ, deleteMCQ} = require("../controllers/mcqController")

const validateToken = require('../middlewares/validateTokenHandler');

router.use(validateToken);
router.route("/").get(getMCQ).post(createMCQ);
router.route("/:id").put(updateMCQ).delete(deleteMCQ);

module.exports = router;