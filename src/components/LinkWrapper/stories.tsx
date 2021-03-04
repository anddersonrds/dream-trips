import { Story, Meta } from '@storybook/react/types-6-0'

import LinkWrapper, { LinkWrapperProps } from '.'

export default {
  title: 'LinkWrapper',
  component: LinkWrapper
} as Meta

export const Default: Story<LinkWrapperProps> = (args) => (
  <LinkWrapper {...args} />
)

Default.args = {
  children: 'Anything',
  href: '/my-link'
}
