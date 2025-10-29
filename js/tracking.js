var dataTracking = {
  "2023001234": {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan:[
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },      
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan"
      },
    ]
  },
  "2023005678": {
    nomorDO: "2023001234",
    nama: "Agus Pranoto",
    status: "Dikirim",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan:[
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },      
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Kota Bandung"
      },
      {
        waktu: "2025-08-26 12:15:33",
        keterangan: "Tiba di Hub: Kota BANDUNG"
      },
      {
        waktu: "2025-08-26 15:06:12",
        keterangan: "Proses antar ke Cimahi"
      },
      {
        waktu: "2025-08-26 20:00:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto"
      }
    ]
  }
};

const tracking_search = document.getElementById("tracking_search")
const code_search = document.getElementById("kode_search")

tracking_search.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(code_search.value)
    console.log(dataTracking[code_search.value])
    let data = dataTracking[code_search.value]

    document.getElementById("body").innerHTML += "<tr><td>"+data.nomorDO+"</td><td>"+data.nama+"</td><td>"+data.status+"</td><td>"+data.ekspedisi+"</td><td>"+data.tanggalKirim+"</td><td>"+data.paket+"</td><td>"+data.total+"</td></tr>"

    data.perjalanan.forEach(e => {
      document.getElementById("perjalanan").innerHTML += "<tr><td>"+e.waktu+"</td><td>"+e.keterangan+"</td></tr>"
    })

    let submit = document.getElementById("submit-button")
    let reset = document.getElementById("reset-button")

    submit.style.display = "none"
    reset.style.display = "block"
})

document.getElementById("reset-button").addEventListener("click", () => {
  document.getElementById("body").innerHTML = ""
  document.getElementById("perjalanan").innerHTML =
  code_search.value = ""

  let submit = document.getElementById("submit-button")
    let reset = document.getElementById("reset-button")

    submit.style.display = "block"
    reset.style.display = "none"
})