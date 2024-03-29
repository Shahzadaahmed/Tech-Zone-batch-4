import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

// Components...!
import Navbar from "@/components/navbar/navbar";

const RootLayout = ({ children }) => {
  // console.log('Childrens: ', children);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout;