import { CanActivate, ExecutionContext } from '@nestjs/common';
import { tokenService } from '../service/tokenService';
import { userRepository } from 'src/DB/repository/user.Repository';
export declare class AuthGuard implements CanActivate {
    private tokenService;
    private readonly userRepository;
    constructor(tokenService: tokenService, userRepository: userRepository);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
