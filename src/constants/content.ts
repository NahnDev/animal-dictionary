import {
    FacebookOutlined,
    GooglePlusOutlined,
    GithubOutlined,
    SearchOutlined,
    LogoutOutlined,
    CameraOutlined,
    CloudServerOutlined,
    FormOutlined,
} from '@ant-design/icons'

export const CONTENT_COMPONENT = {
    header: {
        titleLogo: 'Animals',
        navbar: [
            { path: '/home', text: 'Home' },
            { path: '/home', text: 'How it work' },
            { path: '/about', text: 'About us' },
            { path: '/login', text: 'Login' },
        ],

        textLogout: 'Logout',
        textUser: 'Hello, ',
    },

    footer: {
        titleLogo: 'Animals',
        descLogo: 'Information Animals',
        titleContact: 'Contact us',
        navbar: [
            { path: '/home', text: 'Home' },
            { path: '/home', text: 'How it work' },
            { path: '/about', text: 'About us' },
            { path: '/login', text: 'Login' },
        ],
        contact: ['animal@gmail.com', '(+84) 90000000'],
        icons: [{ icon: FacebookOutlined }, { icon: GooglePlusOutlined }, { icon: GithubOutlined }],
    },
}

export const CONTENT_LOGIN = {
    title: 'Login',
    desc: 'Log in with your account to the website.',
}

export const CONTENT_HOME = {
    landing: {
        title: 'Helping you',
        desc: 'to get information about your animal',

        search: {
            placeholder: 'Find your animal',
            icon: SearchOutlined,
        },
    },

    howitwork: {
        title: 'How it',
        descTitle: 'works',
        desc: "Let's login & add your animal information",

        listStep: [
            {
                icon: LogoutOutlined,
                title: 'Step One',
                desc: 'Log in with your account to the website.',
            },
            {
                icon: CameraOutlined,
                title: 'Step Two',
                desc: 'Upload the photo or video of your animal.',
            },
            {
                icon: FormOutlined,
                title: 'Step Three',
                desc: 'Enter your animal information on the website.',
            },
            {
                icon: CloudServerOutlined,
                title: 'Step Four',
                desc: 'Your animal information is saved in Cloud & Website.',
            },
        ],
    },

    listAnimal: {
        title: 'Animals',
        descTitle: 'information',
        desc: 'Get the information about animal',
    },
}

export const CONTENT_ANIMALS = {
    title: 'All Animal',
    desc: 'Get all information about animal',

    search: {
        placeholder: 'Search',
        icon: SearchOutlined,
    },

    filter: {
        defaultValue: 'all',
        defaultValueLabel: 'All',
    },
}
