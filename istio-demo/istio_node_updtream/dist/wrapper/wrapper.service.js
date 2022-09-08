"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapperService = void 0;
const common_1 = require("@nestjs/common");
const httpService_1 = require("../http/httpService");
let WrapperService = class WrapperService {
    constructor(http) {
        this.http = http;
    }
    async getHello() {
        const url = 'http://localhost:6000/hello-world/hello';
        return this.http.getRequest(url);
    }
    async getHi() {
        const url = 'http://localhost:6000/hello-world/hi';
        return this.http.getRequest(url);
    }
};
WrapperService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [httpService_1.CustomHttpService])
], WrapperService);
exports.WrapperService = WrapperService;
//# sourceMappingURL=wrapper.service.js.map