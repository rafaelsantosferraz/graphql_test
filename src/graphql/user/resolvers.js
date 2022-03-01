import userQueriesResolvers from "./presenter/graphql/resolvers/queries";
import userObjectsTrivialResolvers from "./presenter/graphql/resolvers/objects";
import userMutationsResolvers from "./presenter/graphql/resolvers/mutations";

export const userTypeDefs = [userQueriesResolvers, userObjectsTrivialResolvers, userMutationsResolvers];
export default userTypeDefs;
