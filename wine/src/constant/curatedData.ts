import {
  curated_img1,
  curated_img2,
  curated_img3,
  curated_img4,
  curated_img5,
  video,
} from "../assets";

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

export const BannerData = {
  banners: [
    {
      id: 1,
      title: "Everyday Value",
      description:
        "Enjoy high-quality wines, beers, and spirits at affordable prices—perfect for daily moments without compromising on taste",
      action: {
        id: 1,
        label: "Starting from $9.50",
        url: "/shop/everyday-value",
      },
      media: {
        type: "video",
        url: video,
      },
      order: 1,
    },
    {
      id: 2,
      title: "Premium Collection",
      description: "Discover our premium wines handpicked from the best vineyards worldwide.",
      action: {
        id: 1,
        label: "Shop Premium",
        url: "/shop/premium",
      },

      media: {
        type: "video",
        url: "https://example.com/images/wine-1.jpg",
      },

      order: 2,
    },
  ],
};

export const filtersData = {
  categories: [
    {
      categoryId: "1",
      categoryName: "Category",
      subCategories: [
        {
          categoryId: "1-1",
          categoryName: "Wines",
          categoryCount: "28",

          categoryList: [
            {
              listId: "1",
              listName: "Pinot Noir Aisle",
              categories: [
                { categoryId: "1-1-1-1", categoryName: "Premium Pinot" },
                { categoryId: "1-1-1-2", categoryName: "Classic Pinot" },
              ],
            },
            { listId: "2", listName: "Cabernet Aisle" },
            { listId: "3", listName: "Sparkling Aisle" },
            { listId: "4", listName: "Italian" },
          ],
        },
        {
          categoryId: "1-2",
          categoryName: "Beer",
          categoryCount: "50",
          categoryList: [
            { listId: "1", listName: "Lager" },
            { listId: "2", listName: "Pilsner" },
            { listId: "3", listName: "Stout" },
            { listId: "4", listName: "IPA" },
          ],
        },
        {
          categoryId: "1-3",
          categoryName: "Liquor",
          categoryCount: "28",
          categoryList: [
            { listId: "1", listName: "Pinot Noir Aisle" },
            { listId: "2", listName: "Cabernet Aisle" },
            { listId: "3", listName: "Sparkling Aisle" },
            { listId: "4", listName: "Italian" },
          ],
        },
      ],
    },

    {
      categoryId: "4",
      categoryName: "Size",
      categoryList: [
        { listId: "1", listName: "100ml" },
        { listId: "2", listName: "375ml" },
        { listId: "3", listName: "500ml" },
      ],
    },
    {
      categoryId: "5",
      categoryName: "Price Range",
      categoryRange: { min: 0, max: 500 },
    },
    {
      categoryId: "6",
      categoryName: "Occasion",
      categoryList: [
        { listId: "1", listName: "Everyday" },
        { listId: "2", listName: "Special Events" },
        { listId: "3", listName: "Gifts" },
        { listId: "4", listName: "Dinner Party" },
      ],
    },
    {
      categoryId: "7",
      categoryName: "Customer Rating",
      categoryList: [
        { listId: "1", listName: "4+ Stars" },
        { listId: "2", listName: "3+ Stars" },
        { listId: "3", listName: "Staff Recommended" },
      ],
    },
    {
      categoryId: "8",
      categoryName: "Tags",
      categoryList: [
        { listId: "1", listName: "Most Tasted" },
        { listId: "2", listName: "Most Viewed" },
        { listId: "3", listName: "Most Liked" },
        { listId: "4", listName: "Most Rated" },
      ],
    },
    {
      categoryId: "9",
      categoryName: "Origin",
      categoryList: [
        { listId: "1", listName: "France" },
        { listId: "2", listName: "Italy" },
        { listId: "3", listName: "Spain" },
        { listId: "4", listName: "USA" },
      ],
    },
    {
      categoryId: "10",
      categoryName: "Grape Variety",
      categoryList: [
        { listId: "1", listName: "Cabernet Sauvignon" },
        { listId: "2", listName: "Merlot" },
        { listId: "3", listName: "Pinot Noir" },
      ],
    },
    {
      categoryId: "11",
      categoryName: "Brand",
      categoryList: [
        { listId: "1", listName: "Oak" },
        { listId: "2", listName: "La Crema" },
        { listId: "3", listName: "Dom" },
        { listId: "4", listName: "Chateau" },
      ],
    },
    {
      categoryId: "12",
      categoryName: "Vintage Year",
      categoryList: [
        { listId: "1", listName: "2024" },
        { listId: "2", listName: "2023" },
        { listId: "3", listName: "2022" },
        { listId: "4", listName: "2021" },
      ],
    },
    {
      categoryId: "13",
      categoryName: "Alcohol Content",
      categoryRange: "30",
    },
  ],
};

export const tastingNotes = [
  {
    title: "Wine Maker Notes",
    description: "some random description",
  },
  {
    title: "Wine Maker Notes1",
    description: "some random description",
  },
];
