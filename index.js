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
var _this = this;
var colors = ['blue', 'yellow', 'green', 'red'];
var sequence = [];
var clickedSequence = [];
var sounds = {
    blue: new Audio("audio/blue.mp3"),
    green: new Audio("audio/green.mp3"),
    red: new Audio("audio/red.mp3"),
    yellow: new Audio("audio/yellow.mp3"),
    wrong: new Audio("audio/wrong.wav"),
    correct: new Audio("audio/correct.mp3")
};
var _configurations = {
    speed: 1000,
    gameOn: false
};
var genius = document.querySelector('.genius');
var startButton = document.querySelector('button[start]');
var score = document.querySelector('.scoreboard h2');
function flashScore() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delayPromise(100)];
                case 1:
                    _a.sent();
                    score.style.display = 'none';
                    return [4 /*yield*/, delayPromise(100)];
                case 2:
                    _a.sent();
                    score.style.display = 'initial';
                    return [2 /*return*/];
            }
        });
    });
}
function clickAnimation(event) {
    return __awaiter(this, void 0, void 0, function () {
        var startButton, delayPromise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    startButton = event.target;
                    startButton.classList.add('clicked');
                    delayPromise = new Promise(function (res) { setTimeout(res, 600); });
                    return [4 /*yield*/, delayPromise];
                case 1:
                    _a.sent();
                    startButton.classList.remove('clicked');
                    return [2 /*return*/];
            }
        });
    });
}
var delayPromise = function (ms) { return new Promise(function (res, rej) { setTimeout(res, ms); }); };
startButton.addEventListener('click', startGame);
startButton.addEventListener('click', clickAnimation);
var newRandomColor = function () { return __awaiter(_this, void 0, void 0, function () {
    var randomColor;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                randomColor = colors[Math.floor(Math.random() * 4)];
                sequence.push(randomColor);
                return [4 /*yield*/, delayPromise(500)];
            case 1:
                _a.sent();
                return [4 /*yield*/, lightSequence(sequence)];
            case 2:
                _a.sent();
                genius.addEventListener('click', clickColor);
                return [2 /*return*/];
        }
    });
}); };
function startGame() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!_configurations.gameOn)
                        return [2 /*return*/];
                    return [4 /*yield*/, lightSequence(colors, 100)];
                case 1:
                    _a.sent();
                    score.textContent = '00';
                    return [4 /*yield*/, flashScore()];
                case 2:
                    _a.sent();
                    newRandomColor();
                    return [2 /*return*/];
            }
        });
    });
}
function lightColor(color) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    (_a = document.querySelector(".".concat(color))) === null || _a === void 0 ? void 0 : _a.classList.toggle('selected');
                    sounds["".concat(color)].play();
                    return [4 /*yield*/, delayPromise(300)];
                case 1:
                    _c.sent();
                    (_b = document.querySelector(".".concat(color))) === null || _b === void 0 ? void 0 : _b.classList.toggle('selected');
                    return [2 /*return*/];
            }
        });
    });
}
function lightSequence(sequence, time) {
    if (time === void 0) { time = _configurations.speed; }
    return __awaiter(this, void 0, void 0, function () {
        var _i, sequence_1, color;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, sequence_1 = sequence;
                    _a.label = 1;
                case 1:
                    if (!(_i < sequence_1.length)) return [3 /*break*/, 5];
                    color = sequence_1[_i];
                    return [4 /*yield*/, delayPromise(time)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, lightColor(color)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
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
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(JSON.stringify(sequence) == JSON.stringify(clickedSequence))) return [3 /*break*/, 2];
                    sounds.correct.play();
                    score.textContent = sequence.length.toString().length == 1 ? "0".concat(sequence.length) : sequence.length.toString();
                    return [4 /*yield*/, flashScore()];
                case 1:
                    _a.sent();
                    clickedSequence.length = 0;
                    newRandomColor();
                    return [2 /*return*/];
                case 2:
                    sounds.wrong.play();
                    return [2 /*return*/, gameOver()];
            }
        });
    });
}
function gameOver() {
    flashScore();
    clickedSequence.length = 0;
    sequence.length = 0;
    genius.removeEventListener('click', clickColor);
}
function gameOnOff(event) {
    if (_configurations.gameOn) {
        gameOver();
        score.textContent = '';
    }
    else {
        var score_1 = document.querySelector('.scoreboard h2');
        score_1.textContent = '00';
        flashScore();
    }
    var powerButton = event.target;
    powerButton.classList.toggle('game-on');
    powerButton.children[0].classList.toggle('game-on');
    _configurations.gameOn = !_configurations.gameOn;
}
function setSpeed(event, speed) {
    var speedButtons = document.querySelectorAll('.speed-button button');
    speedButtons.forEach(function (btn) { return btn.classList.remove('active'); });
    var clickedButton = event.target;
    clickedButton.classList.add('active');
    _configurations.speed = speed;
}
