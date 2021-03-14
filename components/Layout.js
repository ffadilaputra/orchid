import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="border-t-8 border-orange-500 dark:border-orange-400 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
