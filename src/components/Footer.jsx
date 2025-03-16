import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Diğer alışveriş seçenekleri: {' '}
            Yakınınızda{' '}
            <span className="underline text-blue">
              bir Apple Store bulun {' '}
            </span>
            veya {' '}
            <span className="underline text-blue">
              başka bir yetkili satıcı bulun.
            </span>{' '}
          </p>
          <p className="font-semibold text-gray text-xs">
            Veya {' '}
            <span className="underline text-blue">
              00800 448 829 873
            </span>
            {' '}ya da{' '}
            <span className="underline text-blue">
              0216 282 15 11
            </span>
            {' '}
            numaralı telefonu arayın.
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Telif Hakkı @ 2025 Apple Inc. Tüm hakları saklıdır.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
