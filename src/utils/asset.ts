export const formatAssetPath = (url: string): string => {
    return `${import.meta.env.BASE_URL}${url}`
}