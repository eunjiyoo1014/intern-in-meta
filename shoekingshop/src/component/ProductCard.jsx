import React from 'react'

function ProductCard() {
  return (
    <div className='productCard'>
      <div className=''>
        <img className='productImg' src="./shoes/shoes1.jpg" alt="none" />
      </div>

      <div className='productEx'>
        <h2>브랜드</h2>
        <h3>편안하고 착용감이 좋은 신발</h3>
        <h4>35000원</h4>
        <button>담기</button>  
      </div>

    </div>
  )
}

export default ProductCard