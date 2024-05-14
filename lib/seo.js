// Define the getSEO function to prepare SEO related data
export function getSEO(title, description) {
    return {
        title,
        description,
        metaTags: {
            charset: 'utf-8',
            name: {
                viewport: 'width=device-width, initial-scale=1',
                description
            }
        }
    };
}
