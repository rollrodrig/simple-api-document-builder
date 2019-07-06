import fs from 'fs';
import ReadJsonFiles from './ReadJsonFiles';
import ReadJsonContent, { TJsonContent } from './ReadJsonContent';
import HtmlTemplate from './HtmlTemplate';
import NavBarBuilder from './NavBarBuilder';
import CreateHtml from './CreateHtml';
import ParamTableBuilder from './ParamTableBuilder';
import CodeBuilder from './CodeBuilder';
import EndPointPath from './EndPointPath';
import RemoveFiles from './RemoveFiles';
import CreatePublic from './CreatePublic';
import CopyFiles from './CopyFiles';
import chalk from 'chalk';

class ApiBuilder {
    static async run(){
        let files = await ReadJsonFiles.read('api');
        let navbar = await NavBarBuilder.create(files);
        await RemoveFiles.remove();
        await CopyFiles.copy();
        for (let i = 0; i < files.length; i++) {
            let currentFile = files[i];
            console.log(chalk.blue(`Building ${currentFile}...`));
            let fileinfo = NavBarBuilder.cleanName(currentFile);
            let filecontent: TJsonContent = await ReadJsonContent.read(`api/${currentFile}`);
            
            let $ = await HtmlTemplate.create();
            $('#sbmen').html(navbar);

            $('#eptitle').html(filecontent.title);
            $('#epdesc').html(`<p>${filecontent.description}</p>`);

            let endpoint = EndPointPath.create(filecontent.method, filecontent.path);
            $('#eppath').html(endpoint);
            $('#eppathinfo').html(filecontent.path_info);

            let paramsTable = ParamTableBuilder.create(filecontent.parameters);
            $('#epparams').html(paramsTable);

            let header = CodeBuilder.create(filecontent.header);
            $('#ephed').html(header);

            let body = CodeBuilder.create(filecontent.body);
            $('#epbdy').html(body);
            
            let response = CodeBuilder.create(filecontent.response);
            $('#epres').html(response);
            
            await CreateHtml.create(`public/${fileinfo.href}`, $.html());
            console.log(chalk.green(`Page ${fileinfo.href} created...`));
        }
    }
}
export default ApiBuilder;