"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let CustomHttpService = class CustomHttpService {
    async getRequest(url) {
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.data) {
                return response.data;
            }
            else {
                return null;
            }
        }
        catch (error) {
            if (error.response.data) {
                throw new common_1.HttpException(error.response.data.message, error.response.data.statusCode);
            }
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async postRequest(url, data, config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }) {
        try {
            const response = await axios_1.default.post(url, data, config);
            if (response.data) {
                return response.data;
            }
            else {
                return null;
            }
        }
        catch (error) {
            if (error.response.data) {
                throw new common_1.HttpException(error.response.data.message, error.response.data.statusCode);
            }
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async patchRequest(url, data, config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }) {
        try {
            const response = await axios_1.default.patch(url, data, config);
            if (response.data) {
                return response.data;
            }
            else {
                return null;
            }
        }
        catch (error) {
            if (error.response.data) {
                throw new common_1.HttpException(error.response.data.message, error.response.data.statusCode);
            }
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async putRequest(url, data, config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }) {
        try {
            const response = await axios_1.default.put(url, data, config);
            if (response.data) {
                return response.data;
            }
            else {
                return null;
            }
        }
        catch (error) {
            if (error.response.data) {
                throw new common_1.HttpException(error.response.data.message, error.response.data.statusCode);
            }
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteRequest(url, config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }) {
        try {
            const response = await axios_1.default.delete(url, config);
            if (response.data) {
                return response.data;
            }
            else {
                return null;
            }
        }
        catch (error) {
            if (error.response.data) {
                throw new common_1.HttpException(error.response.data.message, error.response.data.statusCode);
            }
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
CustomHttpService = __decorate([
    (0, common_1.Injectable)()
], CustomHttpService);
exports.CustomHttpService = CustomHttpService;
//# sourceMappingURL=httpService.js.map