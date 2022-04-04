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
    FilterOutlined,
} from '@ant-design/icons'

export const CONTENT_COMPONENT = {
    header: {
        titleLogo: 'Animals',
        navbar: [
            { path: '/home', text: 'Home' },
            { path: '/animals', text: 'Animals' },
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
            { path: 'user', text: 'User', roles: ['ADMIN'] },
            { path: 'animals', text: 'Animals', roles: ['ADMIN', 'EDITOR'] },
            { path: 'animal-class', text: 'Animal Class', roles: ['ADMIN', 'EDITOR'] },
            { path: 'familia', text: 'Familia', roles: ['ADMIN', 'EDITOR'] },
            { path: 'ordo', text: 'Ordo', roles: ['ADMIN', 'EDITOR'] },
            { path: 'phylum', text: 'Phylum', roles: ['ADMIN', 'EDITOR'] },
            { path: 'regnum', text: 'Regnum', roles: ['ADMIN', 'EDITOR'] },
            { path: 'import', text: 'Import', roles: ['ADMIN', 'EDITOR'] },
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
        iconFilter: FilterOutlined,
        titleFamilia: 'Familia',
        titleOrdo: 'Ordo',
        titleClass: 'Class',
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

    animals: {
        title: 'Animal',
        textAdd: 'Add animal',
        textEdit: 'Edit animal',
        pageSize: 3,

        search: {
            placeholder: 'Find animal',
            icon: SearchOutlined,
        },

        columnsTable: [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                width: 200,
            },
            {
                title: 'Name Plate',
                dataIndex: 'nameplate',
                key: 'nameplate',
                width: 200,
            },
            {
                title: 'Science Name',
                dataIndex: 'scienceName',
                key: 'scienceName',
                width: 300,
            },

            {
                title: 'Morphological',
                dataIndex: 'morphological',
                key: 'morphological',
                width: 900,
            },
            {
                title: 'Ecological',
                dataIndex: 'ecological',
                key: 'ecological',
                width: 400,
            },
        ],

        roles: [
            { value: 'VIEWER', text: 'VIEWER' },
            { value: 'EDITOR', text: 'EDITOR' },
            { value: 'ADMIN', text: 'ADMIN' },
        ],
    },

    userPages: {
        title: 'User',
        textAddUser: 'Add User',
        textEditUser: 'Edit User',
        pageSize: 8,

        search: {
            placeholder: 'Find user',
            icon: SearchOutlined,
        },

        columnsTable: [
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

    animalClass: {
        title: 'Animal Class',
        textAdd: 'Add Animal Class',
        textEdit: 'Edit Animal Class',
        pageSize: 8,

        search: {
            placeholder: 'Find animal class',
            icon: SearchOutlined,
        },
    },

    familia: {
        title: 'Familia',
        textAdd: 'Add familia',
        textEdit: 'Edit familia',
        pageSize: 8,

        search: {
            placeholder: 'Find familia',
            icon: SearchOutlined,
        },
    },

    ordo: {
        title: 'Ordo',
        textAdd: 'Add ordo',
        textEdit: 'Edit ordo',
        pageSize: 8,

        search: {
            placeholder: 'Find ordo',
            icon: SearchOutlined,
        },
    },

    phylum: {
        title: 'Phylum',
        textAdd: 'Add phylum',
        textEdit: 'Edit phylum',
        pageSize: 8,

        search: {
            placeholder: 'Find phylum',
            icon: SearchOutlined,
        },
    },

    regnum: {
        title: 'Regnum',
        textAdd: 'Add regnum',
        textEdit: 'Edit regnum',
        pageSize: 8,

        search: {
            placeholder: 'Find regnum',
            icon: SearchOutlined,
        },
    },

    columnsTableTemp: [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
    ],
}