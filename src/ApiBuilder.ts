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
import CopyFiles from './CopyFiles';
import chalk from 'chalk';
import CreateIndex from './CreateIndex';
import FileInfo, { TFileInfo } from './FileInfo';
import IndexList from './IndexList';
import IndexListWrapper from './IndexListWrapper';
class ApiBuilder {
    files;
    navbar;
    fileinfo: TFileInfo;
    filecontent: TJsonContent;
    _index_;
    _html_;
    async run(){
        await this.readIndex();
        await this.readFiles();
        await this.createNavBar();
        await this.folders();
        await this.build();
    }
    async readIndex(){
        this._index_ = await CreateIndex.create();
    }
    async readFiles(){
        this.files = await ReadJsonFiles.read('api');
    }
    async createNavBar(){
        this.navbar = await NavBarBuilder.create(this.files);
    }
    async folders(){
        await RemoveFiles.remove();
        await CopyFiles.copy();
    }
    async fileInfo(currentFile){
        this.fileinfo = FileInfo.get(currentFile);
        this.filecontent = await ReadJsonContent.read(`api/${currentFile}`);
    }
    async creatHtml(){
        await CreateHtml.create(`public/${this.fileinfo.href}`, this._html_.html());
    }
    async creteTemplate(){
        this._html_ = await HtmlTemplate.create();
    }
    htmlNavBar(){
        this._html_('#sbmen').html(this.navbar);
    }
    htmlApiDetail(){
        this._html_('#eptitle').html(this.filecontent.title);
        this._html_('#epdesc').html(`<p>${this.filecontent.description}</p>`);
    }
    htmlEndPoint(){
        let endpoint = EndPointPath.create(this.filecontent.method, this.filecontent.path);
        this._html_('#eppath').html(endpoint);
        this._html_('#eppathinfo').html(this.filecontent.path_info);
    }
    htmlParams(){
        if(this.filecontent.hasOwnProperty("parameters") === false || this.filecontent["parameters"] === undefined || this.filecontent["parameters"] === null) {
            this._html_('#epparams_').remove();
        }else {
            let paramsTable = ParamTableBuilder.create(this.filecontent.parameters);
            this._html_('#epparams').html(paramsTable);
        }
    }
    htmlHeader(){
        if(this.filecontent.hasOwnProperty("header") === false || this.filecontent["header"] === undefined || this.filecontent["header"] === null) {
            this._html_('#ephed_').remove();
        }else {
            let header = CodeBuilder.create(this.filecontent.header);
            this._html_('#ephed').html(header);
        }
    }
    htmlBody(){
        let body = CodeBuilder.create(this.filecontent.body);
        this._html_('#epbdy').html(body);
    }
    htmlResponse(){
        let response = CodeBuilder.create(this.filecontent.response);
        this._html_('#epres').html(response);
    }
    indexTableList: string = "";
    async build(){
        let l = this.files.length;
        for (let i = 0; i < l; i++) {
            let currentFile = this.files[i];
            console.log(chalk.blue(`Building ${currentFile}...`));
            await this.fileInfo(currentFile);
            await this.creteTemplate();
            this.htmlNavBar();
            this.htmlApiDetail();
            this.htmlEndPoint();
            this.htmlParams();
            this.htmlHeader();
            this.htmlBody();
            this.htmlResponse();
            this.indexTableList += IndexList.add(this.fileinfo, this.filecontent);
            await this.creatHtml();
            console.log(chalk.green(`Page ${this.fileinfo.href} created...`));
        }
        let indexTableListWrapped = IndexListWrapper.wrap(this.indexTableList);
        this._index_('#apiroutes').html(indexTableListWrapped);
        await CreateHtml.create(`public/index.html`, this._index_.html());
    }
}
export default ApiBuilder;