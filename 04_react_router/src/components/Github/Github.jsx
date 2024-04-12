import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
   const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect( ()=> {
    //     fetch('https://api.github.com/users/alpha-154')
    //     .then(response => response.json())
    //     .then( data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='flex flex-col justify-center items-center  m-4 bg-gray-600 text-white
    p-4 text-3xl'>
      Github Followers: {data.followers}
      <img className='rounded-2xl ' src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/alpha-154')
  return response.json()
}