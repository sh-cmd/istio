import { WrapperService } from './wrapper.service';
export declare class WrapperController {
    private readonly wrapperService;
    constructor(wrapperService: WrapperService);
    getHello(): Promise<any>;
    getHi(): Promise<any>;
}
