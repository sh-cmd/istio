export declare class CustomHttpService {
    getRequest(url: string): Promise<any>;
    postRequest(url: string, data: any, config?: {
        headers: {
            'Content-Type': string;
        };
    }): Promise<any>;
    patchRequest(url: string, data: object, config?: {
        headers: {
            'Content-Type': string;
        };
    }): Promise<any>;
    putRequest(url: string, data: object, config?: {
        headers: {
            'Content-Type': string;
        };
    }): Promise<any>;
    deleteRequest(url: string, config?: {
        headers: {
            'Content-Type': string;
        };
    }): Promise<any>;
}
