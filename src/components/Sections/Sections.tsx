import type { ProductSections } from '@/APIs/mockdata';
import Card from '@/Card/Card';

type Props = {
    data: ProductSections;
};
function Sections({ data }: Props) {
    return (
        <div className="mt-5">
            <h2 className="text-2xl font-bold">{data?.heading}</h2>

            <Card data={data} />
        </div>
    );
}

export default Sections;
