import React from "react";

export default function Pagination({ page, totalPages, onPageChange }) {
    return (
        <div className="pagination">
            <button
                className="classicBtn"
                onClick={() => onPageChange(page - 1)}
                disabled={page <= 1}
            >
                Prev
            </button>
            <span>
                Page {page} / {totalPages}
            </span>
            <button
                className="classicBtn"
                onClick={() => onPageChange(page + 1)}
                disabled={page >= totalPages}
            >
                Next
            </button>
        </div>
    );
}
