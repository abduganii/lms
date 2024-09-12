import { RuIcons } from "@/components/icon"

export const Navbar = [
    {
        id:1,
        label:'about-us',
        link:'about-us'
    },
    {
        id:2,
        label:'media',
        link:'media'
    },
    {
        id:3,
        label:'reports',
        link:'reports'
    },
    {
        id:4,
        label:'education',
        link:'education'
    },
]

export const LangArr = [
    {
        id:1,
        label:'ru',
        value:'ru',
        icons: ()=> RuIcons(),
    },
    {
        id:2,
        label:'en',
        value:'en',
        icons: ()=> RuIcons(),
    },
    {
        id:3,
        label:'uz',
        value:'uz',
        icons: ()=> RuIcons(),
    },
   
]