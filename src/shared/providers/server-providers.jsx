import React from 'react'
import TranslationLayout from './translation-provider'

function ServerProviders({ children }) {
  return (
    <TranslationLayout>{children}</TranslationLayout>
  )
}

export default ServerProviders;