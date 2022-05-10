import React from 'react'

import { SUPPORTED_WALLETS } from 'config/constants'
import { connectorsByName } from 'config/constants/web3Connectors'
import { useActiveWeb3React } from 'hooks'
import { FlexColumn, FlexRow, TextWrapper } from 'styles/components'
import { isMobile } from 'utils'

import { useWalletConnectionModal } from '../Header/hook'

import { OptionItem } from '.'

const WalletConnectionOptionList: React.FC = () => {
  const { connector } = useActiveWeb3React()
  const { connect, handleChangeWalletView } = useWalletConnectionModal()

  function getOptions() {
    const isMetaMask = window.ethereum && window.ethereum.isMetaMask
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key]

      if (isMobile) {
        if (option.mobile) {
          return (
            <OptionItem
              key={key}
              name={option.name}
              iconUrl={option.iconURL}
              handleClick={() => {
                option.connector !== connector &&
                  (option.href ? window.open(option.href, '_blank') : connect(option.connector, option.connectorId))
              }}
              href={option.href}
              isActive={option.connector && option.connector === connector}
            />
          )
        }

        return null
      }

      if (option.connector === connectorsByName.injected) {
        if (!(window.web3 || window.ethereum)) {
          return (
            <OptionItem
              key={key}
              name={'Install Metamask'}
              iconUrl={option.iconURL}
              handleClick={() => window.open('https://metamask.io/', '_blank')}
              href={'https://metamask.io/'}
            />
          )
        } else if (option.name === 'MetaMask' && !isMetaMask) {
          return null
        }
      }

      return (
        !isMobile &&
        !option.mobileOnly && (
          <OptionItem
            key={key}
            name={option.name}
            iconUrl={option.iconURL}
            handleClick={() => {
              option.connector === connector
                ? handleChangeWalletView('account')
                : option.href
                ? window.open(option.href, '_blank')
                : connect(option.connector, option.connectorId)
            }}
            isActive={option.connector === connector}
            href={option.href}
          />
        )
      )
    })
  }

  return (
    <FlexColumn>
      <FlexRow>
        <TextWrapper fontFamily={'title'} lineHeight={20} letterSpacing={'-0.01em'} margin={'0 0 24px'}>
          {'Connect Your wallet'}
        </TextWrapper>
      </FlexRow>
      <FlexColumn gap={'24px'}>{getOptions()}</FlexColumn>
    </FlexColumn>
  )
}

export default WalletConnectionOptionList
