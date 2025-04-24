import { JwtService, JwtSignOptions, JwtVerifyOptions } from "@nestjs/jwt";
export declare class tokenService {
    private jwtService;
    constructor(jwtService: JwtService);
    generateToken(payload: any, options: JwtSignOptions): string;
    VerifyToken(payload: any, options: JwtVerifyOptions): any;
}
