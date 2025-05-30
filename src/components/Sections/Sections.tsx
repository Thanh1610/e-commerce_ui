import type { ProductSections } from '@/APIs/mockdata';
import Card from '@/Card/Card';
import config from '@/config';
import { Button } from 'antd';
import { Link } from 'react-router';

type Props = {
    data: ProductSections;
};
function Sections({ data }: Props) {
    return (
        <div className="mt-5">
            <h2 className="text-2xl font-bold">{data?.heading}</h2>

            <Card data={data} />

            <Link to={config.routes.section} className="mt-2 flex w-full items-center justify-center">
                <Button size="large">Xem thêm</Button>
            </Link>
        </div>
    );
}

export default Sections;
