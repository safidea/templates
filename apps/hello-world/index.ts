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

console.log(`Server started at ${url}`)
