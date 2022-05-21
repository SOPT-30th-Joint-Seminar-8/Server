export interface PostResponseDto {
    posts: Posts[];
    hotProfiles: HotProfiles[];
}

export interface Posts {
    postId: string;
    userImg: string;
    userName: string;
    userEmail: string;
    text: string;
    likes: number;
    views: number;
    createdAt: Date;
}

export interface HotProfiles {
    userName: string;
    job: string;
    followers: number;
}
