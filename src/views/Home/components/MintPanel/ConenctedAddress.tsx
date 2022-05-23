import React from 'react'

import { IoIosCloseCircleOutline } from 'react-icons/io'

import Modal from 'components/Modal/ModalWrapper'
import { WalletConnectionModal } from 'components/WalletConnection'
import { useActiveWeb3React, useModal } from 'hooks'
import { FlexRow, HoverTextWrapper, TextWrapper } from 'styles/components'
import { isMobile, shortenAddress } from 'utils'

const ConenctedWalletAddrWrapper: React.FC = () => {
  const { account } = useActiveWeb3React()
  const { isOpen, handleOpenModal } = useModal()
  return (
    <>
      {account ? (
        <FlexRow rowWidth={'fit-content'} onClick={handleOpenModal}>
          <HoverTextWrapper color={'text2'} fontWeight={'semiBold'} fontSize={isMobile ? 'xl' : 'base'} letterSpacing={'-0.02em'}>
            {`Connected to ${shortenAddress(account)}`}&nbsp;
          </HoverTextWrapper>
          <IoIosCloseCircleOutline size={24} />
        </FlexRow>
      ) : (
        <></>
      )}
      <Modal isOpen={isOpen} handleOpenModal={handleOpenModal} width={isMobile ? '90%' : '24%'}>
        <WalletConnectionModal />
      </Modal>
    </>
  )
}

export default ConenctedWalletAddrWrapper
