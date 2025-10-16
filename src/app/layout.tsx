import { initializeApp } from 'firebase/app';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import OpenButton from '~/components/drawer/button';
import { DrawerContextProvider } from '~/components/drawer/context';
import TEXT from '~/TEXT.json'; // TODO! fetch!
import Background from '~/views/background';
import Contacts from '~/views/contacts';
import Skills from '~/views/skills';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${TEXT.main.name} ${TEXT.main.family} | Dev`,
  description: 'Portfolio Website',
};

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

initializeApp(firebaseConfig);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' /* TODO: multi-lang */>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased max-h-screen`}>
        <div className='font-sans overflow-x-hidden'>
          <main className='items-center sm:items-start'>{children}</main>
          <div id='experience' className='fixed w-full top-full'>
            <Background title={TEXT.experience.title} experience={TEXT.experience.data} />
          </div>
          <DrawerContextProvider>
            <div id='contacts' className='fixed top-0 left-0 w-full'>
              <OpenButton id='contacts' className='fixed top-2 right-0 mr-1' />
              <Contacts />
            </div>
            <div id='skills' className='fixed top-0 left-0 w-full'>
              <OpenButton id='skills' className='fixed top-18 right-0 mr-1' />
              <Skills />
            </div>
          </DrawerContextProvider>
        </div>
      </body>
    </html>
  );
}
