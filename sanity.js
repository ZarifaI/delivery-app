import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "sbahu7jw",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"  // Make sure this matches your Sanity project's API version
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;
