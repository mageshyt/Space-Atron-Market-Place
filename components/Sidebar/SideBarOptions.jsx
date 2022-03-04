import React from 'react'
const styles = {
  ActiveOption:
    'my-2 flex cursor-pointer items-center w-[90%]  justify-center space-x-4 px-8 py-4  bg-[#4e504e41] rounded-md ',
  Option:
    'my-2 flex cursor-pointer items-center w-[90%] justify-center space-x-4 px-8 py-4 hover:bg-[#4e504e41] rounded-md ',
}
const SideBarOptions = ({ Icon, Icon2, name, active, setActive }) => {
  console.log('Icon2', Icon2)
  return (
    <div className=" flex w-full select-none justify-center px-6">
      {/* name and icon */}
      <div
        onClick={() => setActive(name)}
        className={name === active ? styles.ActiveOption : styles.Option}
      >
        <div>
          {name === active && Icon2 ? (
            <Icon2 className="text-3xl text-white" />
          ) : (
            <Icon className="text-3xl text-gray-400" />
          )}
        </div>

        <span className={name === active ? 'text-white' : 'text-gray-500'}>
          {name}
        </span>
      </div>
    </div>
  )
}

export default SideBarOptions
