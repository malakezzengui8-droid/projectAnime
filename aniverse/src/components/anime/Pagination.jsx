function Pagination({ currentPage, setCurrentPage }) {
  return (
    <div className="pagination">

      <button
        className="btn btn-secondary"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      <span>Page {currentPage}</span>

      <button
        className="btn btn-primary"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;