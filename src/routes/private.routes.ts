import { Router } from "express";
import passport from "passport";
const router = Router();

router.get('/contact', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.send('Contact page');
});


export default router;