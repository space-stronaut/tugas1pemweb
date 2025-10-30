var dataBahanAjar = [
  {
    kodeLokasi: "0TMP01",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548,
    cover: "img/pengantar_komunikasi.jpg"
  },
  {
    kodeLokasi: "0JKT01",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392,
    cover: "img/manajemen_keuangan.jpg"
  },
  {
    kodeLokasi: "0SBY02",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278,
    cover: "img/kepemimpinan.jpg"
  },
  {
    kodeLokasi: "0MLG01",
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 165,
    cover: "img/mikrobiologi.jpg"
  },
  {
    kodeLokasi: "0UPBJJBDG",
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 204,
    cover: "img/paud_perkembangan.jpeg"
  }
];

function getData() {
    document.getElementById("body").innerHTML = ""
    dataBahanAjar.forEach(e => {
    document.getElementById("body").innerHTML += "<tr><td>"+ e.kodeLokasi +"</td><td>"+ e.kodeBarang +"</td><td>"+ e.namaBarang +"</td><td>"+ e.jenisBarang +"</td><td>"+ e.edisi +"</td><td>"+ e.stok +"</td><td><img width=100 src='assets/"+ e.cover +"'/></td></tr>"

    return
})
}

getData()

document.getElementById("stok-form").addEventListener("submit", (e) => {
    e.preventDefault()

    let kodeLokasi = document.getElementById("kodeLokasi").value
    let kodeBarang = document.getElementById("kodeBarang").value
    let namaBarang = document.getElementById("namaBarang").value
    let jenisBarang = document.getElementById("jenisBarang").value
    let edisi = document.getElementById("edisi").value
    let stok = document.getElementById("stok").value
    let cover = document.getElementById("cover").value

    const obj = {
        kodeLokasi: kodeLokasi,
        kodeBarang: kodeBarang,
        namaBarang: namaBarang,
        jenisBarang: jenisBarang,
        edisi: edisi,
        stok: stok,
        cover: cover
    }

    dataBahanAjar.push(obj)

    kodeLokasi = ""
    kodeBarang = ""
    namaBarang = ""
    jenisBarang = ""
    edisi = ""
    stok = ""
    cover = ""

    document.getElementById("alert").style.display = "block"

    setTimeout(() => {
      document.getElementById("alert").style.display = "none"
    }, 5000);

    getData()
})