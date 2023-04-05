const url = "https://api.jsonbin.io/v3/b/642bd24aebd26539d0a41f33"




// $(document).ready(function () {
//     $('#table').DataTable({
//       ajax: 'table.json',
//       columns: [
//         { data: '#' },
//         { data: 'Count' },
//         { data: 'Rate' },
//         { data: 'Total(IRT)' },
//         { data: 'Track ID' },
//         { data: 'Date' },
//         { data: 'Status' },
//         { data: 'Invoice' },
//       ],
//     });
//   })



// ----------------------------------------------------
// let jquery_datatable = $("#example").DataTable();

// $(document).ready(function() {

//     axios.get(url)
//    .then(function(response) {
//         let finalData = response.data.record.data;
//         console.log(finalData);

//         let tableData = "";
//         finalData.map((values) => {
//           tableData += `<tr class='text-center'>`;
//           tableData += `<td class='fw-bolder text-dark'>${values}</td>`;
//           tableData += `<td class='text-primary fw-bolder'>${values}</td>`;
//           tableData += `</tr>`;
//         });
//         document.getElementById('example').innerHTML = tableData;
//         // place the DataTables initialization command here:
//         let jquery_datatable = $("#example").DataTable();
//       }); // note how the above command MUST BE INSIDE the "then" function

//   });
// -------------------------------------
// function dataTable(data) {
//     $(document).ready(function () {
//         $('#example').DataTable({
//             ajax: data,
//         });
//     });
// }


// var table = $('#example').DataTable({
//   ajax: "data.json"
// });

// table.ajax.url(url);

// console.log(table);

const table = {
  "processing": true,
  "serverSide": true,
  "ajax": res.data.record.data,
  "columns": [
    { data: '#' },
    { data: 'Count' },
    { data: 'Rate' },
    { data: 'Total(IRT)' },
    { data: 'Track ID' },
    { data: 'Date' },
    { data: 'Status' },
    { data: 'Invoice' },
  ],
}


axios.get(url)
  .then(async res => {
    await console.log(res.data.record.data);
    await $('#example').DataTable();
  })


// axios.get(url)
//     .then(async (res) => {
//         const data = await res.data.record
//         await console.log(json(data));
//         await dataTable(toString(data))
//     })
