import { CustomHttpService } from '../http/httpService';
export declare class WrapperService {
    private readonly http;
    constructor(http: CustomHttpService);
    getHello(): Promise<any>;
    getHi(): Promise<any>;
}
