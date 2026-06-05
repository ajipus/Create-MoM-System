const tableBody =
document.getElementById("tableBody");

function addRow(){

    const rowNumber =
    tableBody.rows.length + 1;

    const row =
    document.createElement("tr");

    row.innerHTML = `

        <td class="number-cell">
            ${rowNumber}
        </td>

        <td class="category-value">

            <div class="table-cell-center">

                <select class="table-select">

                    <option>I</option>
                    <option>A</option>
                    <option>D</option>

                </select>

            </div>

        </td>

        <td>

            <div class="table-cell-center">

                <input

                    type="text"
                    class="table-input scope-input"
                    placeholder="Scope">

            </div>

        </td>

        <td>

            <div
                contenteditable="true"
                class="obs-editor"
                data-placeholder="Observation / Decision">
            </div>

        </td>

        <td>

            <div class="table-cell-center-date">

                <input
                    type="date"
                    class="table-input">

            </div>

        </td>

        <td>

            <div class="table-cell-center">

                <input
                    type="text"
                    class="table-input"
                    placeholder="Responsibility">

            </div>

        </td>

        <td class="no-print">

            <button
                class="delete-btn"
                onclick="deleteRow(this)">

                Delete

            </button>

        </td>

        `;

    tableBody.appendChild(row);
}

function deleteRow(btn){

    btn.closest("tr").remove();

    updateNumber();
}

function updateNumber(){

    const rows =
    tableBody.querySelectorAll("tr");

    rows.forEach((row,index)=>{

        row.querySelector(".number-cell")
        .textContent = index + 1;

    });
}

document.addEventListener("input",function(e){

    if(
        e.target.classList.contains(
        "table-textarea")
    ){

        e.target.style.height = "auto";

        e.target.style.height =
        e.target.scrollHeight + "px";
    }

});

function exportPDF(){

    window.print();

}

window.onload = ()=>{

    addRow();

};
