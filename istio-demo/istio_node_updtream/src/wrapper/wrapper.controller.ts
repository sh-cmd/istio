import { Controller, Get, HttpCode, HttpStatus, Query, Param ,BadRequestException, NotFoundException} from '@nestjs/common';
import { WrapperService } from './wrapper.service';


@Controller('/hello-world-wrapper')
export class WrapperController {
    constructor(
        private readonly wrapperService: WrapperService
        ) {}
    
   
      

      @Get('/hello')
      getHello(){
        return this.wrapperService.getHello();
      }

      @Get('/hi')
      getHi(){
        return this.wrapperService.getHi();
      }

}