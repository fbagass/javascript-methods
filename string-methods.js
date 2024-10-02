// CharArt (index)

// mengambil karakter dari sebuah string pada index tertentu.
// contoh: mengambil karakter ketiga (index 2) pada string "Coding" maka output yang dihasilkan adalah "d".
let str1 = "Coding";
console.log("str1 = " + str1.charAt(2));
console.log("\n");


// Includes (search string)

// memeriksa apakah sebuah string mengandung substring tertentu (search string). method ini menggunakan nilai "true" jika substring ditemukan di dalam string dan "false" jika tidak ditemukan.
// contoh: mencari substring "fun" pada string "Coding is fun".
let str2 = "Coding is fun!";
console.log("str2 = " + str2.includes("fun"));
// contoh: mencari substring dengan menentukan posisi dimana pencarian akan dimulai.
console.log("str2 (index) = " + str2.includes("fun", 8));
console.log("str2 (index) = " + str2.includes("Coding", 8));
console.log("\n");


// Replace(searchValue, newValue)

// mengganti bagian tertentu dari sebuah string dengan string yang baru.
// contoh: mengganti substring "html" pada string "Coding html" menjadi "javascript".
let str3 = "Coding html, html is easy!";
console.log("str3 = " + str3.replace("html", "javascript")); // hanya berlaku pada subtring yang pertama ditemukan.
// contoh: mengganti semua substring yang muncul lebih dari satu yang ada pada string.
console.log("str3 (/substring/g) = " + str3.replace(/html/g, "javascript"))
console.log("\n");


// Slice(start, end)

// mengambil sebuah substring berdasarkan index yang ditentukan dan mengembalikannya sebagai string baru. jika index bernilai positif maka dihitung dari awal (depan) jika negatif dari akhir (belakang).
// contoh: mengambil substring dari index
let str4 = "Happy Coding!";
console.log("str4 = " + str4.slice(6, 12));
console.log("str4 = " + str4.slice(-13, -8));
console.log("\n");


// ToUpperCase()

// mengubah seluruh huruf dalam string menjadi huruf besar (uppercase). metode ini tidak mengubah string asli melaikan mengembalikan string baru dengan semua huruf dalam bentuk kapital.
// contoh: mengubah string "coding" menjadi "CODING".
let str5 = "coding";
console.log("str5 = " + str5.toUpperCase());
// contoh: menggunakan toUpperCase untuk validasi (misalnya perbandingan case-insensitive).
if(str5.toUpperCase() === "CODING") {
    console.log("str5 = true");
} 
console.log("\n");


// ToLowerCase()

// mengubah seluruh huruf dalam string menjadi huruf kecil (lowercase).
// contoh: mengubah string "CODING" menjadi "coding".
let str6 = "CODING";
console.log("str6 = " + str6.toLowerCase());
console.log("\n");


// Split(separator)

// memecah sebuah string menjadi array berdasarkan pemisah (separator) yang ditentukan. pemisah dapat berupa spasi (" ") atau karakter seperti tanda koma (",") dan lain-lain.
// contoh: memisahkan string berdasarkan spasi.
let str7 = "Coding is fun!";
console.log("str7 = " + str7.split(" "));
// contoh: menggunakan limit
console.log("str7 = " + str7.split(" ", 2));
console.log("\n");
