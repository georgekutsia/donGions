const express =  require("express");
const router =  express.Router();
const upload = require("./multer.config")
const cards = require("../constrollers/card.controller")
const note = require("../constrollers/note.controller")
const auth = require("../constrollers/auth.controller")
const secure = require("../middlewares/secure.mid")
const owned = require("../middlewares/note.auth.mid")
const creator = require("../middlewares/card.auth.mid")
// upload.single("image"),
router.post("/register", auth.register)
router.post("/authenticate", auth.authenticate)
router.delete("/logout", auth.logout)

router.get("/cards",  secure.isAuthenticated, cards.list)
router.post("/cards",  secure.isAuthenticated, cards.create)
router.get("/cards/:id",  secure.isAuthenticated, owned.isOwnedByUser, cards.detail)
router.patch("/cards/:id", secure.isAuthenticated,   cards.edit)
router.delete("/cards/:id", secure.isAuthenticated, cards.delete)

router.get("/notes",  secure.isAuthenticated, note.list);
router.post("/notes", secure.isAuthenticated,  note.create);
router.get("/notes/:id", secure.isAuthenticated, owned.isOwnedByUser, note.detail);
router.patch("/notes/:id", secure.isAuthenticated, owned.isOwnedByUser, note.edit);
router.delete("/notes/:id", secure.isAuthenticated, owned.isOwnedByUser, note.delete);

router.get("/rules", secure.isAuthenticated, note.list)

router.post("/profile", auth.profile )
router.post("/equipped",  )



module.exports = router