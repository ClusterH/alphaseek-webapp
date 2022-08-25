import React, { useCallback } from 'react'

import { SUPPORTED_WALLETS } from 'config/constants'
import { connectorsByName } from 'config/constants/web3Connectors'
import { useActiveWeb3React, useWalletConnect } from 'hooks'
import { FlexColumn, FlexRow, HoverTextWrapper, TextWrapper } from 'styles/components'
import { isMobile } from 'utils'

import { useWalletConnectionModal } from '../Header/hook'

import { OptionItem } from '.'

const WalletConnectionOptionList: React.FC = () => {
  const { account, connector } = useActiveWeb3React()
  const { connect, handleChangeWalletView } = useWalletConnectionModal()
  const { disconnect } = useWalletConnect()

  const handleSwitch = useCallback(async () => {
    const provider = window.ethereum

    if (provider) {
      try {
        await provider.request!({
          method: 'wallet_requestPermissions',
          params: [
            {
              eth_accounts: {},
            },
          ],
        })
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

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
        <TextWrapper lineHeight={'120%'} letterSpacing={'-0.01em'} margin={'0 0 24px'}>
          {'Connect Your wallet'}
        </TextWrapper>
      </FlexRow>
      <FlexColumn gap={'24px'}>{getOptions()}</FlexColumn>
      {account && (
        <FlexRow justifyContent={'flex-end'} margin={'12px 0 0'} gap={'24px'}>
          {connector === connectorsByName.injected && (
            <HoverTextWrapper onClick={handleSwitch} fontSize={'sm'}>
              {'Switch account'}
            </HoverTextWrapper>
          )}

          <HoverTextWrapper onClick={disconnect} fontSize={'sm'}>
            {'Disconnect'}
          </HoverTextWrapper>
        </FlexRow>
      )}
    </FlexColumn>
  )
}

export default WalletConnectionOptionList
