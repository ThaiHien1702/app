import { postDataApi } from "../../utils/fetchData"

export const TYPES = {
    AUTH: 'AUTH'
}
export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: "NOTIFY", payload: { loading: true } })
        const res = await postDataApi('login', data)
        dispatch({
            type: "AUTH",
            payload: {
                token: res.data.access_token,
                user: res.data.user
            }
        })

        localStorage.setItem("firstLogin", true)

        dispatch({
            type: "NOTIFY",
            payload: {
                success: res.data.message
            }
        })
    } catch (error) {
        dispatch({
            type: "NOTIFY",
            payload: {
                error: error.response.data.message
            }
        })

    }
}