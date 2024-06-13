import type { Table } from '@safidea_/engine/table'

export const contacts: Table = {
  name: 'contacts',
  fields: [
    {
      name: 'email',
      type: 'Email',
    },
    {
      name: 'subject',
      type: 'SingleLineText',
    },
    {
      name: 'message',
      type: 'LongText',
    },
  ],
}
