import userQueries from "./presenter/graphql/typedefs/queries";
import userObjects from "./presenter/graphql/typedefs/objects";
import userMutations from "./presenter/graphql/typedefs/mutations";

export const userTypeDefs = [userQueries, userObjects, userMutations];
export default userTypeDefs;