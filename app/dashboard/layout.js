import Footer from "@/components/Footer";
import DashboardNavbar from "./_components/Dashboard-Nav";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=''>
        <DashboardNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
