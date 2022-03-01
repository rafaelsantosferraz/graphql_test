import postMutations from "./presenter/graphql/typedefs/mutations";
import postQueries from "./presenter/graphql/typedefs/queries";
import postObjects from "./presenter/graphql/typedefs/objects";

export const postTypeDefs = [postMutations, postQueries, postObjects];
export default postTypeDefs;