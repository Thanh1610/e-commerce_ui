type Product = {
    id: number;
    title: string;
    image: string;
    price: string;
    oldPrice: string;
    discount: string;
    slotsLeft: string;
    rate?: string;
};

export type ProductSections = {
    heading: string;
    item: Product[];
};
export const productSections: Record<string, ProductSections> = {
    topDeals: {
        heading: 'TOP DEAL - SIÊU RẺ',
        item: [
            {
                id: 1,
                title: 'Samsung Galaxy A55 5G 8GB/256GB',
                image: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/279180270_3134768223504603_6401090039492819929_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=l1ld7-LvNNoQ7kNvwEICEAy&_nc_oc=Adl4dZkWLSyASllmCmAyGLphalM__GS7wQ8Fmo4B8_FlC4DvF9qYjq0XKr-_u0Qjoy4&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=z1dujK8oUpEHkrrNdsueBw&oh=00_AfLZ2OiQorSCBrdAShYzXSvA-JANyVf0qt_qhCq25Q2p9Q&oe=683E15DF',
                price: '8.690.000₫',
                oldPrice: '10.990.000₫',
                discount: '-20%',
                slotsLeft: '6/10 suất',
                rate: '4.9',
            },

            {
                id: 2,
                title: 'Samsung Galaxy A55 5G 8GB/256GB',
                image: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/279180270_3134768223504603_6401090039492819929_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=l1ld7-LvNNoQ7kNvwEICEAy&_nc_oc=Adl4dZkWLSyASllmCmAyGLphalM__GS7wQ8Fmo4B8_FlC4DvF9qYjq0XKr-_u0Qjoy4&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=z1dujK8oUpEHkrrNdsueBw&oh=00_AfLZ2OiQorSCBrdAShYzXSvA-JANyVf0qt_qhCq25Q2p9Q&oe=683E15DF',
                price: '8.690.000₫',
                oldPrice: '10.990.000₫',
                discount: '-20%',
                slotsLeft: '6/10 suất',
            },

            {
                id: 3,
                title: 'Samsung Galaxy A55 5G 8GB/256GB',
                image: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/279180270_3134768223504603_6401090039492819929_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=l1ld7-LvNNoQ7kNvwEICEAy&_nc_oc=Adl4dZkWLSyASllmCmAyGLphalM__GS7wQ8Fmo4B8_FlC4DvF9qYjq0XKr-_u0Qjoy4&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=z1dujK8oUpEHkrrNdsueBw&oh=00_AfLZ2OiQorSCBrdAShYzXSvA-JANyVf0qt_qhCq25Q2p9Q&oe=683E15DF',
                price: '8.690.000₫',
                oldPrice: '10.990.000₫',
                discount: '-20%',
                slotsLeft: '6/10 suất',
            },

            {
                id: 4,
                title: 'Samsung Galaxy A55 5G 8GB/256GB',
                image: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/279180270_3134768223504603_6401090039492819929_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=l1ld7-LvNNoQ7kNvwEICEAy&_nc_oc=Adl4dZkWLSyASllmCmAyGLphalM__GS7wQ8Fmo4B8_FlC4DvF9qYjq0XKr-_u0Qjoy4&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=z1dujK8oUpEHkrrNdsueBw&oh=00_AfLZ2OiQorSCBrdAShYzXSvA-JANyVf0qt_qhCq25Q2p9Q&oe=683E15DF',
                price: '8.690.000₫',
                oldPrice: '10.990.000₫',
                discount: '-20%',
                slotsLeft: '6/10 suất',
            },

            {
                id: 5,
                title: 'Samsung Galaxy A55 5G 8GB/256GB',
                image: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/279180270_3134768223504603_6401090039492819929_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=l1ld7-LvNNoQ7kNvwEICEAy&_nc_oc=Adl4dZkWLSyASllmCmAyGLphalM__GS7wQ8Fmo4B8_FlC4DvF9qYjq0XKr-_u0Qjoy4&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=z1dujK8oUpEHkrrNdsueBw&oh=00_AfLZ2OiQorSCBrdAShYzXSvA-JANyVf0qt_qhCq25Q2p9Q&oe=683E15DF',
                price: '8.690.000₫',
                oldPrice: '10.990.000₫',
                discount: '-20%',
                slotsLeft: '6/10 suất',
            },
        ],
    },
};
