import React from 'react'

const Feature = ({ title, description, imageSrc }) => {
  return (
    <div className="mx-auto mx-1 my-4 flex flex-col">
      <img src={imageSrc} layout="fill" className="mx-auto md:w-full" />
      <div className=" bg-white p-2 shadow">
        <h3 className="my-4 rounded-sm text-2xl font-bold"> {title} </h3>
        <h5 className="text-md text-justify"> {description} </h5>
      </div>
    </div>
  )
}

export default Feature
