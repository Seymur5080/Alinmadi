class sirket {
   constructor(sirketAdi, filialAdi) {
      this.sirket = sirketAdi,
         this.filial = filialAdi
   }

   isciler = [
      [],
      [],
      []
   ]


   gonder() {
      let data = this.isciler;
      let ad = document.getElementById("ad").value;
      let vezife = document.getElementById("vezife").value;
      let maas = document.getElementById("maas").value;


      data[0].push(ad);
      data[1].push(vezife);
      data[2].push(maas);
   }


   table() {
      let data = this.isciler;

      let tbl = document.getElementById("tbl");
      let show = `<thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ad</th>
          <th scope="col">Vezife</th>
          <th scope="col">Maas</th>
        </tr>
      </thead>`;

      for (let i = 0; i < data[0].length; i++) {

         if (document.getElementById('select_value').value == 0) {
            show += `<tr>
               <th scope="row">${i + 1}</th>
               <td> ${data[0][i]} </td>
               <td>${data[1][i]}</td>
               <td>${data[2][i]}</td>
             </tr>`
            document.getElementById('filial').innerHTML(`Nizami`);
         } else if (document.getElementById('select_value').value == 1) {
            show += `
            <tr>
               <th scope="row">${i + 2}</th>
               <td> ${data[0][i]} </td>
               <td>${data[1][i]}</td>
               <td>${data[2][i]}</td>
             </tr>`
            document.getElementById('filial').innerHTML(`Elemler`);
         } else if (document.getElementById('select_value').value == 2) {
            show += `
            <tr>
               <th scope="row">${i + 3}</th>
               <td> ${data[0][i]} </td>
               <td>${data[1][i]}</td>
               <td>${data[2][i]}</td>
             </tr>`
            document.getElementById('filial').innerHTML(`Yasamal,`);
         }


      }
      tbl.innerHTML = show;
   }
}

const a = new sirket("Yup Technology", 'Nizami');
const b = new sirket("Yup Technology", 'Elmler');
const c = new sirket("Yup Technology", 'Yasamal');

document.getElementById("sirket").innerHTML = a.sirket;
document.getElementById("filial").innerHTML = a.filial;

let arr = [];

arr.push(a.filial, b.filial, c.filial);

function send() {
   a.gonder();
   a.table();
}


// for (let i = 0; i <= 3, i++) {
//    if (document.getElementById("select_value").value == 0) {

//    }
// }

// function gonder2() {
//    if (document.getElementById("one").value == "") {
//       alert("Bow gondermek olmaz");
//    }
// }
