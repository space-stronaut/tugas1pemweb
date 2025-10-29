const form = document.getElementById("form-login")
const email = document.getElementById("email")
const pass = document.getElementById("password")


var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta"
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar"
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat"
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP"
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat"
  }
];


form.addEventListener("submit", (e) => {
    e.preventDefault()
    let userCount = 0;

    dataPengguna.some(e => {
        if (e.email = email.value && e.password == pass.value) {
            userCount += 1
        }
    })

    if (userCount > 0) {
        alert("Login berhasil")
        window.location.href = "/dashboard.html"
    }else{
        alert("Akun tidak ditemukan, email/password salah")
    }
})

document.getElementById("register-form").addEventListener("submit", (e) => {
  e.preventDefault()
  let nama = document.getElementById("nama_register").value
  let email = document.getElementById("email_register").value
  let password = document.getElementById("password_register").value
  let role = document.getElementById("role_register").value
  let lokasi = document.getElementById("lokasi_register").value

  let id = dataPengguna[dataPengguna.length - 1].id + 1
  let obj = {
    id: id,
    nama: nama,
    email: email,
    password: password,
    role: role,
    lokasi: lokasi
  }

  dataPengguna.push(obj)
  alert("Pengguna baru telah terdaftar, silakan login kembali")
})