

export const getTotalPage  = ( totalCount, limit ) => {
    return Math.ceil( totalCount / limit )
}