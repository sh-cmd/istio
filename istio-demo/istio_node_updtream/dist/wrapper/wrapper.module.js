"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapperModule = void 0;
const common_1 = require("@nestjs/common");
const wrapper_service_1 = require("./wrapper.service");
const wrapper_controller_1 = require("./wrapper.controller");
const http_module_1 = require("../http/http.module");
let WrapperModule = class WrapperModule {
};
WrapperModule = __decorate([
    (0, common_1.Module)({
        imports: [http_module_1.CustomHttpModule,],
        providers: [wrapper_service_1.WrapperService],
        controllers: [wrapper_controller_1.WrapperController]
    })
], WrapperModule);
exports.WrapperModule = WrapperModule;
//# sourceMappingURL=wrapper.module.js.map