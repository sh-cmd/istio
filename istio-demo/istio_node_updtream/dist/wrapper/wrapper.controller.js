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
exports.WrapperController = void 0;
const common_1 = require("@nestjs/common");
const wrapper_service_1 = require("./wrapper.service");
let WrapperController = class WrapperController {
    constructor(wrapperService) {
        this.wrapperService = wrapperService;
    }
    getHello() {
        return this.wrapperService.getHello();
    }
    getHi() {
        return this.wrapperService.getHi();
    }
};
__decorate([
    (0, common_1.Get)('/hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WrapperController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/hi'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WrapperController.prototype, "getHi", null);
WrapperController = __decorate([
    (0, common_1.Controller)('/hello-world-wrapper'),
    __metadata("design:paramtypes", [wrapper_service_1.WrapperService])
], WrapperController);
exports.WrapperController = WrapperController;
//# sourceMappingURL=wrapper.controller.js.map