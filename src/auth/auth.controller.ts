import { Controller, Post } from "@nestjs/common";
import { AuthServive } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private authServive: AuthServive) {
    }

    @Post('signup')
    signup () {
        return this.authServive.signup();
    }

    @Post('signin')
    signin() {
        return this.authServive.login();
    }
}