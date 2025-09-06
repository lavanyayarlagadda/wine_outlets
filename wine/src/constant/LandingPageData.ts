import { banner_img1, banner_img2, banner_img3 } from "../assets";
import { Offer_img1, Offer_img2, Offer_img3 } from "../assets";
import { curated_img1, curated_img2,   curated_img3,
  curated_img4,
  curated_img5, } from "../assets";
export const LandingPageData = {
  heroSection: {
    isVisible: true,
    slides: [
      {
        id: "1",
        order: 1,
        tagText: "Curated",
        tagActionText: "The Finest, Selected for You",
        tagActionUrl: "/collections/curated",
        title: "Crafted for Connoisseurs.",
        subtitle: "Explore a curated collection of sommelier-picked wines and exclusive labels.",
        backgroundMedia: {
          type: "image",
          url: banner_img3,
        },
        firstBtnText: "Shop the Collection",
        secondBtnText: "View Staff Picks",
        firstBtnAction: "/shop",
        secondBtnAction: "/staff-picks",
      },
      {
        id: "2",
        order: 2,
        tagText: "Seasonal",
        tagActionText: "Limited-Time Favorites",
        tagActionUrl: "/collections/seasonal",
        title: "Celebrate the Season.",
        subtitle: "Discover limited-edition wines perfect for holidays and special gatherings.",
        backgroundMedia: {
          type: "image",
          url: banner_img1,
        },
        firstBtnText: "Shop Seasonal Picks",
        secondBtnText: "Gift Ideas",
        firstBtnAction: "/shop/seasonal",
        secondBtnAction: "/gifts",
      },
      {
        id: "3",
        order: 3,
        tagText: "Best Sellers",
        tagActionText: "Customer Favorites",
        tagActionUrl: "/collections/best-sellers",
        title: "Loved by Thousands.",
        subtitle: "Explore our most popular wines, rated highly by customers like you.",
        backgroundMedia: {
          type: "image",
          url: banner_img2,
        },
        firstBtnText: "Shop Best Sellers",
        secondBtnText: "Read Reviews",
        firstBtnAction: "/shop/best-sellers",
        secondBtnAction: "/reviews",
      },
      {
        id: "4",
        order: 4,
        tagText: "Exclusive",
        tagActionText: "Only at Wine Outlet",
        tagActionUrl: "/collections/exclusive",
        title: "Exclusive Labels.",
        subtitle: "Unique wines available only here — crafted for true enthusiasts.",
        backgroundMedia: {
          type: "image",
          url: banner_img3,
        },
        firstBtnText: "Shop Exclusives",
        secondBtnText: "Join Wine Club",
        firstBtnAction: "/shop/exclusive",
        secondBtnAction: "/wine-club",
      },
    ],
  },

  limitedTimeOffer: {
    isVisible: true,
    title: "Limited-Time Offers",
    subtitle: "Uncork exclusive savings this week.",
    offers: [
      {
        id: "1",
        media: {
          type: "image",
          url: Offer_img1,
        },
        offerAction: "/offers/6-bottles",
      },
      {
        id: "2",
        media: {
          type: "image",
          url: Offer_img2,
        },
        offerAction: "/offers/organic",
      },
      {
        id: "3",
        media: {
          type: "image",
          url: Offer_img3,
        },
        offerAction: "/offers/sparkling",
      },
      {
        id: "1",
        media: {
          type: "image",
          url: Offer_img1,
        },
        offerAction: "/offers/6-bottles",
      },
      {
        id: "2",
        media: {
          type: "image",
          url: Offer_img2,
        },
        offerAction: "/offers/organic",
      },
      {
        id: "3",
        media: {
          type: "image",
          url: Offer_img3,
        },
        offerAction: "/offers/sparkling",
      },
    ],
  },

  valueSection: {
    isVisible: true,
    mainCard: {
      id: "1",
      title: "Everyday Value",
      description:
        "Enjoy high-quality wines, beers, and spirits at affordable prices—perfect for daily moments without compromising on taste",
      media: {
        type: "image",
        url: banner_img1,
      },
      btnText:  "View All",
      btnAction: "/collections/everyday-value",
    },
    cards: [
      {
        id: "2",
        title: "Trending Now",
        description:
          "Discover our most-loved wines, beers, & spirits making waves this week—perfect picks for your next celebration.",
        btnText:  "View All",
        btnAction: "/collections/everyday-value",
      },
      {
        id: "3",
        title: "Top Sellers",
        description:
          "Shop our best-selling wines, beers, and spirits that customers love. Tried, tested, and trusted for moments every time.",
        action: {
          id: 1,
          btnText: "View Bestsellers",
          btnAction: "/collections/bestsellers",
        },
      },
      {
        id: "4",
        title: "New Arrivals",
        description:
          "Be the first to taste our latest additions. Fresh arrivals of premium wines, craft beers, and spirits just for you.",
        btnText: "Starting from $9.50",
        btnAction: "/collections/new-arrivals",
      },
      {
        id: "5",
        title: "Seasonal Picks",
        description:
          "Celebrate the season with specially curated wines, beers, & spirits designed to pair perfectly with moods & gatherings.",
        btnText: "Shop Seasonal Collection",
        btnAction: "/collections/seasonal",
      },
    ],
  },

  curatedPicks: {
    isVisible: true,
    title: "Shop Our Curated Picks",
    subtitle: "Find your favorite by type.",
    categories: [
      {
        id: 1,
        category: "Limited Edition",
        media: {
          type: "image",
          url: curated_img1,
        },
        categoryAction: "Url",
      },
      {
        id: 2,
        category: "Top Sellers",
        media: {
          type: "image",
          url: curated_img2,
        },
        categoryAction: "Url",
      },
      {
        id: 3,
        category: "Wine under $20",
        media: {
          type: "image",
          url: curated_img3,
        },
        categoryAction: "Url",
      },
      {
        id: 4,
        category: "Premium Selection",
        media: {
          type: "image",
          url: curated_img4,
        },
        categoryAction: "Url",
      },
      {
        id: 5,
        category: "Best Value",
        media: {
          type: "image",
          url: curated_img5,
        },
        categoryAction: "Url",
      },
    ],
  },

  everyDaySlides: {
    isVisible: true,
    slides: [
      {
        id: 1,
        title: "Everyday Value",
        description:
          "Enjoy high-quality wines, beers, and spirits at affordable prices—perfect for daily moments without compromising on taste",
        btnText: "Starting from $9.50",
        btnAction: "/shop/everyday-value",
        media: {
          type: "video",
          url: "https://example.com/images/wine-1.jpg",
        },
        order: 1,
      },
      {
        id: 2,
        title: "Premium Collection",
        description: "Discover our premium wines handpicked from the best vineyards worldwide.",
        btnText: "Shop Premium $9.50",
        btnAction: "/shop/everyday-value",
        media: {
          type: "video",
          url: "https://example.com/images/wine-1.jpg",
        },
        order: 2,
      },
    ],
  },

  shopByCategory: {
    isVisible: true,
    title: "Shop by Category",
    subtitle: "Find your favorite by type.",

    categories: [
      {
        id: 1,
        name: "Red Wines",
        media: {
          type: "image",
          url: "https://example.com/images/wine-1.jpg",
        },

        productCount: 128,
        url: "/collections/seasonal",
      },
      {
        id: 2,
        name: "Beer",
        media: {
          type: "image",
          url: "https://example.com/images/wine-1.jpg",
        },
        url: "/collections/seasonal",

        productCount: 65,
      },
      {
        id: 3,
        name: "Liquor",
        media: {
          type: "image",
          url: "https://example.com/images/wine-1.jpg",
        },

        url: "/collections/seasonal",

        productCount: 40,
      },
      {
        id: 4,
        name: "White Wines",
        media: {
          type: "image",
          url: "https://example.com/images/wine-1.jpg",
        },

        url: "/collections/seasonal",

        productCount: 112,
      },
    ],
  },

  dealSection: {
    isVisible: "true",
    title: "Today's Deal for you!",
    props: {
      showTimer: true,
      timer: {
        endTime: "2025-08-25T23:59:59Z",
        format: "HH:mm:ss",
      },
      tabs: [
        {
          id: "trending",
          label: "Trending",
        },
        {
          id: "staff",
          label: "Staff Picks",
        },
        {
          id: "popular",
          label: "Most Popular",
        },
        {
          id: "justforyou",
          label: "Just For You",
        },
      ],
      defaultTab: "trending",
    },
    items: {
      trending: [
        {
          id: "1",
          title: "Kim Crawford Wine",
          media: {
            type: "image",
            url: "https://example.com/images/wine-1.jpg",
          },

          year: "2021",
          region: "California",
          quantity: "750ML",
          rating: 4.8,
          price: 16.53,
          vipPrice: 12.62,
          salePrice: 11.45,
          tag: "tagText",
        },
        {
          id: "2",
          title: "Kim Crawford Wine",
          media: {
            type: "image",
            url: "https://example.com/images/wine-1.jpg",
          },

          year: "2021",
          region: "California",
          quantity: "750ML",
          rating: 4.8,
          price: 16.53,
          vipPrice: 12.62,
          salePrice: 11.45,
          tag: "tagText",
        },
      ],
      staff: [],
      popular: [],
      justforyou: [],
    },
  },

  brandSection: {
    title: "Featured Brands",
    isVisible: "true",
    items: [
      {
        id: "1",
        image: "https://example.com/images/willow.png",
        brandId: 1,
        order: 1,
      },
      {
        id: "2",
        name: "Willow Vineyards",
        Image: "https://example.com/images/willow.png",
        brandId: 2,
        order: 2,
      },
    ],
  },
};
