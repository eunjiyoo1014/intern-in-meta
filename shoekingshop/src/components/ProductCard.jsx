import React from 'react'

//컴포넌트 이름은 파스칼케이스로
//ex)ProductPrice
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