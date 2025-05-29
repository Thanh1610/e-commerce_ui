import { Card as Meta } from 'antd';
import { StarFilled } from '@ant-design/icons';
import type { ProductSections } from '@/APIs/mockdata';
type Props = {
    data: ProductSections;
};
function Card({ data }: Props) {
    return (
        <div className="mt-2.5 flex gap-4">
            {data?.item.map((item) => (
                <Meta
                    key={item?.id}
                    hoverable
                    cover={
                        <img
                            src={item?.image}
                            alt={item?.title}
                            className="aspect-[3/2] w-full object-cover transition-all duration-300 hover:-translate-y-0.5"
                        />
                    }
                    styles={{ body: { padding: '8px' } }}
                    className="relative"
                >
                    <div className="text-xs hover:underline">{item?.title}</div>
                    <div className="mt-1 flex items-center gap-1 text-xs text-[#98a2b3]">
                        <span>
                            <StarFilled className="!text-yellow-300" />
                            <span className="">{item?.rate}</span>
                        </span>
                        <span>| đã bán 18.3k</span>
                    </div>
                    <div className="mt-1 flex flex-col gap-1">
                        <span className="text-lg font-semibold text-red-500">{item?.price}</span>
                        <div>
                            <span className="text-[#98a2b3] line-through">{item?.oldPrice}</span>
                            <span className="ml-1 text-red-500">{item?.discount}</span>
                        </div>
                    </div>

                    <div className="absolute top-0 left-0 rounded-tl-md rounded-br-md bg-red-200 px-1 py-0.5 text-[10px] text-red-500">
                        Top Deal
                    </div>
                </Meta>
            ))}
        </div>
    );
}

export default Card;
