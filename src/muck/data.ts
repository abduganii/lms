
export const HeaderNavBar = [
    {
        id:1,
        label:'blogs',
        link:'/blogs',
    },
    {
        id:2,
        label:'news',
        link:'/news',
    },
    {
        id:3,
        label:'curs',
        link:'/curs',
    },
    {
        id:4,
        label:'resources',
        link:'/resources',
    },
    {
        id:5,
        label:'about-us',
        children: [
            {
                id:1,
                label:'contact',
                link:'/contact',
            },
            {
                id:2,
                label:'about-us',
                link:'/about-us',
            },
        ]
    }
]
export const Navbar = [
    {
        id:1,
        label:'about-us',
        link:'/',
        children: [
            {
                id:1,
                label:'contact',
                link:'/contact',
            },
            {
                id:2,
                label:'about-us',
                link:'/about-us',
            },
        ]
    },
    {
        id:2,
        label:'blogs',
        link:'/',
        children: [
            {
                id:1,
                label:'news',
                link:'/news',
            },
            {
                id:2,
                label:'blogs',
                link:'/blogs',
            },
        ]
    },
    {
        id:3,
        label:'education',
        link:'/',
        children: [
            {
                id:1,
                label:'resources',
                link:'/resources',
            },
            {
                id:2,
                label:'curs',
                link:'/curs',
            },
            // {
            //     id:3,
            //     label:'training-videos',
            //     link:'/training-videos',
            // },
            
        ]
    },
    
]

export const LangArr = [
    {
        id:1,
        label:'ru',
        value:'ru',
    },
    {
        id:2,
        label:'en',
        value:'en',
    },
    {
        id:3,
        label:'uz',
        value:'uz',
    },
   
]