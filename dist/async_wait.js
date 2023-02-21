"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function hello2() {
    return new Promise(resolve => resolve("Hello World2"));
}
const text2 = hello2();
text2.then(response => console.log(response));
// bu kullanım yerine async kullanarak promise yapmış oluruz.
function _async() {
    return __awaiter(this, void 0, void 0, function* () {
        return "async promise";
    });
}
const __async = _async();
__async.then(response => console.log(response));
//AWait sadece async fonksiyonların içinde çalışır. 
(() => __awaiter(void 0, void 0, void 0, function* () {
    function _await() {
        return __awaiter(this, void 0, void 0, function* () {
            return "await";
        });
    }
    const _res = yield _await(); // bir islemin bitmesini bekletmek icin await kullanıyoruz.
    console.log(_res);
}))();
