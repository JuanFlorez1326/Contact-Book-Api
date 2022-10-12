import { Router } from "express";
import { signin, signup } from "../controllers/user.controller";
import { getContactById, getAllContacts, createContact, updateContact, deleteContact } from "../controllers/contact.controller";
const router = Router();

// Routes
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/contact', getAllContacts);
router.get('/contact/:id', getContactById);
router.post('/contact/add', createContact);
router.put('/contact/:id', updateContact);
router.delete('/contact/:id', deleteContact);

export default router;