import styles from "../Pagination.module.css"

const Pagination = ({totalPages, currentPage, next, previous, gotoPage}) => {
    const pagesAvailable = []
    for (let i = 1; i <= totalPages; i++) {
        pagesAvailable.push(i)
    }

    return (
        <>
            {
                currentPage === totalPages ?
                    <div className={styles.endOfResults}>End of Results</div> : ""
            }
            <div className={styles.paginationContainer}>
                {
                    totalPages && currentPage > 1 ?
                        <button
                            onClick={() => previous()}
                            className={styles.paginationNav}>
                            Prev
                        </button>
                        :
                        ""
                }
                {
                    pagesAvailable.map(page => (
                        <button
                            key={page}
                            onClick={() => gotoPage(page)}
                            className={styles.paginationNav}
                        >
                            {page}
                        </button>
                    ))
                }
                {
                    currentPage < totalPages ?
                        <button
                            onClick={() => next()}
                            className={styles.paginationNav}>
                            Next
                        </button>
                        :
                        ""
                }
            </div>
        </>
    )
}

export default Pagination