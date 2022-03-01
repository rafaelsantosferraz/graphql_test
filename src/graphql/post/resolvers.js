import postObjectsTrivialResolvers from "./presenter/graphql/resolvers/objects_trivial";
import postQueriesResolvers        from "./presenter/graphql/resolvers/queries";
import postMutationsResolvers      from "./presenter/graphql/resolvers/mutations";

export const postResolvers = [postObjectsTrivialResolvers, postQueriesResolvers, postMutationsResolvers];

export default postResolvers;