
## Next.js RealEstate app based on https://www.youtube.com/watch?v=y47gYvXchXM 

## Data set
Going to use rapidApi to feed data into this app `https://rapidapi.com/` visit site and sign up using gmail or something.

## creating app

Node needs to be above 12.x. Install nvm and using nvm:

```
nvm install  v14.18.2
mkdir realestate 
cd realestate
npx create-next-app@latest ./

```

using Visual studio code, inside this folder run:
```
code . 
```

Now in the GUI right click in file area on the LHS and choose new file call file `.babelrc`
.babelrc file:
```
{
  "presets": ["next/babel"],
  "plugins": []
}
```

inside console / terminal run:
 ```
 
 npm install @chakra-ui/react @emotion/react @emotion/styled axios framer-motion millify nprogress react-horizontal-scrolling-menu

 ```

Using visual studio clean up pages/index.js (should end up like this):
```

export default function Home() {
  return (
    <div>
    
    </div>
  )
}

```








This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# nextjs-realestate
