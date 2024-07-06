import global from "./global"

const getPageContext = (page) => {

    let pageVariables = {};
    switch (page) {
        case "":
            pageVariables = catalogoData;
            break;
    }
    return {
        ...pageVariables,
        ...global(page),
    };
}

export default getPageContext;