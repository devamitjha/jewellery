import React from 'react'

const Loading = () => {
  return (
    [1,2,3,4,5,6,7,8,9,10,11,12].map((item)=>{
        return(
            <div className="card ph-item" key={item}>
                <div className="ph-col-12">
                    <div className="ph-picture"></div>
                    <div className="ph-row">
                        <div className="ph-col-4"></div>
                        <div className="ph-col-8 empty"></div>
                        <div className="ph-col-6"></div>
                        <div className="ph-col-6 empty"></div>
                        <div className="ph-col-12"></div>
                    </div>
                </div>
            </div>
        )
      })
  )
}

export default Loading