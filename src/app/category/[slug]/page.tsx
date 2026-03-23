import { BrowseVehiclesByCategoryView } from '@/src/sections/browse/by-category';
import { getVehiclesByCategory, getPopularVehicles } from '@/src/actions';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Category | Alpina`,
    description: `Explore the best items in the ${slug} category on our platform.`,
  };
}

export default async function BrowseByCategory({ params }: Props) {
  const { slug } = await params;
  const popularVehicles = await getPopularVehicles();

  const vehiclesByCategory = await getVehiclesByCategory({ slug });

  return (
    <BrowseVehiclesByCategoryView
      vehiclesByCategory={vehiclesByCategory}
      popularVehicles={popularVehicles.data}
    />
  );
}
