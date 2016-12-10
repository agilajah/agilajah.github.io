---
title: ESE:Understands You, Everyday.(ID)
lang: id
ref: ese-understand
comments: true
---

Setiap dari kita menikmati keuntungan dari teknologi yang ada saat ini, bahkan walau kita tak mengerti bagaimana teknologi tersebut bekerja.

Internet, mesin mobil, handphone. Tidak ada satupun dari hal tersebut yang "masuk akal" tapi saat ini kita begitu ketergantungan dengan teknologi tersebut. Bahkan, saat ini rumah kita tak bisa lepas dari teknologi, Mesin cuci, microwave, dan penemuan-penemuan lainnya membuat hidup kita semakin mudah.

Bahkan, menurut saya, teknologi dapat menjadi teman. Bayangkan suatu teknologi yang dapat memahami kita dari gestur yang kita buat. Lalu dapat melakukan perubahan-perubahan terhadap lingkungan kita, sesuai dengan kondisi yang terjadi kepada kita pada saat itu. Misalkan, Saat Anda kepanasan dan membuat gestur yang bersesuaian, perangkat tertentu dapat secara otomatis menyalakan AC atau kipas angin yang ada di dekat Anda.

Hal tersebut dapat dicapai dengan memanfaatkan kinect untuk membaca gestur Anda. ESE adalah suatu produk yang saya bayangkan untuk dapat membaca gestur Anda, lalu memberikan aksi tertentu. Salah satu project yang akan saya buat nanti adalah Automasi aksi dari beberapa alat dengan memanfaatkan fitur-fitur yang ada pada kinect.

![Kinect. Source : olliebray.typepad.com]({{ site.url }}/images/2016/mei/ese-kinect.jpg)
{: .image-center}

Salah satu contoh pemanfaatan ESE adalah membuat perangkat seperti lampu dapat berubah secara otomatis sesuai dengan mood Anda, bernama lampee. Juga kipas angin yang dapat menyala tanpa Anda perintahkan karena ia dapat mengerti bahwa Anda sedang kepanasan yang diberi nama Fanomatic. ESE benar-benar dapat mengerti apa yang Anda inginkan, setiap saat. 

![RGB Lamp. Source : Fritzing.org]({{ site.url }}/images/2016/mei/ese-rgb-lamp.jpg)
{: .image-center}

Alat-alat yang dibutuhkan :

- 1 Arduino
- 1 Kinect
- 2 XBee 1mW antenna series1
- XBee Explorer Regulated
- XBee Explorer dongle
- Strip board
- Ultra bright white, red, green, blue LED @1x
- Fan
- Resistors

Setelah semua alat siap, beberapa hal yang harus dilakukan adalah memprogram Arduino sesuai dengan bagaimana alat yang ingin kita integrasikan dengan kinect bekerja. Untuk Lampee kita harus mengatur lampu untuk dapat berubah warna dengan memprogram Arduino, dan untuk Fanomatic pun dilakukan hal serupa dengan intruksi yang berbeda tentunya.

Lalu, jika sudah seleai memprogram Arduino, kita akan menggunakan NITE's user dan skeleton tracking untuk membaca gestur dari pengguna. Kali ini, skeleton tracking harus akan melakukan tracking secara tiga dimensi untuk mengetahui di mana user berada jika diibaratkan sebagai titik pada satu ruang. Beberapa library yang akan dipakai adalah OpenGL and Serial libraries, KinectOrbit, dan Simple-OpenNI.

### KESIMPULAN SEMENTARA

Saat ini, ESE dalam bayangan saya dapat mengautomasi berbagai alat dan tidak terbatas hanya kipas angin dan lampu. Jika diletakkan di ruang tamu, misalnya, atau tempat lain, ESE akan membuat ruangan tersebut senyaman mungkin sesuai dengan kebutuhan Anda. Untuk saat ini, source code program dan sketch kontrol awal, dan hal lain seperti kontrol untuk lampu belum dapat saya tunjukkan. Hal-hal tersebut akan saya tulis pada catatan selanjutnya, saat project ini selesai.

#### BERSAMBUNG