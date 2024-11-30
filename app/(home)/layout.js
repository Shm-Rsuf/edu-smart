import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className=""
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
