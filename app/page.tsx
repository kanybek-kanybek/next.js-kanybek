import Footer from '@/components/header/footer/footer';
import Header from '@/components/header/header';
import MainBlock from '@/components/MainBLokc/MainBlock';
import ProductBlock from '@/components/ProductBlock/ProductBlock';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MainBlock />
      <ProductBlock />
      <Footer />
    </>
  );
};

export default Home;
