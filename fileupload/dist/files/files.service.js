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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const aws_config_service_1 = require("../config/aws-config.service");
let FilesService = class FilesService {
    constructor(awsConfigService, configService) {
        this.awsConfigService = awsConfigService;
        this.configService = configService;
    }
    async uploadFile(file) {
        const s3 = this.awsConfigService.s3;
        const bucketName = this.configService.get('AWS_BUCKET_NAME');
        const fileKey = `${Date.now().toString()}-${file.originalname}`;
        const uploadResult = await s3
            .upload({
            Bucket: bucketName,
            Key: fileKey,
            Body: file.buffer,
        })
            .promise();
        const fileUrl = uploadResult.Location;
        return fileUrl;
    }
};
FilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aws_config_service_1.AwsConfigService,
        config_1.ConfigService])
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map