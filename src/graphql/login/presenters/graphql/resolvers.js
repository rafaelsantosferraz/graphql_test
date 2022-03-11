import loginQueriesResolvers from "./resolvers/queries";
import loginObjectsTrivialResolvers from "./resolvers/objects";
import loginMutationsResolvers from "./resolvers/mutations";

export const loginTypeDefs = [loginQueriesResolvers, loginObjectsTrivialResolvers, loginMutationsResolvers];
export default loginTypeDefs;
