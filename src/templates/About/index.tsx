import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Wrapper>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Dream Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Materiam vero
        rerum et copiam apud hos exilem, apud illos uberrimam reperiemus.
        Claudii libidini, qui tum erat summo ne imperio, dederetur. Cum autem
        negant ea quicquam ad beatam vitam pertinere, rursus naturam relinquunt.
        Illud quaero, quid ei, qui in voluptate summum bonum ponat, consentaneum
        sit dicere. An dubium est, quin virtus ita maximam partem optineat in
        rebus humanis, ut reliquas obruat? Quae hic rei publicae vulnera
        inponebat, eadem ille sanabat. Si quicquam extra virtutem habeatur in
        bonis. Duo Reges: constructio interrete.
      </p>
    </S.Body>
  </S.Wrapper>
)

export default AboutTemplate
