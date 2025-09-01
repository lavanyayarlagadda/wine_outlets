import { curated_img1, curated_img2, curated_img3, curated_img4, curated_img5,video } from "../assets";


export const curatedData = [
  {
    category: "Limited Edition",
    imageUrl: curated_img1,
  },
  {
    category: "Top Sellers",
    imageUrl: curated_img2,
  },
  {
    category: "Wine under $20",
    imageUrl: curated_img3,
  },
  {
    category: "Premium Selection",
    imageUrl: curated_img4,
  },
  {
    category: "Best Value",
    imageUrl: curated_img5,
  },
];

export const EVERYDAY_SLIDES = [
    {
      title: "Everyday Value",
      description:
        "Enjoy high-quality wines, beers, and spirits at affordable prices—perfect for daily moments without compromising on taste",
      price: "$9.50",
    },
    {
      title: "Premium Collection",
      description:
        "Discover our curated selection of premium wines and spirits, carefully chosen for the discerning connoisseur",
      price: "$24.99",
    },
    {
      title: "Special Occasions",
      description:
        "Celebrate life's special moments with our exclusive collection of rare and vintage selections",
      price: "$49.99",
    },
  ];

  export const BannerData = 
   {

        "banners": [{
                "id": 1,
                "title": "Everyday Value",
                "description": "Enjoy high-quality wines, beers, and spirits at affordable prices—perfect for daily moments without compromising on taste",
                "action": {
                    "id": 1,
                    "label": "Starting from $9.50",
                    "url": "/shop/everyday-value"
                },
                "media": {
                    "type": "video",
                    "url": video
                },
                "order": 1
            },
            {
                "id": 2,
                "title": "Premium Collection",
                "description": "Discover our premium wines handpicked from the best vineyards worldwide.",
                "action": {
                    "id": 1,
                    "label": "Shop Premium",
                    "url": "/shop/premium"
                },

                "media": {
                    "type": "video",
                    "url": "https://example.com/images/wine-1.jpg"
                },

                "order": 2
            }
        ]
    }


