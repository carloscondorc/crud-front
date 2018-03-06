export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const GET_POST = 'GET_POST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'

export const SAVE_POST = 'SAVE_POST'
export const SAVE_POST_SUCCESS = 'SAVE_POST_SUCCESS'
export const SAVE_POST_FAILURE = 'SAVE_POST_FAILURE'

export const UPDATE_POST = 'SAVE_POST'
export const UPDATE_POST_SUCCESS = 'SAVE_POST_SUCCESS'
export const UPDATE_POST_FAILURE = 'SAVE_POST_FAILURE'

export const DELETE_POST = 'DELETE_POST'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE'

export function getPosts()
{
    return (dispatch, getState) => {
        fetch('https://owcrud-api.now.sh/api/posts')
            .catch(err => getPostsFailure(err))
            .then(res => res.json())
            .then(posts => getPostsSuccess(posts))
    }
}

export function getPostsSuccess(posts)
{
    return {
        type: GET_POSTS_SUCCESS,
        payload: posts
    }
}

export function getPostsFailure(error)
{
    return {
        type: GET_POSTS_FAILURE,
        payload: error
    }
}

export function getPost(id)
{
    return (dispatch, getState) => {
        fetch(`https://owcrud-api.now.sh/api/posts/${id}`)
            .catch(err => getPostFailure(err))
            .then(res => res.json())
            .then(post => getPostSuccess(post))
    }
}

export function getPostSuccess(post)
{
    return {
        type: GET_POST_SUCCESS,
        payload: posts
    }
}

export function getPostFailure(error)
{
    return {
        type: GET_POST_FAILURE,
        payload: error
    }
}

export function deletePost(id, i)
{
    return (dispatch, getState) => {
        fetch(`https://owcrud-api.now.sh/api/posts/${id}`, {
            method: 'DELETE'
        })
            .catch(err => deletePostFailure(err))
            .then(res => res.json())
            .then(post => deletePostSuccess(id, i, post))
    }
}

export function deletePostSuccess(id, i, post)
{
    return {
        type: DELETE_POST_SUCCESS,
        payload: {
            index: i,
            post
        }
    }
}

export function deletePostFailure(error)
{
    return {
        type: DELETE_POST_FAILURE,
        payload: error
    }
}

export function savePost(body)
{
    return (dispatch, getState) => {
        fetch('https://owcrud-api.now.sh/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .catch(err => savePostFailure(err))
        .then(res => res.json())
        .then(post => savePostSuccess(post))
    }
}

export function savePostSuccess(post)
{
    return {
        type: SAVE_POST_SUCCESS,
        payload: post
    }
}

export function savePostFailure(error)
{
    return {
        type: SAVE_POST_FAILURE,
        payload: error
    }
}

export function updatePost(body)
{
    return (dispatch, getState) => {
        fetch('https://owcrud-api.now.sh/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .catch(err => savePostFailure(err))
        .then(res => res.json())
        .then(post => savePostSuccess(post))
    }
}

export function updatePostSuccess(post)
{
    return {
        type: UPDATE_POST_SUCCESS,
        payload: post
    }
}

export function updatePostFailure(error)
{
    return {
        type: UPDATE_POST_FAILURE,
        payload: error
    }
}