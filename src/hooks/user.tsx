import { createContext, useState } from "react";

export interface UserContextData {
    repos: IRepos[]
    data: UserData
    getUser: () => void;
}

interface UserData {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string | null;
    blog: string | null;
    location: string | null;
    email: string | null;
    hireable: string | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

interface IRepos {
    name: string;
    language: string;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider = ({ children }: any) => {
    const [data, setData] = useState<UserData>({} as UserData)
    const [repos, setRepos] = useState<IRepos[]>([] as IRepos[])


    async function getUser() {
        await fetch(`https://api.github.com/users/RodrigoGSantos1`)
            .then((res) => res.json())
            .then((data) => setData(data));

        await fetch(`https://api.github.com/users/RodrigoGSantos1/repos`)
            .then((res) => res.json())
            .then((data) => setRepos(data));
    }


    return (
        <UserContext.Provider
            value={{
                repos,
                data,
                getUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider };