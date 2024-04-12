import React from 'react'

//function Cards({username , btnText = "visit me"}) {
function Cards({username , btnText}) {

    //here, we're using `props` to get access from whatever elements or 
    //variables we've passed in the `Cards` components through other files
    //since , everything which are passed in the Cards comes in form of object
    //then we can directly destructure the object using `{}` & then use it in the codes

   //console.log("props" , props.obj.name)
  // console.log("props" , props.obj['age'])
  // console.log("props" , props.arr[0])
   //console.log("props" , props.obj.name)
   //console.log(props.username)
   console.log(username)


  return (
    
    <div className="relative h-[400px] w-[300px] rounded-xl mb-4">
     <img
     src = "https://images.pexels.com/photos/13024626/pexels-photo-13024626.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText}
    </button>

  </div>
</div>

  )
}

export default Cards
