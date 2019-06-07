import { fa } from './fa'
import { fe } from './fe'
import { flags } from './flags'
import { payments } from './payments'
import { simpleLineIcons } from './simple-line-icons'

export const icons = [
  {
    title: 'Feather Icons',
    icons: fe,
    iconClass: 'fe',
    url: 'https://feathericons.com',
    description: 'Simply beautiful open source icons.',
  },
  {
    title: 'Font Awesome',
    icons: fa,
    iconClass: 'fa',
    url: 'http://fontawesome.io',
    description: 'Powered by Font Awesome set.',
  },
  {
    title: 'Simple Line Icons',
    icons: simpleLineIcons,
    iconClass: 'icon',
    url: 'http://simplelineicons.com/',
    description: 'Simple and Minimal Line Icons',
  },
  {
    title: 'Flags',
    icons: flags,
    iconClass: 'flag',
  },
  {
    title: 'Payments',
    icons: payments,
    iconClass: 'payment',
  },
]
