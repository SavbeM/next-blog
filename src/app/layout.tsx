import './globals.css'
import {Inter} from 'next/font/google'
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'My Blog',
    description: 'Powered by next',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <div className="flex flex-col min-h-screen">
                 <Header/>
                 <main className="flex flex-[1_0_auto]">{children}</main>
                  <Footer/>
            </div>
        </body>
        </html>
    )
}
