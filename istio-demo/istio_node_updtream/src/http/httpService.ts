import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CustomHttpService {
 
  async getRequest(url: string) {
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      if(error.response.data){
        throw new HttpException(error.response.data.message, error.response.data.statusCode)
      }
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }

  async postRequest(
    url: string,
    data: any,
    config = {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ) {
    try {
      const response = await axios.post(url, data, config);
      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      if(error.response.data){
        throw new HttpException(error.response.data.message, error.response.data.statusCode)
      }
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }

  async patchRequest(
    url: string,
    data: object,
    config = {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ) {
      try {
          const response = await axios.patch(url, data, config)
          if (response.data) {
            return response.data;
          } else {
            return null;
          }
        } catch (error) {
          if(error.response.data){
            throw new HttpException(error.response.data.message, error.response.data.statusCode)
          }
          throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
  }
  async putRequest(
    url: string,
    data: object,
    config = {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ) {
      try {
          const response = await axios.put(url, data, config)
          if (response.data) {
            return response.data;
          } else {
            return null;
          }
        } catch (error) {
          if(error.response.data){
            throw new HttpException(error.response.data.message, error.response.data.statusCode)
          }
          throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
  }

  async deleteRequest(url: string, config={
    headers: {
        'Content-Type': 'application/json'
    }
}){
    try {
        const response = await axios.delete(url, config)
        if (response.data) {
          return response.data;
        } else {
          return null;
        }
      } catch (error) {
        if(error.response.data){
          throw new HttpException(error.response.data.message, error.response.data.statusCode)
        }
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
      }
}

}
