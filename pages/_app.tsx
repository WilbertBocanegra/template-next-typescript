import { AppProps } from 'next/app';
import '@styles/main.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps}></Component>
}

export default MyApp;