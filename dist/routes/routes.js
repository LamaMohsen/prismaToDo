"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("../routes/user.route"));
const task_route_1 = __importDefault(require("../routes/task.route"));
let router = express_1.default.Router();
router.use('/users', user_route_1.default);
router.use('/tasks', task_route_1.default);
exports.default = router;
