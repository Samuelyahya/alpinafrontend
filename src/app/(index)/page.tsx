import { HomeView } from '@/src/sections/home';
import { getCategories, getVehicles, getPopularVehicles } from '@/src/actions';

export const metadata = {
  title: 'Home | Alpina',
  description: 'Browse the best vehicles and categories',
};

export default async function HomePage() {
  const categories = await getCategories();
  const vehicles = await getVehicles();
  const popularVehicles = await getPopularVehicles();

  return (
    <>
      <HomeView
        categories={categories.data}
        vehicles={vehicles.data}
        popularVehicles={popularVehicles.data}
      />
    </>
  );
}
