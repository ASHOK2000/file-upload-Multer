import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
export declare class AwsConfigService {
    private readonly configService;
    s3: S3;
    constructor(configService: ConfigService);
}
