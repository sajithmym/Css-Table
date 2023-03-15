// https://hdzk6ybdhu2hlfusvjcavg.on.drv.tw/www.sajithmym.blog/show.txt
// $.ajax({
//     type: "get",
//     url: "https://hdzk6ybdhu2hlfusvjcavg.on.drv.tw/www.sajithmym.blog/show.txt",
//     success: function(r) {
//         console.log(r)
//     }
// });
console.log(" Console is working...")

go = document.getElementById('s')

my_code = ''

for (i=1; i != 101; ++i) {
    my_code += `<tr> 
            <td> Country ${i} </td> 
            <td> ${i*11} </td>
            <td> ${i*13} </td>
            <td> ${i*17} </td>
            <td> ${i*14} </td>
            </tr>`
}

go.innerHTML = my_code

setInterval(()=> $('#sj').DataTable(),1000)