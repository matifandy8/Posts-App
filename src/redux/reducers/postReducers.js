import {
	GET_POSTS,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAIL,
	CREATE_POST,
	CREATE_POST_SUCCESS,
	CREATE_POST_FAIL,
	DELETE_POST,
	DELETE_POST_SUCCESS,
	DELETE_POST_FAIL,
	DETAIL_POST,
	DETAIL_POST_SUCCESS,
	DETAIL_POST_FAIL,
	UPDATE_POST,
	UPDATE_POST_SUCCESS,
	UPDATE_POST_FAIL,
} from "../constants/postConstants";

export const postListReducer = (state = { posts: [] }, action) => {
	switch (action.type) {
		case GET_POSTS:
			return { loading: true, posts: [] };
		case GET_POSTS_SUCCESS:
			return { loading: false, posts: action.payload };
		case GET_POSTS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const postCreateReducer = (state = { post: {} }, action) => {
	switch (action.type) {
		case CREATE_POST:
			return { loading: true, post: {} };
		case CREATE_POST_SUCCESS:
			return { loading: false, post: action.payload };
		case CREATE_POST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const postDeleteReducer = (state = { post:{} }, action) => {
	switch (action.type) {
		case DELETE_POST:
			return { loading: true};
		case DELETE_POST_SUCCESS:
			return { loading: false, post: action.payload };
		case DELETE_POST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const postDetailReducer = (state = { post: {} }, action) => {
	switch (action.type) {
		case DETAIL_POST:
			return { loading: true, post: {} };
		case DETAIL_POST_SUCCESS:
			return { loading: false, post: action.payload };
		case DETAIL_POST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const postEditReducer = (state = { post: {} }, action) => {
	switch (action.type) {
		case UPDATE_POST:
			return { loading: true, post: {} };
		case UPDATE_POST_SUCCESS:
			return { loading: false, post: action.payload };
		case UPDATE_POST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};