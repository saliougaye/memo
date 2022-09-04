import { withTRPC } from '@trpc/next';
import type { AppProps } from 'next/app';
import superjson from 'superjson';
import { AppRouter } from '../server/routers/_app';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return '';
  }
  // reference for vercel.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // reference for render.com
  if (process.env.RENDER_INTERNAL_HOSTNAME) {
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  }

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    return {
      url: `${getBaseUrl()}/api/trpc`,
      transformer: superjson
    }
  },
  ssr: true
})(MyApp);
