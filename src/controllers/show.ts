import express from "express"
import Show from "../models/show.js"
import isLoggedIn from "../../utilss/isloggedin.js"

const router = express.Router()

router.use(isLoggedIn)



router.get("/", async (req,res) => {
    try {
        const userName = req.payload.userName
        const shows = await Show.find({userName})
        res.json(shows)
    } catch(error){
        res.status(400).json({error})
    }
})

router.get("/:id", async (req,res) => {
    try {
        const userName = req.payload.userName
        const show = await Show.findOne({userName, _id:req.params.id})
        res.json(show)
    } catch(error){
        res.status(400).json({error})
    }
})

router.post("/", async (req,res) => {
    try {
        const userName = req.payload.userName
        console.log(req.payload)
        req.body.userName = userName
        console.log(userName)
        const show = await Show.create(req.body)
        res.json(show)
    } catch(error){
        res.status(400).json({error})
    }
})

router.put("/:id", async (req,res) => {
    try {
        const userName = req.payload.userName
        req.body.username = userName
        const show = await Show.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(show)
    } catch(error){
        res.status(400).json({error})
    }
})

router.delete("/:id", async (req,res) => {
    try {
        const userName = req.payload.userName
        req.body.username = userName
        const show = await Show.deleteOne({_id: req.params.id, userName});
        res.json(show)
    } catch(error){
        res.status(400).json({error})
    }
})


export default router