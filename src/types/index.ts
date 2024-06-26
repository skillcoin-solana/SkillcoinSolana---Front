export type INavLink = {
	imgURL: string;
	route: string;
	label: string;
};

export type IUpdateUser = {
	userId: string;
	name: string;
	bio: string;
	imageId: string;
	imageUrl: URL | string;
	file: File[];
	walletPubKey: string;
};

export type INewPost = {
	userId: string;
	caption: string;
	file: File[];
	price: string;
	tags?: string;
};

export type IUpdatePost = {
	postId: string;
	caption: string;
	imageId: string;
	imageUrl: URL;
	file: File[];
	price: string;
	tags?: string;
};

export type IUser = {
	id: string;
	name: string;
	username: string;
	email: string;
	imageUrl: string;
	bio: string;
	walletPubKey: string;
};

export type INewUser = {
	name: string;
	email: string;
	username: string;
	password: string;
};
