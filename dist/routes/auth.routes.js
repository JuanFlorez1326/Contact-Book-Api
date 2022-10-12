"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const contact_controller_1 = require("../controllers/contact.controller");
const router = (0, express_1.Router)();
// Routes
router.post('/signup', user_controller_1.signup);
router.post('/signin', user_controller_1.signin);
router.get('/contact', contact_controller_1.getAllContacts);
router.get('/contact/:id', contact_controller_1.getContactById);
router.post('/contact/add', contact_controller_1.createContact);
router.put('/contact/:id', contact_controller_1.updateContact);
router.delete('/contact/:id', contact_controller_1.deleteContact);
exports.default = router;
