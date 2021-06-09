export function sortByCreatedAt(array: any[]) {
    return [...array].sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1))
}
