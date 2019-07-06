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
    static run() {
        return __awaiter(this, void 0, void 0, function* () {
            let files = yield ReadJsonFiles_1.default.read('api');
            let navbar = yield NavBarBuilder_1.default.create(files);
            yield RemoveFiles_1.default.remove();
            yield CopyFiles_1.default.copy();
            for (let i = 0; i < files.length; i++) {
                let currentFile = files[i];
                console.log(chalk_1.default.blue(`Building ${currentFile}...`));
                let fileinfo = NavBarBuilder_1.default.cleanName(currentFile);
                let filecontent = yield ReadJsonContent_1.default.read(`api/${currentFile}`);
                let $ = yield HtmlTemplate_1.default.create();
                $('#sbmen').html(navbar);
                $('#eptitle').html(filecontent.title);
                $('#epdesc').html(`<p>${filecontent.description}</p>`);
                let endpoint = EndPointPath_1.default.create(filecontent.method, filecontent.path);
                $('#eppath').html(endpoint);
                $('#eppathinfo').html(filecontent.path_info);
                let paramsTable = ParamTableBuilder_1.default.create(filecontent.parameters);
                $('#epparams').html(paramsTable);
                let header = CodeBuilder_1.default.create(filecontent.header);
                $('#ephed').html(header);
                let body = CodeBuilder_1.default.create(filecontent.body);
                $('#epbdy').html(body);
                let response = CodeBuilder_1.default.create(filecontent.response);
                $('#epres').html(response);
                yield CreateHtml_1.default.create(`public/${fileinfo.href}`, $.html());
                console.log(chalk_1.default.green(`Page ${fileinfo.href} created...`));
            }
        });
    }
}
exports.default = ApiBuilder;
