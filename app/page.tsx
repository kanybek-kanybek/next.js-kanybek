import AllProduct from '@/components/AllProduct/AllProduct';
import Featured from '@/components/Featured/Featured';
import FeaturedCargo from '@/components/FeaturedCargo/FeaturedCargo';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import MainBlock from '@/components/MainBLokc/MainBlock';
import ProductBlock from '@/components/ProductBlock/ProductBlock';
import ProductBlock2 from '@/components/ProductBlock2/ProductBlock2';
import ProductBlock3 from '@/components/ProductBlock3/ProductBlock3';
import ProductCategories from '@/components/ProductCategories/ProductCategories';
import ProductPage from '@/components/ProductPage/ProductPage';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MainBlock />
      <ProductBlock />
      <ProductPage />
      <ProductBlock2 />
      <ProductCategories />
      <ProductBlock3 />
      <AllProduct />
      <Featured />
      <FeaturedCargo />
      <Footer />
    </>
  );
};

export default Home;
