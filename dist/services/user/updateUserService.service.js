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
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const users_shema_1 = require("../../schemas/users.shema");
const bcryptjs_1 = require("bcryptjs");
const updateUserService = (newUserData, idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(entities_1.User);
    const findUser = yield userRepository.findOneBy({
        id: idUser
    });
    if (newUserData === null || newUserData === void 0 ? void 0 : newUserData.password) {
        newUserData.password = (0, bcryptjs_1.hashSync)(newUserData.password, 10);
    }
    const user = userRepository.create(Object.assign(Object.assign({}, findUser), newUserData));
    yield userRepository.save(user);
    const updatedUser = users_shema_1.returnUserSchema.parse(user);
    return updatedUser;
});
exports.default = updateUserService;
