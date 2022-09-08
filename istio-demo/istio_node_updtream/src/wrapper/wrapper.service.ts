import { Injectable } from '@nestjs/common';
import { CustomHttpService } from '../http/httpService';

@Injectable()
export class WrapperService {
  constructor(
    private readonly http: CustomHttpService,
  ) {}

  

  async getHello(){
    
    // if (uri.includes('localhost')) {
    //   uri = uri.replace('localhost', '[::1]');
    // }
    const url = 'node-downstream-service:6000/hello-world/hello'
    return this.http.getRequest(url);
  }

  async getHi(){
    
    // if (uri.includes('localhost')) {
    //   uri = uri.replace('localhost', '[::1]');
    // }
    const url = 'node-downstream-service:6000/hello-world/hi'
    return this.http.getRequest(url);
  }
}
