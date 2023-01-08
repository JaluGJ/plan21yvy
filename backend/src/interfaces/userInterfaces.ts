import { Request, Response } from "express";

export interface usersResDataInt extends Response {
  body: userData[]
}

export interface userData {
name: string,
lastname: string
phone: string,
country?: string,
email: string,
status: string,
role: string,
last_login: string
}