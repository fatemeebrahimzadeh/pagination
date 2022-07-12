import Pagination from "./Pagination"

describe('tests for Pagination helper functiton', () => {

    test("Pagination with 5 items", () => {
        let { indexOfFirstItem, pageNumber, pageCounts } = Pagination(5, 8)
        expect(indexOfFirstItem).toBe(0)
        expect(pageNumber).toBe(1)
        expect(pageCounts).toBe(1)
    })

    test("Pagination with 8 items", () => {
        let { indexOfFirstItem, pageNumber, pageCounts } = Pagination(8, 8)
        expect(indexOfFirstItem).toBe(0)
        expect(pageNumber).toBe(1)
        expect(pageCounts).toBe(1)
    })

    test("Pagination with 9 items", () => {
        let { indexOfFirstItem, pageNumber, pageCounts } = Pagination(9, 8)
        expect(indexOfFirstItem).toBe(0)
        expect(pageNumber).toBe(1)
        expect(pageCounts).toBe(2)
    })

    test("Pagination with 9 items with pageNumber 2", () => {
        let { indexOfFirstItem, pageNumber, pageCounts } = Pagination(9, 8, 2)
        expect(indexOfFirstItem).toBe(8)
        expect(pageNumber).toBe(2)
        expect(pageCounts).toBe(2)
    })

    test("Pagination with 17 items with pageNumber 2", () => {
        let { indexOfFirstItem, pageNumber, pageCounts } = Pagination(17, 8, 2)
        expect(indexOfFirstItem).toBe(8)
        expect(pageNumber).toBe(2)
        expect(pageCounts).toBe(3)
    })
})