export const formatAssetPath = (url: string): string => {
    return import.meta.env.BASE_URL + (url[0] == '/' ? url.slice(1) : url); 
}