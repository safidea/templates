import type { Page } from '@safidea_/engine/page'

export const home: Page = {
  name: 'home',
  path: '/',
  head: {
    title: 'My company',
    metas: [
      {
        name: 'description',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  body: [
    {
      component: 'Header',
      title: {
        text: 'My company',
      },
      links: [
        {
          label: 'Product',
          href: '#product',
        },
        {
          label: 'Mission',
          href: '#mission',
        },
        {
          label: 'Team',
          href: '#team',
        },
      ],
      buttons: [
        {
          label: 'Contact us',
          href: '#contact',
        },
      ],
    },
    {
      component: 'Hero',
      title: {
        text: 'We have a solution to your problem.',
      },
      paragraph: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      buttons: [
        {
          label: 'Contact us',
          href: '/#contact',
        },
      ],
    },
    {
      component: 'Features',
      id: 'product',
      title: {
        text: 'Our product',
      },
      paragraph: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      features: [
        {
          title: {
            text: 'Feature 1',
          },
          paragraph: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          icon: {
            type: 'RocketLaunch',
          },
        },
        {
          title: {
            text: 'Feature 2',
          },
          paragraph: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          icon: {
            type: 'Gift',
          },
        },
        {
          title: {
            text: 'Feature 3',
          },
          paragraph: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          icon: {
            type: 'ArrowTrendingUp',
          },
        },
        {
          title: {
            text: 'Feature 4',
          },
          paragraph: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          icon: {
            type: 'UserCircle',
          },
        },
        {
          title: {
            text: 'Feature 5',
          },
          paragraph: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          icon: {
            type: 'UserPlus',
          },
        },
        {
          title: {
            text: 'Feature 6',
          },
          paragraph: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          icon: {
            type: 'ChartBarSquare',
          },
        },
      ],
    },
    {
      component: 'CTA',
      id: 'mission',
      title: {
        text: 'Mission',
      },
      paragraph: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      buttons: [
        {
          label: 'Contact us',
          href: '/#contact',
        },
      ],
    },
    {
      component: 'Container',
      id: 'team',
      children: [
        {
          component: 'Title',
          text: 'Membres',
          align: 'center',
          size: 'xl',
        },
        {
          component: 'Image',
          src: '/profile.webp',
          alt: 'Jane Doe',
          rounded: 'xl',
          align: 'center',
        },
        {
          component: 'Title',
          text: 'Jane Doe',
          size: 'xs',
          align: 'center',
        },
        {
          component: 'Paragraph',
          text: 'Founder',
          align: 'center',
        },
        {
          component: 'Paragraph',
          text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
          align: 'center',
          size: 'lg',
        },
      ],
    },
    {
      component: 'Form',
      id: 'contact',
      title: {
        text: 'Contact us',
      },
      paragraph: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      action: '/api/table/contacts',
      method: 'POST',
      inputs: [
        {
          name: 'email',
          label: 'Email',
          type: 'email',
        },
        {
          name: 'subject',
          label: 'Subject',
        },
        {
          name: 'message',
          label: 'Message',
          type: 'textarea',
        },
      ],
      buttons: [
        {
          label: 'Envoyer',
          type: 'submit',
        },
      ],
      successMessage: 'Message sent successfully.',
    },
    {
      component: 'Footer',
      title: {
        text: 'My compnay',
      },
      paragraph: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      links: [
        {
          label: 'Product',
          href: '#product',
        },
        {
          label: 'Mission',
          href: '#mission',
        },
        {
          label: 'Team',
          href: '#team',
        },
      ],
      copyright: '© 2024 My company',
    },
  ],
}
