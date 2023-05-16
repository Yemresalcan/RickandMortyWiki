import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'
const Pagination = ({info,pageNumber,setPageNumber}) => 
{
return  <ReactPaginate 

className='pagination justify-content-center gap-3'
nextLabel="Next Page"
forcePage={pageNumber === 1 ? 0 : pageNumber -1} 
previousLabel="Previous Page"
nextClassName={`${styles.btn}`}
previousClassName={`${styles.btn}`}
pageClassName='page-item'
pageLinkClassName='page-link'
onPageChange={(data) => {
  setPageNumber(data.selected +1);
}}
pageCount={info?.pages}/>
}

export default Pagination;
 