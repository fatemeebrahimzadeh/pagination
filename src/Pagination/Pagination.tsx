export interface IInitialData {
    indexOfFirstItem: number
    pageNumber: number
    pageCounts: number
}

const Pagination = (itemsCount: number, perPageCount: number, pageNumber: number = 1): IInitialData => {
    return {
        indexOfFirstItem: (pageNumber - 1) * perPageCount,
        pageNumber: pageNumber,
        pageCounts: Math.ceil(itemsCount / perPageCount)
    }
}

export default Pagination