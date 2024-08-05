export interface IProduct {  
        id: number;
        title: string;
        description: string;
        inStock: number;
        price: number;
        slug: string;
        image: string;
        type: string;
 }

export const products : IProduct[] = [
    {
        id: 1,
        title: 'Australian Hardcore Streetwear Hoodie',
        description: 'Show your love for hardcore music with this stylish Australian hoodie, perfect for any rave.',
        inStock: 100,
        price: 310499,
        slug: '/clothes/australian',
        image: 'australian-hoodie.webp',
        type: 'australian'
    },
    {
        id: 2,
        title: 'Air Max Hardcore Sneakers',
        description: 'Experience ultimate comfort and style with these Air Max sneakers, designed for hardcore fans.',
        inStock: 50,
        price: 1200499,
        slug: '/clothes/shoes',
        image: 'air-max-hardcore-sneakers.webp',
        type: 'shoes'
    },
    {
        id: 3,
        title: 'Hardcore Bomber Jacket',
        description: 'Stay warm and look cool with this bomber jacket, featuring a hardcore music design.',
        inStock: 75,
        price: 499999,
        slug: '/clothes/bomberjackets',
        image: 'hardcore-bomber-jacket.webp',
        type: 'bomberjackets'
    },
    {
        id: 4,
        title: 'Hardcore T-Shirt',
        description: 'Rock this Philips branded t-shirt at your next rave, and represent hardcore music with pride.',
        inStock: 30,
        price: 650000,
        slug: '/clothes/australian',
        image: 'philips-hardcore-tshirt.webp',
        type: 'australian'
    },
    {
        id: 5,
        title: 'Thunderdome Compilation Album',
        description: 'A collection of the best tracks from the Thunderdome series, perfect for hardcore music enthusiasts.',
        inStock: 200,
        price: 150000,
        slug: '/music/thunderdome',
        image: 'thunderdome-compilation-album.webp',
        type: 'thunderdome'
    },
    {
        id: 6,
        title: 'Hardcore Top 100 Hits',
        description: 'An extensive collection of the top 100 hardcore tracks that defined the genre.',
        inStock: 150,
        price: 200000,
        slug: '/music/hardcore-top-100',
        image: 'hardcore-top-100-hits.webp',
        type: 'hardcore-top-100'
    },
    {
        id: 7,
        title: 'Hardcore Classics Collection',
        description: 'Relive the classics with this collection of timeless hardcore tracks.',
        inStock: 100,
        price: 180000,
        slug: '/music/hardcore-classics',
        image: 'hardcore-classics-collection.webp',
        type: 'hardcore-classics'
    }
];
