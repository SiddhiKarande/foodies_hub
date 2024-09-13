"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZBase = exports.BaseSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const mongoose_1 = require("mongoose");
class BaseSchema extends mongoose_1.Schema {
    constructor(schema) {
        super(Object.assign(Object.assign({}, schema), { isDeleted: {
                type: Boolean,
                require: true,
                default: false,
            }, createdBy: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "users",
            }, updatedBy: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "users",
            } }), { timestamps: true });
    }
}
exports.BaseSchema = BaseSchema;
exports.ZBase = zod_1.default.object({
    _id: zod_1.default.instanceof(mongoose_1.Types.ObjectId).optional(),
    isDeleted: zod_1.default.boolean().optional(),
    createdAt: zod_1.default.date().optional(),
    updatedAt: zod_1.default.date().optional(),
    createdBy: zod_1.default.string().optional(),
    updatedBy: zod_1.default.string().optional(),
});
