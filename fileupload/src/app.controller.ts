import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FilesService } from "./files/files.service"
import { Express } from 'express';


@Controller('/v1/api/fileUpload')
export class FileController {
    constructor(private fileUploadService: FilesService) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File): Promise {
        const uploadedFile = await this.fileUploadService.uploadFile(file.buffer, file.originalname);
        console.log('File has been uploaded,', uploadedFile.fileName);        
    }

}