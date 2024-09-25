import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"
import { UserStatus } from "../entities/user.entity"

export class CreateUserDto {
    @IsEmail()
    email: String
    @IsString()
    @MinLength(5) 
    name: String
    status: Boolean
    @IsNotEmpty()
    password: String
}
