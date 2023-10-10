import express from "express"
import Show from "../models/show.js"
import isLoggedIn from "../../utilss/isloggedin.js"

const router = express.Router()




router.get("/",isLoggedIn, async (req,res) => {
    try {
        const userName = req.payload.userName
        const shows = await Show.find({userName})
        res.json(shows)
    } catch(error){
        res.status(400).json({error})
    }
})

router.get("/:id",isLoggedIn, async (req,res) => {
    try {
        const userName = req.payload.userName
        const show = await Show.findOne({userName, _id:req.params.id})
        res.json(show)
    } catch(error){
        res.status(400).json({error})
    }
})

router.post("/",isLoggedIn, async (req,res) => {
    try {
        req.body.userName = req.payload.userName;
        const show = await Show.create(req.body);
        console.log(show)
        res.json(show);
      } catch (error) {
        res.status(400).json({ error });
      }
    // try {
    //     const userName = req.payload.userName
    //     console.log(req.payload)
    //     req.body.userName = userName
    //     console.log(userName)
    //     const show = await Show.create(req.body)
    //     res.json(show)
    // } catch(error){
    //     res.status(400).json({error})
    // }
})

router.put("/:id",isLoggedIn, async (req,res) => {
    try {
        const userName = req.payload.userName
        req.body.username = userName
        const show = await Show.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(show)
    } catch(error){
        res.status(400).json({error})
    }
})

router.delete("/:id",isLoggedIn, async (req,res) => {
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