"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function queryBuilder(parameters) {
    let query = '';
    const keys = Object.keys(parameters);
    keys.forEach(key => {
        if (parameters[`${key}`] != undefined)
            query += `&${key}=${parameters[`${key}`]}`;
    });
    return query;
}
exports.default = queryBuilder;
//# sourceMappingURL=queryBuilder.js.map