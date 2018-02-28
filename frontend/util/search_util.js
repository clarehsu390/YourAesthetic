export const getAllResults = (query) => (
    $.ajax({
        method: 'GET',
        url: `api/search`,
        data: {query}
    })
);