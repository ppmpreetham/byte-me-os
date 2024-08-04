import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {

  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Byte me OS'
      }
    }
  },
  logo: <span>Byte me OS</span>,
  project: {
    link: 'https://github.com/ppmpreetham',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/ppmpreetham/tab-os',
  footer: {
    text: 'MIT 2024 © Preetham Pemmasani',
  },
  head: <meta name="description" content={"Beginner OS Tutorial"} />,
}


export default config
