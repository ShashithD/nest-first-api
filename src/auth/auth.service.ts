import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthServive {
    login() {
        return {'msg': 'I have signedup'}
    }

    signup() {
        return {'msg': 'I have signedin'}
    }
}