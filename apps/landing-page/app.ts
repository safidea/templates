import type { App } from '@safidea_/engine'
import { home } from './pages/home'
import { newContact } from './automations/newContact'
import { contacts } from './tables/contacts'

export const app: App = {
  name: 'Landing Page',
  features: [
    {
      name: 'landing-page',
      pages: [home],
      automations: [newContact],
      tables: [contacts],
    },
  ],
  server: {
    port: '$PORT',
  },
  mailer: {
    host: '$MAILER_HOST',
    port: '$MAILER_PORT',
    user: '$MAILER_USER',
    pass: '$MAILER_PASS',
    from: '$MAILER_FROM',
  },
  database: {
    url: '$DATABASE_URL',
    type: '$DATABASE_TYPE',
  },
}
