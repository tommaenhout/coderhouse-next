import { Link } from "@/components/Header";

export const links : Link[] = [
    {
        name: 'clothes',
        nameToShow: 'Clothes',
        link: '/clothes',
        sublinks: [
            {
                name: 'Australian',
                link: '/clothes/australian'
            },
            {
                name: 'Air Max',
                link: '/clothes/hoodies'
            },
            {
                name: 'Jackets',
                link: '/clothes/hoodies'
            },
        ]
    },
    {
        name: 'music',
        nameToShow: 'Music',
        link: '/music',
        sublinks: [
            {
                name: "Thunderdome",
                link: '/music/thunderdome'
            },
            {
                name: "Hardcore Top 100",
                link: '/music/hardcore-top-100'
            },
            {
                name: "Hardcore Classics",
                link: '/music/hardcore-classics'
            }
        ]
    }
]