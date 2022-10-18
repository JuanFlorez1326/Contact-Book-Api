import { Request, Response } from "express";
import Contact from "../models/Contact";

export const getContactById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const contact = await Contact.findById(req.params.id);
        return res.json(contact);
    } catch (error) {
        return res.status(500).json({
            message: "Error getting contact.",
            error
        });
    }
}; 

export const getAllContacts = async (req: Request, res: Response): Promise<Response> => {
    try {
        const contacts = await Contact.find();
        return res.json(contacts);
    } catch (error) {
        return res.status(500).json({
            message: "Error getting contacts.",
            error
        });
    }
};

export const createContact = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, lastname, business, phone, email, role, photo } = req.body;
        const newContact = new Contact({ name, lastname, business, phone, email, role, photo });
        const contactSaved = await newContact.save();
        return res.json(contactSaved);
    } catch (error) {
        return res.status(500).json({
            message: "Error saving contact.",
            error
        });
    }
};

export const updateContact = async (req: Request, res: Response): Promise<Response> => {
    try {
        const contactUpdated = await Contact.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(contactUpdated);
    } catch (error) {
        return res.status(500).json({
            message: "Error updating contact.",
            error
        });
    }
};

export const deleteContact = async (req: Request, res: Response): Promise<Response> => {
    try {
        const contactDeleted = await Contact.findByIdAndDelete(req.params.id);
        return res.json(contactDeleted);
    } catch (error) {
        return res.status(500).json({
            message: "Error deleting contact.",
            error
        });
    }
};