import React from 'react'

function Avatar(currentUser) {
  return (
    <div className="h-9 w-9 mx-2 object-center object-cover rounded-full">
      <img src={`https://avatars.dicebear.com/api/open-peeps/${
          currentUser?.email
        }.svg`} alt="" />
    </div>
  )
}

export default Avatar
