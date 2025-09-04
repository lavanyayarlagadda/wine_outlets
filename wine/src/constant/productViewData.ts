import { deal_img2, deal_img3, deal_img4 } from "../assets";
export interface Media {
    type: "image" | "video";
    url: string;
}

export interface BottleSize {
    label: string;
    id: string;
}

export interface vintage {
    year: string;
    in_stock: boolean;
    pricing: Pricing;
}

export interface Pricing {
    price: number;
    vipPrice?: number;
    salePrice?: number;
    tag?: string;
}

export interface ProductDetails {
    itemId: string;
    name: string;
    rating: number;
    review_count: number;
    brand: string;
    origin: string;
    size: string;
    alcoholByVolume: string;
    grapheComposition: string;
    bottle_size: BottleSize[];
    other_vintages: vintage[];
    pricing: Pricing;
    isWishlisted: boolean;
    cartQunatity: number;
    description: string;
    highlights: string;
    details: {
        color: string;
        aroma: string;
        taste: string;
        seasons: string;
        occasions: string;
    };
    foodPairings: string;
    in_stock: boolean;
    images: Media[];
}

export interface ProfessionalRating {
    title: string;
    score: number;
    description: string;
}

export interface TastingNote {
    title: string;
    description: string;
}

export interface SuggestedProduct {
    id: number;
    name: string;
    year: number;
    region: string;
    size: string;
    rating: number;
    price: number;
    vipPrice?: number;
    salePrice?: number;
    tag?: string;
    isWishlisted?: boolean;
    description?: string;
    media: Media;
}

export interface SuggestedProductsSection {
    totalViPPrice?: string;
    totalPrice?: string;
    products: SuggestedProduct[];
}

export interface ProductViewResponse {
    product: ProductDetails;
    professionalRating: ProfessionalRating[];
    tastingNotes: TastingNote[];
    suggestedProducts: (SuggestedProduct | { totalViPPrice?: string; totalPrice?: string })[];
}



export const productViewData: ProductViewResponse = {
    product: {
        itemId: "chateau-margaux-2018",
        name: "Château Margaux - 2018",
        rating: 4,
        review_count: 128,
        brand: "Château Margaux",
        origin: "California",
        size: "750.ML",
        alcoholByVolume: "15%",
        grapheComposition: "Cabernet Sauvignon 85%",
        bottle_size: [
            { label: "750ml - Standard", id: "750ML_STD" },
            { label: "500ml - Standard", id: "500ML_STD" }
        ],
        other_vintages: [
            {
                year: "2016",
                in_stock: true,
                pricing: {
                    price: 18.53,
                    vipPrice: 14.62,
                    salePrice: 13.45,
                    tag: "Best Seller"
                }
            },
            {
                year: "2017",
                in_stock: false,
                pricing: {
                    price: 17.53,
                    vipPrice: 13.62,
                    salePrice: 12.45,
                    tag: "Limited Stock"
                }
            },
            {
                year: "2019",
                in_stock: true,
                pricing: {
                    price: 19.53,
                    vipPrice: 15.62,
                    salePrice: 14.45,
                    tag: "New Arrival"
                }
            }
        ],
        pricing: {
            price: 16.53,
            vipPrice: 12.62,
            salePrice: 11.45,
            tag: "tagText"
        },
        isWishlisted: true,
        cartQunatity: 0,
        description: "The 2018 vintage represents the primacy of Barcloux winemaking excellence. Château Margaux has crafted a wine for extraordinary complexity and retirement, showcasing the unique sense of the Margaux application.",
        highlights: "Italy – Bright and inviting with a pale straw hue. The aroma features fresh rice fruits, especially ripe pear. Light-colored and refreshing crisp, this Prick grigio clatteries vibrant fruit leaves and truly exactly. An easy-defining wine brute perfect for berries, casual girl-bogprints, and sunny afternoons.",
        details: {
            color: "Dries fully red",
            aroma: "Dark berries, cocoa, and subtle spice",
            taste: "July's and smooth with notes of gum, blackberry, mocha, and a soft, ugly finish",
            seasons: "Fat & Winter",
            occasions: "Elmore Perkins, Cecy Mights in, Westered Meats, Casual Gathering"
        },
        foodPairings: "Pain beautifully with grilled steak, turtle frosted, and braised lamb. Also recommended as an example of food pairings that are not made by any other manufacturer or manufacturer.",
        in_stock: true,
        images: [
            { type: "image", url: deal_img2 },
            { type: "image", url: deal_img3 },
            { type: "image", url: deal_img4 },
            { type: "image", url: deal_img3 },

        ]
    },
    professionalRating: [
        { title: "James Suckling", score: 40, description: "Beautiful, ripe redcurrants, bay leaf, violets and raspberries on the nose. Full-bodied with firm and very tight tannins" },
        { title: "James Suckling", score: 90, description: "Beautiful, ripe redcurrants, bay leaf, violets and raspberries on the nose. Full-bodied with firm and very tight tannins" },
        { title: "James Suckling", score: 40, description: "Beautiful, ripe redcurrants, bay leaf, violets and raspberries on the nose. Full-bodied with firm and very tight tannins" }
    ],
    tastingNotes: [
        { title: "Wine Maker Notes", description: "some random description" },
        { title: "Wine Maker Notes", description: "some random description" }
    ],
    suggestedProducts: [
        {
            id: 1,
            name: "Kim Crawford Wine",
            year: 2021,
            region: "California",
            size: "750ML",
            rating: 4.8,
            price: 16.53,
            vipPrice: 12.62,
            salePrice: 11.45,
            tag: "tagText",
            isWishlisted: true,
            description: "This 2018 vintage represents",
            media: { type: "image", url: deal_img4 }
        }
    ]
};