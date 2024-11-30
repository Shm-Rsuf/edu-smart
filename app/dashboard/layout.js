import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=''>
        {children}
      </body>
    </html>
  );
}
