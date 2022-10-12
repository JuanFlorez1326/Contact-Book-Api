"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.updateContact = exports.createContact = exports.getAllContacts = exports.getContactById = void 0;
const Contact_1 = __importDefault(require("../models/Contact"));
const getContactById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield Contact_1.default.findById(req.params.id);
        return res.json(contact);
    }
    catch (error) {
        return res.status(500).json({
            message: "Error getting contact.",
            error
        });
    }
});
exports.getContactById = getContactById;
const getAllContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contacts = yield Contact_1.default.find();
        return res.json(contacts);
    }
    catch (error) {
        return res.status(500).json({
            message: "Error getting contacts.",
            error
        });
    }
});
exports.getAllContacts = getAllContacts;
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, lastname, business, phone, email } = req.body;
        const newContact = new Contact_1.default({ name, lastname, business, phone, email });
        const contactSaved = yield newContact.save();
        return res.json(contactSaved);
    }
    catch (error) {
        return res.status(500).json({
            message: "Error saving contact.",
            error
        });
    }
});
exports.createContact = createContact;
const updateContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactUpdated = yield Contact_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(contactUpdated);
    }
    catch (error) {
        return res.status(500).json({
            message: "Error updating contact.",
            error
        });
    }
});
exports.updateContact = updateContact;
const deleteContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactDeleted = yield Contact_1.default.findByIdAndDelete(req.params.id);
        return res.json(contactDeleted);
    }
    catch (error) {
        return res.status(500).json({
            message: "Error deleting contact.",
            error
        });
    }
});
exports.deleteContact = deleteContact;
