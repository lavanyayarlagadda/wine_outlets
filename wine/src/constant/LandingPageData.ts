import { banner_img1, banner_img2, banner_img3 } from "../assets";
import { Offer_img1, Offer_img2, Offer_img3 } from "../assets";
import { curated_img1, curated_img2, curated_img3, curated_img4, curated_img5 } from "../assets";
import { category_img1, category_img2, category_img3, category_img4 } from "../assets";
import { deal_img2, deal_img3 } from "../assets";
import { willow } from "../assets";

const DemoImg = "https://rukminim2.flixcart.com/image/704/844/xif0q/drinks-juice/q/m/n/375-imperium-natural-grape-wine-375ml-glass-bottle-1-rosegold-original-imah7fwvmxdfpdyz.jpeg?q=20&crop=false"

const wineBrandImg = "https://img.favpng.com/16/3/15/swartland-winery-logo-silverboom-special-reserve-merlot-shiraz-2017-rioja-png-favpng-b9mQJFwQWnfJrHqrxnx1DETY1.jpg"

export type LayoutType = 'carousel' | '4-column-grid';

export type SizePreset = 'small' | 'medium' | 'large';

export type DimensionString = `${number}*${number}`;

export interface BannerImageItem {
	imageUrl: string;
	tags: string[];
}

export interface ProductCategoryItem {
	id: string;
	title: string;
	imageUrl: string;
	tags?: string[];
	rating: number;
	price: number;
	vipPrice: number;
	origin: string;
	vintage: string;
	producer: string;
  size: string
}

export interface ProductCategoryListItem {
	id: string;
	title: string;
	imageUrl: string;
	tags?: string[];
}

export interface BaseSection {
	position: number;
	id: string;
	layout: LayoutType;
  isVisible: boolean;
}

export interface HeroBannerSection extends BaseSection {
	type: 'hero-banner';
	title?: string;
	content: BannerImageItem[];
}

export interface BannerCollectionSection extends BaseSection {
	type: 'banner-collection';
	title: string;
	subtitle: string;
	cardSize: SizePreset | DimensionString;
	content: BannerImageItem[];
}

export interface ProductCategoryListSection extends BaseSection {
	type: 'product-category-list';
	title: string;
	subtitle: string;
	content: ProductCategoryListItem[];
}

export interface CustomBannerSection extends BaseSection {
	type: 'custom-banner';
	bannerSize: SizePreset | DimensionString;
	content: BannerImageItem[];
  backgroundHighlight: boolean;
}

export interface SideCategoryButton {
	label: string;
	tag: string;
	iconUrl?: string;
}
export interface ProductCollectionSection extends BaseSection {
	type: 'product-collection';
	title: string;
	subtitle: string;
	content: ProductCategoryItem[];
}
export interface CustomProductCategorySection extends BaseSection {
	type: 'product-collection-custom';
	title: string;
	subtitle: string;
	showTimer?: boolean;
	endTimeIso?: string;
	sideButtons: SideCategoryButton[];
	content: ProductCategoryItem[];
}

export interface FeaturedBrandSection extends BaseSection {
	type: 'featured-brand';
	title: string;
	content: {
		imageUrl: string;
    brandName: string;
	}[];
}

export type PageSection =
	| HeroBannerSection
	| BannerCollectionSection
	| ProductCollectionSection
	| ProductCategoryListSection
	| CustomBannerSection
	| CustomProductCategorySection
	| FeaturedBrandSection;

export interface SiteSettings {
	pageSections: PageSection[];
}

