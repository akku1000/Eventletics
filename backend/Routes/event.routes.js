import { Router } from "express";
import { getallevents, getorgevents,createEvent, deleteEvent,geteventbysearch,registerevent,unregisterevent } from "../Controller/events.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router=Router();

router.post('/createevent',protectRoute,adminRoute,createEvent);//succesfully
router.get('/getall',getallevents);
router.post('/register/:id',protectRoute,registerevent)
router.post('/unregister/:id',protectRoute,unregisterevent)

router.get('/orevents',protectRoute,adminRoute,getorgevents);
router.delete('/deleteEvent/:id',protectRoute,adminRoute,deleteEvent);
router.get('/searchevent',geteventbysearch);


export default router;


