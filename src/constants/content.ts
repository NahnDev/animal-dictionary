import { FacebookOutlined, GooglePlusOutlined, GithubOutlined } from '@ant-design/icons'

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
