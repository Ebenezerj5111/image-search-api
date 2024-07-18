
const searchImage = document.querySelector("#searchimage");
const searchBtn = document.querySelector("#searchbtn");
const showImage = document.querySelector(".image");

const ApiKey = "zz4UiPE_8IYTQVDLUDZzX8DpqRR-f03wUf4mPAi6FeU";

async function getData(searchVal, pageNo) {
    const apiurl = `https://api.unsplash.com/search/photos?query=${searchVal}&per_page=28&page=${pageNo}&client_id=${ApiKey}`;

    try {
        const response = await fetch(apiurl);
        const data = await response.json();
        console.log(response);

        let result = data.results;

        console.log(result);

        if (pageNo === 1) {
            showImage.innerHTML = "";
        }

        else {
            showImage.innerHTML = `<h2>No Results Found</h2>`;
            // console.log(error);
        }

        let html = "";

        result.forEach((data) => {

            html += `
                <div>
                    <img src="${data.urls.small}" alt="${data.alt_description}">
                </div>
            `;
        });

        showImage.innerHTML += html;
    }

    catch (error) {
        console.error("Error fetching data:", error);
        // console.log(error);
    }
}

searchBtn.addEventListener("click", () => {
    let searchVal = searchImage.value.trim();

    if (searchVal !== "") {
        getData(searchVal, 1);
    }

    else {
        showImage.innerHTML = `<h2>Please Search The Image</h2>`;
    }
});



// -------------------------------------------------------------------

// const searchImage = document.querySelector("#searchimage");
// const searchBtn = document.querySelector("#searchbtn");
// const showImage = document.querySelector(".image");


// const ApiKey = "zz4UiPE_8IYTQVDLUDZzX8DpqRR-f03wUf4mPAi6FeU";

// let pageNo = 1;
// let searchVal = "";

// async function getData(searchVal, pageNo) {
//     const apiurl = `https://api.unsplash.com/search/photos?query=${searchVal}&per_page=28&page=${pageNo}&client_id=${ApiKey}`;

//     const Response = await fetch(apiurl);
//     let data = await Response.json();
//     console.log(Response);

//     let result = data.results;

//     if (pageNo === 1) {
//         showImage.innerHTML = "";
//     }

//     else if (searchVal === "") {
//         showImage.innerHTML = `<h2>Please Search Image</h2>`;
//     }
//     else {

//     }

//     let html = "";

//     result.forEach((data) => {
//         html += `

//         <div>
//         <img src = ${data.urls.small} alt="";
//         </div>;
//         `
//     });

//     showImage.innerHTML += html;
//     console.log(result)
// }

// searchBtn.addEventListener("click", () => {
//     searchVal = searchImage.value;
//     getData(searchVal, 1);
// })
// --------------------------------------------------------------------