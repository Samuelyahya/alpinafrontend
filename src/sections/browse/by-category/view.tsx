import { CategoryWithVehicles, Vehicle } from '@/src/types';

import { PopularVehiclesCard, VehiclesCard } from '@/src/components/card';
import { TopBar } from './top-bar';

type Props = {
  popularVehicles: Vehicle[];
  vehiclesByCategory: CategoryWithVehicles;
};

export function BrowseVehiclesByCategoryView({
  vehiclesByCategory,
  popularVehicles,
}: Props) {
  return (
    <>
      <TopBar vehiclesByCategory={vehiclesByCategory} />
      <PopularVehiclesCard
        title='Popular Cars'
        className='py-5 bg-[#F9FAFB]'
        popularVehicles={popularVehicles}
      />
      <VehiclesCard vehicles={vehiclesByCategory.vehicles} />
    </>
  );
}
