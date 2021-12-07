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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var _a, _b, _c;
// exports.__esModule = true;
// require("regenerator-runtime/runtime");
var colors = ['blue', 'green', 'yellow', 'red'];
var sequence = [];
var clickedSequence = [];
var genius = document.querySelector('.genius');
(_a = document.querySelector('button[start]')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', startGame);
(_b = document.querySelector('button[gameover]')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', gameOver);
(_c = document.querySelectorAll('button')) === null || _c === void 0 ? void 0 : _c.forEach(function (btn) {
    btn.addEventListener('click', function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var buttonClicked, delayPromise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    buttonClicked = e.target;
                    buttonClicked.classList.add('clicked');
                    delayPromise = new Promise(function (res, rej) { setTimeout(res, 300); });
                    return [4 /*yield*/, delayPromise];
                case 1:
                    _a.sent();
                    buttonClicked.classList.remove('clicked');
                    return [2 /*return*/];
            }
        });
    }); });
});
var newRandomColor = function () {
    var randomColor = colors[Math.floor(Math.random() * 4)];
    sequence.push(randomColor);
};
function startGame() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newRandomColor();
                    alert('Vamos começar, bom jogo!');
                    return [4 /*yield*/, lightSequence(sequence)];
                case 1:
                    _a.sent();
                    genius.addEventListener('click', clickColor);
                    return [2 /*return*/];
            }
        });
    });
}
function lightColor(color) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var timeoutPromise;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    (_a = document.querySelector(".".concat(color))) === null || _a === void 0 ? void 0 : _a.classList.toggle('selected');
                    timeoutPromise = new Promise(function (res, rej) {
                        setTimeout(function () {
                            var _a;
                            (_a = document.querySelector(".".concat(color))) === null || _a === void 0 ? void 0 : _a.classList.toggle('selected');
                            res();
                        }, 1000);
                    });
                    return [4 /*yield*/, timeoutPromise];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function lightSequence(sequence) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, sequence_1, color, delayPromise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, sequence_1 = sequence;
                    _a.label = 1;
                case 1:
                    if (!(_i < sequence_1.length)) return [3 /*break*/, 6];
                    color = sequence_1[_i];
                    delayPromise = new Promise(function (res, rej) { setTimeout(res, 500); });
                    return [4 /*yield*/, delayPromise];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, lightColor(color)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, delayPromise];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function clickColor(event) {
    return __awaiter(this, void 0, void 0, function () {
        var clicked, color;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clicked = event.target;
                    if (!clicked.hasAttribute('colorPicker')) return [3 /*break*/, 2];
                    color = clicked.classList.value;
                    return [4 /*yield*/, lightColor(color)];
                case 1:
                    _a.sent();
                    clickedSequence.push(color);
                    if (clickedSequence.length == sequence.length) {
                        genius.removeEventListener('click', clickColor);
                        checkSequence();
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function checkSequence() {
    return __awaiter(this, void 0, void 0, function () {
        var delayPromise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(JSON.stringify(sequence) == JSON.stringify(clickedSequence))) return [3 /*break*/, 3];
                    clickedSequence.length = 0;
                    alert('Parabens, você acertou. Vamos para o próximo nivel!');
                    newRandomColor();
                    delayPromise = new Promise(function (res, rej) { setTimeout(res, 500); });
                    return [4 /*yield*/, delayPromise];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, lightSequence(sequence)];
                case 2:
                    _a.sent();
                    genius.addEventListener('click', clickColor);
                    return [2 /*return*/];
                case 3:
                    alert("Infelizmente voc\u00EA errou! Game Over! \n     Pontua\u00E7\u00E3o ".concat(sequence.length - 1));
                    return [2 /*return*/, gameOver()];
            }
        });
    });
}
function gameOver() {
    clickedSequence.length = 0;
    sequence.length = 0;
    genius.removeEventListener('click', clickColor);
}
