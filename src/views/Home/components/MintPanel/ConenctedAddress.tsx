import React from 'react'

import { IoIosCloseCircleOutline } from 'react-icons/io'

import Modal from 'components/Modal/ModalWrapper'
import { WalletConnectionModal } from 'components/WalletConnection'
import { useActiveWeb3React, useModal } from 'hooks'
import { useScreenSize } from 'state/screenSize/hooks'
import { FlexRow, HoverTextWrapper } from 'styles/components'
import { shortenAddress } from 'utils'

const ConenctedWalletAddrWrapper: React.FC = () => {
  const { account } = useActiveWeb3React()
  const { isOpen, handleOpenModal } = useModal()
  const { screenWidth, isMobile } = useScreenSize()

  return (
    <>
      {account ? (
        <FlexRow rowWidth={'fit-content'} onClick={handleOpenModal}>
          <HoverTextWrapper
            color={'text2'}
            fontWeight={'medium'}
            fontSize={isMobile ? 'base' : 'sm'}
            lineHeight={`${(100 * 19) / screenWidth}vmax`}
            letterSpacing={'-0.02em'}
          >
            {`Connected to ${shortenAddress(account)}`}&nbsp;
          </HoverTextWrapper>
          <IoIosCloseCircleOutline size={18} />
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
