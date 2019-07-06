"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadJsonFiles_1 = __importDefault(require("./ReadJsonFiles"));
const ReadJsonContent_1 = __importDefault(require("./ReadJsonContent"));
const HtmlTemplate_1 = __importDefault(require("./HtmlTemplate"));
const NavBarBuilder_1 = __importDefault(require("./NavBarBuilder"));
const CreateHtml_1 = __importDefault(require("./CreateHtml"));
const ParamTableBuilder_1 = __importDefault(require("./ParamTableBuilder"));
const CodeBuilder_1 = __importDefault(require("./CodeBuilder"));
const EndPointPath_1 = __importDefault(require("./EndPointPath"));
const RemoveFiles_1 = __importDefault(require("./RemoveFiles"));
const CopyFiles_1 = __importDefault(require("./CopyFiles"));
const chalk_1 = __importDefault(require("chalk"));
class ApiBuilder {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.readFiles();
            yield this.createNavBar();
            yield this.folders();
            yield this.build();
        });
    }
    readFiles() {
        return __awaiter(this, void 0, void 0, function* () {
            this.files = yield ReadJsonFiles_1.default.read('api');
        });
    }
    createNavBar() {
        return __awaiter(this, void 0, void 0, function* () {
            this.navbar = yield NavBarBuilder_1.default.create(this.files);
        });
    }
    folders() {
        return __awaiter(this, void 0, void 0, function* () {
            yield RemoveFiles_1.default.remove();
            yield CopyFiles_1.default.copy();
        });
    }
    fileInfo(currentFile) {
        return __awaiter(this, void 0, void 0, function* () {
            this.fileinfo = NavBarBuilder_1.default.cleanName(currentFile);
            this.filecontent = yield ReadJsonContent_1.default.read(`api/${currentFile}`);
        });
    }
    creatHtml() {
        return __awaiter(this, void 0, void 0, function* () {
            yield CreateHtml_1.default.create(`public/${this.fileinfo.href}`, this._html_.html());
        });
    }
    creteTemplate() {
        return __awaiter(this, void 0, void 0, function* () {
            this._html_ = yield HtmlTemplate_1.default.create();
        });
    }
    htmlNavBar() {
        this._html_('#sbmen').html(this.navbar);
    }
    htmlApiDetail() {
        this._html_('#eptitle').html(this.filecontent.title);
        this._html_('#epdesc').html(`<p>${this.filecontent.description}</p>`);
    }
    htmlEndPoint() {
        let endpoint = EndPointPath_1.default.create(this.filecontent.method, this.filecontent.path);
        this._html_('#eppath').html(endpoint);
        this._html_('#eppathinfo').html(this.filecontent.path_info);
    }
    htmlParams() {
        if (this.filecontent.hasOwnProperty("parameters") === false || this.filecontent["parameters"] === undefined || this.filecontent["parameters"] === null) {
            this._html_('#epparams_').remove();
        }
        else {
            let paramsTable = ParamTableBuilder_1.default.create(this.filecontent.parameters);
            this._html_('#epparams').html(paramsTable);
        }
    }
    htmlHeader() {
        if (this.filecontent.hasOwnProperty("header") === false || this.filecontent["header"] === undefined || this.filecontent["header"] === null) {
            this._html_('#ephed_').remove();
        }
        else {
            let header = CodeBuilder_1.default.create(this.filecontent.header);
            this._html_('#ephed').html(header);
        }
    }
    htmlBody() {
        let body = CodeBuilder_1.default.create(this.filecontent.body);
        this._html_('#epbdy').html(body);
    }
    htmlResponse() {
        let response = CodeBuilder_1.default.create(this.filecontent.response);
        this._html_('#epres').html(response);
    }
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            let l = this.files.length;
            for (let i = 0; i < l; i++) {
                let currentFile = this.files[i];
                console.log(chalk_1.default.blue(`Building ${currentFile}...`));
                yield this.fileInfo(currentFile);
                yield this.creteTemplate();
                this.htmlNavBar();
                this.htmlApiDetail();
                this.htmlEndPoint();
                this.htmlParams();
                this.htmlHeader();
                this.htmlBody();
                this.htmlResponse();
                yield this.creatHtml();
                console.log(chalk_1.default.green(`Page ${this.fileinfo.href} created...`));
            }
        });
    }
}
exports.default = ApiBuilder;
