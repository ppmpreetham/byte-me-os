import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { p } from 'nextra/dist/types-c8e621b7'

const config: DocsThemeConfig = {

  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Byte on OS'
      }
    }
  },
  logo: <span><img src="/Logo_transparent.png" width="150px" /></span>,
  project: {
    link: 'https://github.com/ppmpreetham',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/ppmpreetham/tab-os',
  footer: {
    text: <p>MIT 2024 © <a href="https://www.preetham.top/">Preetham Pemmasani</a></p>,
  },
  head: 
  <>
  <meta name="description" content={"Beginner OS Tutorial"} />
  <link rel="shortcut icon" href="Logo_transparent.png" type="image/x-icon" />
  </>
  ,
  editLink: { component: null },
}


export default config
