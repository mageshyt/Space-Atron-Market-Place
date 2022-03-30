import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Modal from 'react-modal'
import LoginModal from './LoginModal'
import { SpaceAtronContext } from '../../context/SpaceAtronContext'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10,11,13,0.75)',
  },
}
Modal.setAppElement('#__next')
const ModalBox = ({ isOpen }) => {
  const { appStatus, SetAppStatus } = useContext(SpaceAtronContext)
  console.log('appStatus 👉', appStatus)
  const router = useRouter()
  return (
    <div>
      <Modal
        isOpen={!!router.query.login}
        contentLabel="Example Modal"
        style={customStyles}
        onRequestClose={() => {
          router.push('/')
        }}
      >
        <LoginModal />
      </Modal>
    </div>
  )
}

export default ModalBox
