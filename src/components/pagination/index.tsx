import React, {useState, useEffect} from "react";
import "./index.scss"

interface PaginationProps {
  total: number;
  skip: number;
  limit: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  currentPage: number
}

const Pagination: React.FC<PaginationProps> =
  ({total, limit, skip, currentPage, setCurrentPage}) => {
    const [arrOfCurrentPages, setArrOfCurrentPages] = useState<any[]>([])
    const lastPage = limit < 10 ? Math.ceil(total / 10) : Math.ceil(total / limit);

    useEffect(() => {
      const dots = "...";
      let numberOfPages = []
      for (let i = 1; i <= lastPage; i++) {
        numberOfPages.push(i);
      }

      let tempNumberOfPages = [...arrOfCurrentPages]

      if (currentPage < 6 && lastPage <= 6) {
        tempNumberOfPages = [...numberOfPages.slice(0, 6)]
      } else if (currentPage === 5) {
        tempNumberOfPages = [...numberOfPages.slice(currentPage - 3, currentPage + 2), dots, lastPage]
      } else if (currentPage < 6) {
        tempNumberOfPages = [...numberOfPages.slice(0, 5), dots, lastPage];
      } else if (currentPage > lastPage - 5) {
        tempNumberOfPages = [...numberOfPages.slice(lastPage - 6, lastPage)]
      } else if (currentPage >= 6) {
        tempNumberOfPages = [...numberOfPages.slice(currentPage - 3, currentPage + 2), dots, lastPage]
      }

      setArrOfCurrentPages(tempNumberOfPages)
    }, [currentPage])

    if (lastPage < 2 || isNaN(lastPage)) {
      return null;
    }

    return (
      <div className="pagination">
        {currentPage >= 5 ? <span className="pagination-item" onClick={() => setCurrentPage(1)}>в начало</span> : null}
        {arrOfCurrentPages.map((el, index) => {
          if (el === "...") {
            return <span className="pagination-dots" key={index}>{el}</span>
          }
          return <span
            className={el === currentPage ? "pagination-item pagination-active-item" : "pagination-item"}
            onClick={() => setCurrentPage(el)} key={index}>{el}</span>

        })}
        {currentPage > lastPage - 3 || lastPage <= 6 ? null :
          <span className="pagination-item" onClick={() => setCurrentPage(currentPage + 1)}>дальше</span>}
      </div>
    )
  }

export default Pagination;