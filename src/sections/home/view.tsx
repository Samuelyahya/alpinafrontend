import { Category, Vehicle } from '@/src/types';
import { TopBar } from './top-bar';
import {
    CategoryCard,
    PopularVehiclesCard,
    VehiclesCard,
} from '@/src/components/card';

type Props = {
    categories: Category[];
    popularVehicles: Vehicle[];
    vehicles: Vehicle[];
};

export function HomeView({ categories, popularVehicles, vehicles }: Props) {
    return (
        <>
            <TopBar />
            <CategoryCard categories={categories} />
            <PopularVehiclesCard
                title='Start Your Adventure'
                popularVehicles={popularVehicles}
            />
            <VehiclesCard vehicles={vehicles} />
        </>
    );
}
