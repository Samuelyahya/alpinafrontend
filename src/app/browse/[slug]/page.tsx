import { getVehiclesBySlug } from '@/src/actions';
import { BrowseVehiclesBySlugView } from '@/src/sections/browse/by-vehicle';

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function BrowseDetailPage({ params }: Props) {
    const { slug } = await params;
    const vehiclesBySlug = await getVehiclesBySlug({ slug });

    return <BrowseVehiclesBySlugView vehiclesBySlug={vehiclesBySlug} />;
}
