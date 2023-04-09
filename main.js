"use strict";
// use LangChain to chat with my journal
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var fs = require("fs");
var chains_1 = require("langchain/chains");
var embeddings_1 = require("langchain/embeddings");
var llms_1 = require("langchain/llms");
var text_splitter_1 = require("langchain/text_splitter");
var vectorstores_1 = require("langchain/vectorstores");
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var model, text, textSplitter, docs, vectorStore, qaChain, answer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                model = new llms_1.OpenAI({});
                text = fs.readFileSync("journal.txt", "utf8");
                textSplitter = new text_splitter_1.RecursiveCharacterTextSplitter({ chunkSize: 1000 });
                return [4 /*yield*/, textSplitter.createDocuments([text])];
            case 1:
                docs = _a.sent();
                return [4 /*yield*/, vectorstores_1.HNSWLib.fromDocuments(docs, new embeddings_1.OpenAIEmbeddings())];
            case 2:
                vectorStore = _a.sent();
                qaChain = chains_1.VectorDBQAChain.fromLLM(model, vectorStore);
                return [4 /*yield*/, qaChain.call({
                        input_documents: docs,
                        query: "You are a financial analyst for Microsoft. What is their key risk factors?",
                    })];
            case 3:
                answer = _a.sent();
                console.log(answer);
                return [2 /*return*/];
        }
    });
}); };
exports.main = main;
