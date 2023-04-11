/// <reference types="multer" />
import { FilesService } from "./files/files.service";
export declare class FileController {
    private fileUploadService;
    constructor(fileUploadService: FilesService);
    uploadFile(file: Express.Multer.File): Promise;
}
