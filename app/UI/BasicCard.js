import React from 'react'
import "./basiccard.css"

const BasicCard = ({title, text}) => {
  return (
        <div className="shadow-sm basic-card p-4 rounded-lg">
            <h5 className="">{title}</h5>
            <p className="">{text}</p>
        </div>
  )
}

export default BasicCard