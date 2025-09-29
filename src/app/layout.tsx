import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Background from '~/views/background';
import Contacts from '~/views/contacts';
import Skills from '~/views/skills';
import SkillsButton from '~/views/skills/button';
import { TopDrawerContextProvider } from '~/views/skills/context';
import TEXT from '../TEXT.json';
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo48wv6voFRMTmop43bPH6D_zvJv-vNoA",
  authDomain: "cv-web-app-54b5c.firebaseapp.com",
  projectId: "cv-web-app-54b5c",
  storageBucket: "cv-web-app-54b5c.firebasestorage.app",
  messagingSenderId: "801121318733",
  appId: "1:801121318733:web:b71643b191484f07c76904",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' /* TODO: multi-lang */>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='font-sans overflow-x-hidden pb-[72px]'>
          <main className='items-center sm:items-start'>{children}</main>
          <div id='contacts' className='fixed top-0 left-full mt-2'>
            <Contacts />
          </div>
          <div id='experience' className='fixed w-full top-full'>
            <Background title={TEXT.experience.title} experience={TEXT.experience.data} />
          </div>
          <div id='skills' className='fixed top-0 left-0 w-full'>
            <TopDrawerContextProvider>
              <Skills />
              <SkillsButton />
            </TopDrawerContextProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