export const SITE_SETTING_DEMO_DATA: SiteSettings = {
	pageSections: [
		{
			position: 1,
			type: 'hero-banner',
			layout: 'carousel',
			id: 'hero-1',
      isVisible: true,
			content: [
				{
					imageUrl: DemoImg,
					tags: ['newproduct', 'limited-time-offer'],
				},
				{
					imageUrl: DemoImg,
					tags: ['newproduct', 'limited-time-offer'],
				},
				{
					imageUrl: DemoImg,
					tags: ['newproduct', 'limited-time-offer'],
				},
			],
		},
		{
			position: 2,
			type: 'banner-collection',
			layout: 'carousel',
			id: 'collection-1',
			title: 'Limited-Time Offers',
			subtitle: 'Uncork exclusive savings this week.',
			cardSize: 'medium',
       isVisible: true,
			content: [
				{
					imageUrl: DemoImg,
					tags: ['redwine', 'limited-time-offer'],
				},
				{
					imageUrl: DemoImg,
					tags: ['redwine', 'limited-time-offer'],
				},
				{
					imageUrl: DemoImg,
					tags: ['redwine', 'limited-time-offer'],
				},
				{
					imageUrl: DemoImg,
					tags: ['redwine', 'limited-time-offer'],
				},
			],
		},
		{
			position: 3,
			type: 'banner-collection',
			layout: '4-column-grid',
			id: 'collection-2',
			title: 'Limited-Time Offers',
			subtitle: 'Uncork exclusive savings this week.',
			cardSize: '400*600',
      isVisible: true,
			content: [
				{
					imageUrl: DemoImg,
					tags: ['trending'],
				},
				{
					imageUrl: DemoImg,
					tags: ['top-seller'],
				},
				{
					imageUrl: DemoImg,
					tags: ['new-arrival'],
				},
				{
					imageUrl: DemoImg,
					tags: ['seasonal'],
				},
        {
					imageUrl: DemoImg,
					tags: ['top-seller'],
				},
				{
					imageUrl: DemoImg,
					tags: ['new-arrival'],
				},
				{
					imageUrl: DemoImg,
					tags: ['seasonal'],
				},
			],
		},
		{
			position: 4,
			type: 'product-category-list',
			layout: 'carousel',
			id: 'product-category-1',
			title: 'Shop Our Curated Picks',
			subtitle: 'Find your favorite by type.',
       isVisible: true,
			content: [
				{
					id: 'gw-123',
					title: 'Limited Edition',
					imageUrl: DemoImg,
					tags: ['limited-edition'],
				},
				{
					id: 'gw-123',
					title: 'Top Sellers',
					imageUrl: DemoImg,
					tags: ['top-sellers'],
				},
				{
					id: 'gw-123',
					imageUrl: DemoImg,
					title: 'Wine Under $20',
					tags: ['wine-under-20'],
				},
        {
					id: 'gw-123',
					title: 'Top Sellers',
					imageUrl: DemoImg,
					tags: ['top-sellers'],
				},
				{
					id: 'gw-123',
					imageUrl: DemoImg,
					title: 'Wine Under $20',
					tags: ['wine-under-20'],
				},
			],
		},
		{
			position: 5,
			type: 'custom-banner',
			layout: 'carousel',
			id: 'custom-banner-sm-1',
			// NOTE: `bannerSize` We will have 4 sizes: small, medium, large and custom like 400*600
			bannerSize: 'small',
      isVisible: true,
			backgroundHighlight: true,
			content: [
				{
					imageUrl: DemoImg,
					tags: ['everyday-value'],
				},
				{
					imageUrl: DemoImg,
					tags: ['premium-collection'],
				},
			],
		},
		{
			position: 6,
			type: 'banner-collection',
			layout: 'carousel',
			id: 'collection-3',
			title: 'Shop by Category',
			subtitle: 'Find your favorite by type.',
			cardSize: '400*600',
      isVisible: true,
			content: [
				{
					imageUrl: DemoImg,
					tags: ['redwine'],
				},
				{
					imageUrl: DemoImg,
					tags: ['redwine'],
				},
				{
					imageUrl: DemoImg,
					tags: ['redwine'],
				},
				{
					imageUrl: DemoImg,
					tags: ['redwine'],
				},
			],
		},
		{
			position: 7,
			id: 'product-collection-custom-1',
			type: 'product-collection-custom',
			layout: 'carousel',
			title: 'Hot Right Now',
			subtitle: "Deals ending soon — don't miss out",
			showTimer: true,
      isVisible: true,
			endTimeIso: '2025-12-31T23:59:59.000Z',
			sideButtons: [
				{ label: 'Trending', tag: 'trending' },
				{ label: 'Staff Picks', tag: 'staff-picks' },
				{ label: 'New Arrivals', tag: 'new-arrival' },
			],
			content: [
				{
					id: 'deal-001',
					title: 'Reserve Cabernet',
					imageUrl: DemoImg,
					rating: 4.6,
					price: 45,
					vipPrice: 39.99,
					origin: 'Napa Valley, USA',
					vintage: '2019',
          size: '750ML',
					producer: 'Hillside Estate',
					tags: ['trending'],
				},
				{
					id: 'deal-002',
					title: 'Classic Pinot Noir',
					imageUrl: DemoImg,
					rating: 4.4,
					price: 32,
					vipPrice: 28.5,
          size: '750ML',
					origin: 'Willamette Valley, USA',
					vintage: '2020',
					producer: 'Red Oak Cellars',
					tags: ['staff-picks'],
				},
        {
					id: 'deal-003',
					title: 'Classic Pinot Noir',
					imageUrl: DemoImg,
					rating: 4.4,
					price: 32,
					vipPrice: 28.5,
          size: '750ML',
					origin: 'Willamette Valley, USA',
					vintage: '2020',
					producer: 'Red Oak Cellars',
					tags: ['staff-picks','trending','new-arrival'],
				},
			],
		},
		{
			position: 8,
			id: 'featured-brand-1',
			title: 'Featured Brands',
			type: 'featured-brand',
			layout: 'carousel',
       isVisible: true,
			content: [
				{
					imageUrl: wineBrandImg,
          brandName: 'Oak',
				},
				{
					imageUrl: wineBrandImg,
          brandName: 'Dom',
				},
				{
					imageUrl: wineBrandImg,
          brandName: 'Oak',
				},
				{
					imageUrl: wineBrandImg,
          brandName: 'Dom',
				},
			],
		},
		{
			position: 9,
			id: 'product-collection-custom-2',
			type: 'product-collection',
			layout: 'carousel',
			title: 'Recently Viewed',
			subtitle: '',
      isVisible: true,
			content: [
				{
					id: 'deal-001',
					title: 'Reserve Cabernet',
					imageUrl: DemoImg,
					rating: 4.6,
					price: 45,
					vipPrice: 39.99,
					origin: 'Napa Valley, USA',
					vintage: '2019',
					producer: 'Hillside Estate',
					tags: ['trending'],
          size:"750ML"
				},
				{
					id: 'deal-002',
					title: 'Classic Pinot Noir',
					imageUrl: DemoImg,
					rating: 4.4,
					price: 32,
					vipPrice: 28.5,
					origin: 'Willamette Valley, USA',
					vintage: '2020',
					producer: 'Red Oak Cellars',
					tags: ['staff-picks'],
          size:"750ML"
				},
			],
		},
	],
};


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
      btnText: "View All",
      btnAction: "/collections/everyday-value",
    },
    cards: [
      {
        id: "2",
        title: "Trending Now",
        description:
          "Discover our most-loved wines, beers, & spirits making waves this week—perfect picks for your next celebration.",
        btnText: "View All",
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
        productName: "Red Wines",
        media: {
          type: "image",
          url: category_img1,
        },

        productCount: 128,
        categoryAction: "/collections/seasonal",
      },
      {
        id: 2,
        productName: "Beer",
        media: {
          type: "image",
          url: category_img2,
        },
        categoryAction: "/collections/seasonal",

        productCount: 65,
      },
      {
        id: 3,
        productName: "Liquor",
        media: {
          type: "image",
          url: category_img3,
        },

        categoryAction: "/collections/seasonal",

        productCount: 40,
      },
      {
        id: 4,
        productName: "White Wines",
        media: {
          type: "image",
          url: category_img4,
        },

        categoryAction: "/collections/seasonal",

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
        endTime: "2025-09-15T23:59:59Z",
        format: "HH:mm:ss",
      },
      filterButtons: [
        {
          id: "trending",
          label: "🎉Trending",
        },
        {
          id: "staff",
          label: "🍬Staff Picks",
        },
        {
          id: "popular",
          label: "🍺Most Popular",
        },
        {
          id: "justforyou",
          label: "🎯Just For You",
        },
      ],
    },
    dealProducts: {
      trending: [
        {
          id: "1",
          name: "Kim Crawford Wine",
          media: {
            type: "image",
            url: deal_img2,
          },

          year: 2021,
          region: "California",
          size: "750ML",
          rating: 4.8,
          price: 16.53,
          vipPrice: 12.62,
          salePrice: 11.45,
          tag: "tagText",
          isWishlisted: false,
        },
        {
          id: "2",
          name: "Kim Crawford Wine",
          media: {
            type: "image",
            url: deal_img3,
          },

          year: 2021,
          region: "California",
          size: "750ML",
          rating: 4.8,
          price: 16.53,
          vipPrice: 12.62,
          salePrice: 11.45,
          tag: "tagText",
          isWishlisted: false,
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
    brands: [
      {
        id: "1",
        image: willow,
        brandId: 1,
        order: 1,
      },
      {
        id: "2",
        Image: willow,
        brandId: 2,
        order: 2,
      },
      {
        id: "3",
        Image: willow,
        brandId: 3,
        order: 3,
      },
      {
        id: "4",
        Image: willow,
        brandId: 4,
        order: 4,
      },
    ],
  },
};

export const RecentlyViewedData = {
  title: "Recently Viewed",
  isVisible: "true",
  products: [
    {
      id: "1",
      name: "Kim Crawford Wine",
      media: {
        type: "image",
        url: deal_img2,
      },
      year: 2021,
      region: "California",
      size: "750ML",
      rating: 4.8,
      price: 16.53,
      vipPrice: 12.62,
      salePrice: 11.45,
      tag: "tagText",
      isWishlisted: false,
    },
  ],
};
