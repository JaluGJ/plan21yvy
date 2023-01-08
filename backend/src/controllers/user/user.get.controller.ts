import { Request, Response, Router } from "express";
import { usersResDataInt } from "../../interfaces/userInterfaces";

module.exports = {
  getAllUsers: async (req:Request, res:usersResDataInt) => {
    try {
      
    } catch (error) {
      return res.json(error)
    }
  }
}