import React, { useContext } from 'react'
import { SpaceAtronContext } from '../../context/SpaceAtronContext'
const style = { fileInput: 'hidden' }
const SelectImage = () => {
  const { setRenderImage, setMintImage } = useContext(SpaceAtronContext)
  return (
    <div>
      <label className="cursor-pointer" htmlFor="image-upload">
        {/* // ! now we are going to  select image */}
        <input
          type="file"
          className={style.fileInput}
          id="image-upload"
          accept=".jpg, .jpeg, .png"
          placeholder="Image URL"
          onChange={(e) => {
            const render = new FileReader()
            if (e.target.files[0]) {
              render.readAsDataURL(e.target.files[0])
            }
            render.onload = (File) => {
              setRenderImage(event.target.result)
            }
            setMintImage(e.target.files[0])
          }}
        />
        Select File
      </label>
    </div>
  )
}

export default SelectImage
