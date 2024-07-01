import App from '@safidea_/engine'

const app = new App()
const url = await app.start({
  name: 'Hello world',
  features: [
    {
      name: 'website',
      pages: [
        {
          name: 'home',
          path: '/',
          body: [
            {
              component: 'Title',
              text: 'Hello world!',
            },
          ],
        },
      ],
    },
  ],
})

console.log(`Hello world server started at ${url}`)
