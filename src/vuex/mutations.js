export default {
    changeCity (state, city) {
        state.city = city
        try {
            localStorage.city = city // 把city存储在本都
        } catch (e) { }
    }
}