import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Dream Trips"
        description="A simple project to show the places I have traveled and the places I dream of traveling."
        canonical="http://dream-trips-anddersonrds.vercel.app"
        openGraph={{
          url: 'http://dream-trips-anddersonrds.vercel.app',
          title: 'Dream Trips',
          description:
            'A simple project to show the places I have traveled and the places I dream of traveling.',
          images: [
            {
              url: 'http://dream-trips-anddersonrds.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Dream Trips'
            }
          ],
          site_name: 'Dream Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
