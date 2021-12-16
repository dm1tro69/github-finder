export type UsersType = {
    "login": string
    "id": number
    "node_id": string
    "avatar_url": string
    "gravatar_id": string
    "url": string
    "html_url": string
    "followers_url": string
    "following_url": string
    "gists_url": string
    "starred_url": string
    "subscriptions_url": string
    "organizations_url": string
    "repos_url": string
    "events_url": string
    "received_events_url": string
    "type":string
    "site_admin": boolean
    score?: number
}
export type UserType = {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    score: number
}

export type initialStateType = {
    users: UsersType[]
    user: any
    loading: boolean
}
type GetType = {
    type: 'GET_USERS'
    payload: UsersType[]
}
type GetUser = {
    type: 'GET_USER',
    payload: UserType
}
type ClearType = {
    type: 'CLEAR_USERS'
}
type SetLoadingType = {
    type: 'SET_LOADING'
}

export type ActionsType = GetType | SetLoadingType | ClearType | GetUser

type AlertRemoveType = {
    type: 'REMOVE_ALERT'
}
type SetType = {
    type: 'SET_ALERT'
    payload?: string
}

export type AlertType = SetType | AlertRemoveType