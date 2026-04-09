import Footer from "./component/footer/Footer";
import Header from "./component/heder/Header";
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}