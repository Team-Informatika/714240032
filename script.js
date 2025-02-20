// Import fungsi yang diperlukan dari pustaka jscroot
import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.7/croot.js";
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";

// Gunakan proxy untuk menghindari masalah CORS (pastikan proxy berfungsi)
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl = "https://t.if.co.id/json/Fauzi.json";

// Ambil data JSON dari URL yang disediakan
getJSON(proxyUrl + targetUrl, {}, {}, responseFunction);

// Fungsi untuk menangani respons dan merender konten
function responseFunction(response) {
    console.log('Full Response:', response); // Debugging: cek struktur response

    // Pastikan response memiliki status dan data
    if (response && response.status && response.data) {
        console.log('HTTP Status:', response.status);
        console.log('Response Data:', response.data);

        // Menampilkan data ke dalam elemen tertentu (jika ada)
        if (document.getElementById("cardbenar")) {
            setInner("cardbenar", JSON.stringify(response.data, null, 2));
        }

        // Menyembunyikan pesan loading dan menampilkan konten utama
        const loadingElement = document.getElementById('loading');
        const mainContentElement = document.getElementById('main-content');

        if (loadingElement) loadingElement.style.display = 'none';
        if (mainContentElement) mainContentElement.style.display = 'block';
    } else {
        console.error("Format response tidak sesuai:", response);
    }
}
