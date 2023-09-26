import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'Bruce Wayne' },
        { id: 2, name: 'Clark Kent' },
        { id: 3, name: 'Diana Prince' },
      ]),
    )
  }),
]
