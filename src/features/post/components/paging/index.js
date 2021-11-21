import React from 'react';
import './PagingPost.scss'

const pageNums = ['1','2','3','4','5','6','7','8','9','10',]
function PagingPost(props) {
    const { paramSearch, onPrev, onNext, onPageNum } = props;

    const hanedleClickPageNum = (num) => {
      onPageNum(+num);
    }

    return (
        <div className='paging_post'>
          <button type='button' className='paging_post__btn'
            onClick={()=> onPrev()}
            disabled = {paramSearch._page === 1 ? 'disabled' : ''  }
          >Prev</button>  
          { pageNums.map( (num) => (
            <a 
              className = {paramSearch._page === +num?'paging_post__active':'' }
              key={num}
              onClick={() => hanedleClickPageNum(num)}
             > {num}</a>))
          }
          <button type='button' className='paging_post__btn'
             onClick={()=> onNext()}
             disabled = {paramSearch._page === 10 ? 'disabled' : ''  }
          >Next</button>  
        </div>
    );
}

export default PagingPost;