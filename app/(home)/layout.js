import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "../../context/AuthContext";
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className=""
      >
        <Navbar />
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
