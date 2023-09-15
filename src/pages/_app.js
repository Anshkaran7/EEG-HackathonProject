import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import { H } from 'highlight.run';

export default function App({ Component, pageProps }) {

  H.init('jdk7xvg5', {
    environment: 'production',
    enableStrictPrivacy: false,
    networkRecording: {
      enabled: true,
      recordHeadersAndBody: true,
    },
    tracingOrigins: true
  });
  return <>
      <Component {...pageProps} />
      <Analytics />
  </>
}