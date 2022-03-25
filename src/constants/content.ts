import {
    FacebookOutlined,
    GooglePlusOutlined,
    GithubOutlined,
    SearchOutlined,
    LogoutOutlined,
    CameraOutlined,
    CloudServerOutlined,
    FormOutlined,
    EditOutlined,
    DeleteOutlined,
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

    navbarAdmin: {
        listItem: [
            { path: 'user', text: 'User' },
            { path: 'animals', text: 'Animals' },
            { path: 'animal-class', text: 'Animal Class' },
            { path: 'familia', text: 'Familia' },
            { path: 'ordo', text: 'Ordo' },
            { path: 'phylum', text: 'Phylum' },
            { path: 'regnum', text: 'Regnum' },
        ],
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
        textLink: 'See All',
        path: '/animals',
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

export const CONTENT_DETAIL = {
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

    listAnimal: {
        title: 'Animals',
        descTitle: 'of the same kind',
    },
}

export const CONTENT_ADMIN = {
    component: {
        actionList: [
            {
                key: 'edit',
                icon: EditOutlined,
            },

            {
                key: 'delete',
                icon: DeleteOutlined,
            },
        ],
    },

    userPages: {
        title: 'User',
        textAddUser: 'Add User',
        textEditUser: 'Edit User',
        pathAddUser: 'add',
        pageSize: 8,

        search: {
            placeholder: 'Find your animal',
            icon: SearchOutlined,
        },

        columnsTable: [
            {
                title: 'ID',
                dataIndex: '_id',
                key: '_id',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Role',
                dataIndex: 'role',
                key: 'role',
            },
        ],

        roles: [
            { value: 'VIEWER', text: 'VIEWER' },
            { value: 'EDITOR', text: 'EDITOR' },
            { value: 'ADMIN', text: 'ADMIN' },
        ],
    },
}
