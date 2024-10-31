// This following file is used in producation grade application because we don't want to give access on the jsx files because that can be sometimes messy and finding the error is going to almost take insufficient amount of time. One more thing something the url doesn't word and finding it would be a hazzard that's why we make a conf file in the src directory to make everything structured. 
const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL), 
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID), 
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID), 
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID), 
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)

}

export default conf 