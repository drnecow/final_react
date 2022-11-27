import React, { useEffect } from 'react';
import './Paginator.css';

function Paginator( { numPages, updateFunc }) {
  let longNumPages = numPages > 6;
  let lastPageExists = numPages > 5;

  let tmp = [];
  for (let i = 0; i < Math.min(5, numPages); i++)
    tmp.push(i);

  const [startPage, setStartPage] = React.useState(1);
  const [endPage, setEndPage] = React.useState(Math.min(5, numPages));
  const [selectedPage, setSelectedPage] = React.useState(1);

  const [skipEnabled, setSkipEnabled] = React.useState(longNumPages);

  useEffect(() => {
        updateFunc(selectedPage);

        if (endPage === numPages - 1 || selectedPage === numPages)
            setSkipEnabled(false);
        else
            setSkipEnabled(true);

        if (selectedPage === numPages && lastPageExists) {
          setEndPage(numPages - 1);
          setStartPage(numPages - 5);
        }

    }, [selectedPage]);

  function switchPage(pageNumber) {
    setSelectedPage(pageNumber);
  }

  function skipPages(pagesLeft) {
    setStartPage(startPage + pagesLeft);
    setEndPage(endPage + pagesLeft);
    setSelectedPage(selectedPage + pagesLeft);
  }

  function scrollBack() {
    if (selectedPage === startPage || selectedPage === startPage + 1) {
      if (startPage - 3 > 0) {
        setStartPage(startPage - 3);
        setEndPage(endPage - 3);
        setSelectedPage(selectedPage === startPage ? selectedPage - 1 : selectedPage - 2); 
      }
      else {
        if (longNumPages) {
          setStartPage(1);
          setEndPage(5);
          setSelectedPage(1);
        }
        else {
          setSelectedPage(selectedPage - 1);
        }
      }
    }
    else {
      setSelectedPage(selectedPage - 1);
    }
  }
  
  function scrollForward() {
    if (selectedPage === endPage || selectedPage === endPage - 1) {
      if (numPages - 1 - endPage >= 3) {
        setEndPage(endPage + 3);
        setStartPage(startPage + 3);
        setSelectedPage(selectedPage === endPage ? selectedPage + 1 : selectedPage + 2);
      }
      else {
        if (longNumPages && selectedPage !== numPages - 1) {
          setEndPage(numPages - 1);
          setStartPage(numPages - 5);
          setSelectedPage(numPages - 1);
        }
        else {
          setSelectedPage(selectedPage + 1);
        }
      }
    }
    else {
      setSelectedPage(selectedPage + 1);
    }
  }

  function isSelected(i) {
    if (selectedPage === i)
        return true;
    else
        return false;
  }

  return (
    <div className='page-links-wrap'>
        <span className={`page-link ${selectedPage === 1 ? 'selected' : ''}`} onClick={ scrollBack }>←</span>
        { tmp.map((i) => <span key={ startPage + i } onClick={ () => switchPage(startPage + i) }
            className={`page-link ${isSelected(startPage + i) ? 'selected' : ''}`}>{ startPage + i }</span>) }
        { longNumPages && (<span className={`page-link ${skipEnabled? '' : 'selected'}` } onClick={ () => skipPages(Math.min(4, numPages - endPage - 1)) }>...</span>) }
        { lastPageExists && 
            (<span key={ numPages } className={`page-link ${selectedPage === numPages? 'selected' : ''}`} onClick={ () => switchPage(numPages) }>{ numPages }</span>) }
        <span className={`page-link ${selectedPage === numPages ? 'selected' : ''}`} onClick={ scrollForward }>→</span>
    </div>
  )
}

export default Paginator;