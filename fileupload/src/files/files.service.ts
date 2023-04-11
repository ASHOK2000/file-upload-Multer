// files.service.ts

import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { AwsConfigService } from 'src/config/aws-config.service';

@Injectable()
export class FilesService {
  constructor(
    private readonly awsConfigService: AwsConfigService,
    private readonly configService: ConfigService,
  ) {}

  async uploadFile(file): Promise<string> {
    const s3: S3 = this.awsConfigService.s3;
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
}
