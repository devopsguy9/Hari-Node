import { DataAccess } from "./../../config/DataAccess";
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
class AccountSchema {
    static get schema() {
        var schema = mongoose.Schema({
            password: {
                type: String,
                required: true
            },
            role: {
                type: String,
                required: true
            },
            profile: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Profile',
                required: true,
            },
            status: {
                type: Boolean,
                default: true
            }
        });
        return schema;
    }
}
const Account = mongooseConnection.model("Account", AccountSchema.schema);
export { Account };
//# sourceMappingURL=Account.js.map