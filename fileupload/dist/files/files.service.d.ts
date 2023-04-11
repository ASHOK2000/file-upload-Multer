import { ConfigService } from '@nestjs/config';
import { AwsConfigService } from 'src/config/aws-config.service';
export declare class FilesService {
    private readonly awsConfigService;
    private readonly configService;
    constructor(awsConfigService: AwsConfigService, configService: ConfigService);
    uploadFile(file: any): Promise<string>;
}
