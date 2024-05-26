import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import {GoogleOAuthProvider} from "@react-oauth/google"
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}> 
  <GoogleOAuthProvider clientId="223717560456-fplcnthsu1id1ac26laab5p0ir4q4369.apps.googleusercontent.com">
  <Component {...pageProps} />
  </GoogleOAuthProvider>
  </div>;
}
