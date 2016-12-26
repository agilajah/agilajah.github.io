---
layout: post
title: Membangun ulang situs personal
tags: [jekyll]
---

Satu tahun yang lalu saya memutuskan untuk memindahkan kegiatan menulis saya dari platform-platform seperti blogger ataupun wordpress ke situs pribadi saya. Setelah melalui beberapa pertimbangan dan melakukan percobaan, saya rasa jekyll merupakan static site generator yang cocok untuk membangun situs pribadi. Kita dapat melakukan preview situs secara local, dan juga sistem templating yang ditawarkan memberikan kemudahan dalam proses pembangunan website. Kita juga dapat memadukannya dengan [github](http://www.github.com) sebagai tempat hosting.

Selain gratis, menggunakan github sebagai 'platform' hosting dan blogging memberikan banyak kemudahan. Hal yang paling menarik adalah penggunaan markdown language untuk menulis konten pada situs dan juga proses penambahan-penyuntingan konten yang sangat mudah. Untuk menerbitkan artikel, kita dapat menggunakan command-command yang ada pada git.

Sejak beberapa bulan ini saya menggunakan tema bernama [HPSTR](https://github.com/mmistakes/hpstr-jekyll-theme). Beberapa hari terakhir saya sedang sibuk mendesain ulang [situs](http://www.febiagil.com) pribadi saya. Desain yang terdahulu memang tidak ada buruknya, semua tersedia dengan lengkap. Beberapa fitur standard seperti menampilkan gambar, video, dan source code pun didukung sepenuhnya. Namun saya rasa sudah saatnya ada perubahan.

Saya mencari inspirasi dari berbagai situs yang menurut saya  memiliki desain yang menarik. Salah satu situs yang menakjubkan, dari segi typography dan desainnya adalah situs milik [Sylvain Durand](http://www.sylvaindurand.org/). Template dari situs tersebut di-open source beberapa tahun sebelumnya, namun sekarang source code nya sudah dihapus.

Karena tertarik dengan desain dari situs tersebut, saya coba mereplika beberapa elemen-elemen yang ada dan membuat desain yang serupa. Walaupun ada legacy code template dari situs tersebut yang beredar di internet, proses perubahan dan penyuntingan situs ternyata cukup menyulitkan karena sistem terbaru dari github sudah tidak lagi mendukung beberapa hal yang ada pada legacy code tersebut. Seperti markup processor yang sudah diubah, kemampuan multibahasa yang rusak karena perbedaan versi jekyll, dan sebagainya.

Saya berpikir, jika terlalu  lama di proses desain, mungkin nanti kegiatan menulis saya akan terus tertunda. Untuk itu, saya putuskan untuk tidak membuat tema situs dari awal. Melainkan mencari situs yang saya rasa cukup baik untuk dijadikan base kemudian tinggal ditambahkan fitur-fitur yang saya inginkan.

Setelah mencari, saya menemukan situs yang menarik perhatian saya: [klik di sini](/blog/2013/07/29/which-markdown/). Situs tersebut sangat bersih dan rapi. Desain nya sangat minimal dan fokus terhadap konten. Saya rasa situs tersebut akan menjadi seed yang baik untuk dikembangkan. Kemudian saya coba untuk menghubungi pemilik situs tersebut untuk meminta kode sumber untuk dijadikan base code situs saya.

Untungnya, sang pemilik kode dengan senang hati mengizinkan saya menggunakan kode sumber miliknya. Dan, jadilah desain seperti sekarang ini. Belum banyak perubahan yang saya lakukan terhadap situs ini. Namun beberapa hal yang pasti akan saya ubah adalah typography dari situs ini. Untuk desain, saya pikir sudah cukup baik karena minimalis. Beberapa fitur yang akan saya tambahkan selanjutnya adalah share button, comment system, dan dukungan multibahasa.

Di situs terbaru ini, saya akan menulis beberapa hal dan yang paling utama adalah jurnal. Pada jurnal, saya akan mencoba menulis mulai dari opini pribadi sampai ke hal-hal yang saya pahami ataupun challenge dan progress dari beberapa project. Tujuan dari pembuatan jurnal tersebut adalah sebagai sumber bacaan yang berguna untuk mengingat suatu hal yang pernah saya pahami dan memantau kemajuan dari beberapa hal.
