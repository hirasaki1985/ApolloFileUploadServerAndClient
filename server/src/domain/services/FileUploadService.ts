import {FileUpload} from '../../web_server/graphql/scalars';
import * as fs from 'fs';
import * as path from 'path';
import {createDirectory} from '../../utils/DirectoryFileUtil';

export default class FileUploadService {
  /**
   * upload
   */
  public async upload(fileUpload: FileUpload): Promise<string> {
    console.log('FileUploadService upload()');
    console.log({
      fileUpload,
    });
    try {
      // get stream
      const {createReadStream, filename} = await fileUpload;
      const stream = createReadStream();

      // set file path
      const dirPath = path.join(__dirname, `/../../../upload_files`);
      const filePath = `${dirPath}/${filename}`;

      // create directory
      createDirectory(dirPath);

      console.log('FileUploadService upload()');
      console.log({
        filePath,
      });

      // create file
      await stream.pipe(fs.createWriteStream(filePath));

      return filePath;
    } catch (e) {
      console.error(e);

      return '';
    }
  }
}
