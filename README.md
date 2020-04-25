## A basic Hacker News Clone. 

It's fully server side rendered using NextJS's latest `getStaticProps` method, which makes it performance enhanced. It has a  customised the development environment including a custom webpack. It makes heavy use of Prettier and es-lint to ensure nice code. And it's nicely accessible. 

### Tech used

1. React `16.13.1`
2. TypeScript `3.8.3`
3. Jest `25.4.0`
4. React Testing Library `10.0.2`
5. Styled-components `5.1.0`
6. NextJS `9.3.5`

### What would I do to make it better? 

1. Make it visually more appealing - Header, title? Who makes an app without a title??????
2. create a better `<Button />` component
3. Add the missing bits of information such as score, hide ect
4. Periodically refresh data only getting stories that aren't already displayed but are now in the top 10. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install && run dev
```
To run tests:

```bash
npm run test
```
