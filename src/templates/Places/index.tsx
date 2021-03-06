import { NextSeo } from 'next-seo'

import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

type ImaageProps = {
  url: string
  width: number
  height: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImaageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - Dream Trips`}
        description={
          place.description?.text ||
          'A simple project to show the places I have traveled and the places I dream of traveling.'
        }
        canonical="http://dream-trips-anddersotnrds.vercel.app"
        openGraph={{
          url: 'http://dream-trips-anddersonrds.vercel.app',
          title: `${place.name} - Dream Trips`,
          description: `${
            place.description?.text ||
            'A simple project to show the places I have traveled and the places I dream of traveling.'
          }`,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
