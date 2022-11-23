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
        console.log(selectedPage);

        if (endPage === numPages - 1)
            setSkipEnabled(false);
        else
            setSkipEnabled(true);
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
    if (startPage > 1) {
        setStartPage(startPage - 1);
        setEndPage(endPage - 1);
    }
    setSelectedPage(selectedPage - 1);
  }

  function scrollForward() {
    // console.log(endPage);
    // // if (selectedPage === endPage - 1) {
    // //     setEndPage(Math.min(selectedPage + 2, numPages - 1));
    // //     setStartPage(endPage - 4);
    // // }
    if (endPage < numPages - 1) {
        setStartPage(startPage + 1);
        setEndPage(endPage + 1);
    }
    setSelectedPage(selectedPage + 1);
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
        { longNumPages && (<span className={`page-link ${skipEnabled? '' : 'selected'}` } onClick={ () => skipPages(Math.min(3, numPages - endPage - 1)) }>...</span>) }
        { lastPageExists && 
            (<span key={ numPages } className={`page-link ${selectedPage === numPages? 'selected' : ''}`} onClick={ () => switchPage(numPages) }>{ numPages }</span>) }
        <span className={`page-link ${selectedPage === numPages ? 'selected' : ''}`} onClick={ scrollForward }>→</span>
    </div>
  )
}

export default Paginator;