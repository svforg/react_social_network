type PostsType = {
    id: number
    text: string
    like: number
};

type ProfileType = {
    posts: Array<PostsType>
};

type PersonsType = {
    id: number
    name: string
};

type MessagesType = {
    id: number
    text: string
};

type DialogsType = {
    persons: Array<PersonsType>
    messages: Array<MessagesType>
};

type SidebarItemsType = {
    slug: string
    title: string
}

type SidebarType = {
    sidebarItems: Array<SidebarItemsType>
}

type RootStateType = {
    profile: ProfileType
    dialogs: DialogsType
    sidebar: SidebarType
}

let state: RootStateType = {
    profile: {
        posts : [
            {id: 1, text:"Hello world", like: 10 },
            {id: 2, text:"It's first post", like: 20 },
            {id: 3, text:"It's second post", like: 30 },
        ],
    },
    dialogs: {
        persons : [
            {id: 1, name: "Slavbl4"},
            {id: 2, name: "Dimbl4"},
            {id: 3, name: "Svetbl4"},
            {id: 4, name: "Yambl4"},
        ],
        messages : [
            {id: 1, text: "hi from Slavbl4"},
            {id: 2, text: "hi from Dimbl4"},
            {id: 3, text: "hi from Svetbl4"},
            {id: 4, text: "hi from Yambl4"},
        ],
    },
    sidebar: {
        sidebarItems : [
            { slug:"/profile", title: "Profile" },
            { slug:"/dialogs", title: "Messages" },
            { slug:"/news", title: "News" },
            { slug:"/music", title: "Music" },
            { slug:"/settings", title: "Settings" }
        ],
    }
};

export default state;