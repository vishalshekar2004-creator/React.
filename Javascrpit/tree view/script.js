const tree = document.getElementById("tree");
const searchBox = document.getElementById("search");

function createTree(data) {
    tree.innerHTML = "";
    data.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = "tree-node";

        const countryContent = document.createElement("div");
        countryContent.className = "node-content country";

        countryContent.innerHTML = `<span class="icon">▶️</span>${country.name}`;
        countryDiv.appendChild(countryContent);

        const stateContainer = document.createElement("div");
        stateContainer.className = "children";

        country.states.forEach(state => {
            const stateDiv = document.createElement("div");
            stateDiv.className = "tree-node state";

            const stateContent = document.createElement("div");
            stateContent.className = "node-content";

            stateContent.innerHTML = `<span class="icon">▶️</span>${state.name}`;
            stateDiv.appendChild(stateContent);

            const cityContainer = document.createElement("div");
            cityContainer.className = "children";

            state.cities.forEach(city => {
                const cityDiv = document.createElement("div");
                cityDiv.className = "node-content city";
                cityDiv.textContent = `🏙️ ${city}`;
                cityContainer.appendChild(cityDiv);
            });

            stateDiv.appendChild(cityContainer);
            stateContainer.appendChild(stateDiv);

            stateContent.addEventListener("click", function () {
                cityContainer.classList.toggle("open");
                if (cityContainer.classList.contains("open")) {
                    stateContent.querySelector(".icon").textContent = "▼️";
                } else {
                    stateContent.querySelector(".icon").textContent = "▶️";
                }
            });
        });

        countryDiv.appendChild(stateContainer);
        tree.appendChild(countryDiv);

        countryContent.addEventListener("click", function () {
            stateContainer.classList.toggle("open");
            if (stateContainer.classList.contains("open")) {
                countryContent.querySelector(".icon").textContent = "▼️";
            } else {
                countryContent.querySelector(".icon").textContent = "▶️";
            }
        });
    });
}

createTree(treeData);


