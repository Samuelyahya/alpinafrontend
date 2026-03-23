import { getVehiclesBySlug } from '@/src/actions';
import { BookingView } from '@/src/sections/booking';

type Props = {
    searchParams: Promise<{ slug?: string }>;
};

export default async function Booking({ searchParams }: Props) {
    const { slug } = await searchParams;

    if (!slug) {
        return <div>Vehicle not found</div>;
    }

    const vehiclesBySlug = await getVehiclesBySlug({ slug });

    return <BookingView vehiclesBySlug={vehiclesBySlug} />;
}
