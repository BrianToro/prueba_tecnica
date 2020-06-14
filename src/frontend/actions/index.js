import axios from "axios";

export const changePage = (payload) => ({
    type: "CHANGE_PAGE",
    payload,
});

export const nextPage = (payload) => {
    const numberOfPage = payload + 1;
    const URL = `/api/data/page/${numberOfPage}`;
    return (dispatch) => {
        axios({
            url: URL,
            method: "get",
        })
            .then(({ data }) => {
                const newState = {
                    data: data,
                    page: numberOfPage,
                };
                dispatch(changePage(newState));
            })
            .catch((error) => {
                console.log(error);
                dispatch(changePage({}));
            });
    };
};

export const backPage = (page) => {
    return (dispatch) => {
        const numberOfPage = page - 1;
        const URL = `/api/data/page/${numberOfPage}`;
        axios({
            url: URL,
            method: "get",
        })
            .then(({ data }) => {
                const newState = {
                    data: data,
                    page: numberOfPage,
                };
                dispatch(changePage(newState));
            })
            .catch((error) => {
                console.log(error);
                dispatch(changePage({}));
            });
    };
};
