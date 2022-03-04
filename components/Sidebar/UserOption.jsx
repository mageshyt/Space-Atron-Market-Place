import React from 'react'

const styles = {
  Option:
    'my-4 flex cursor-pointer  text-gray-500  items-center w-[90%]  space-x-4 px-8 py-2 hover:bg-[#4e504e41] rounded-md ',
  wrapper: ' flex w-full select-none justify-center px-8 items-center',
}
const UserOption = ({ name, Icon }) => {
  console.log('Icon', Icon)
  return (
    <div className={styles.wrapper}>
      <div className={styles.Option}>
        {/* <Icon className="text-3xl text-gray-400" /> */}
        {Icon && <Icon className="text-2xl text-gray-400" />}
        <span>{name}</span>
      </div>
    </div>
  )
}

export default UserOption
