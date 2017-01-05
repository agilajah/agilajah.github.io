---
layout: post
title: Part 1, Reinforcement Learning Challenge - Multi-armed Bandits Problem
description: "x-days challenge on Reinforcement Learning, part 1"
tags: [x-days challenge, Bandit Problem, Reinforcement Learning, Machine Learning, Part-1]
comments: true
---

Sudah sekitar 4 (empat) hari saya berkutat dengan topik yang satu ini: **Reinforcement Learning**. *Reinforcement Learning* (RL) merupakan paradigma learning yang sangat menarik. Melalui RL banyak pencapaian-pencapaian yang tidak pernah dicapai sebelumnya seperti [mengalahkan juara dunia GO](https://research.googleblog.com/2016/01/alphago-mastering-ancient-game-of-go.html), [belajar memainkan permainan dari ATARI](http://www.nature.com/nature/journal/v518/n7540/abs/nature14236.html), dan masih banyak lagi yang lainnya.

Berbeda dengan tipe pembelajaran lainnya, RL lebih berfokus kepada *goal-directed learning* dan interaksi yang dilakukan dengan lingkungan. *Feedback* yang diberikan kepada *Agent* bersifat evaluatif, sedangkan pada tipe pembelajaran lain, misalnya pada *supervised learning* *feedback* yang diberikan bersifat instruksional. *Agent* RL tidak diberitahu aksi mana yang benar maupun salah melainkan diberikan *reward signal* sesuai dengan aksi yang dilakukan, yang menandakan seberapa baik aksi yang telah diambil tersebut. Karenanya dibutuhkan eksplorasi dan pembelajaran yang bersifat *trial-and-error* agar *Agent* dapat bertindak sesuai dengan yang seharusnya.

Persoalan-persoalan RL melibatkan pembelajaran terkait apa yang harus dilakukan dan bagaimana memetakan situasi-situasi ke aksi untuk memaksimalkan *reward signal*. Karena tidak adanya aksi yang "benar", yang dapat kita beritahu kepada *Agent* pada kondisi tertentu. Semuanya menjadi lebih menantang. 

Pada [bagian ke-1](http://www.febiagil.com/blog/2017/01/03/reinforcement-learning-challenge-part-0/) dari jurnal **xdays challenge** untuk RL ini, saya telah menuliskan solusi dari salah satu *environment* yang ada di [OpenAI Gym](http://gym.openai.com). Kali ini saya akan coba menuliskan catatan tentang apa yang saya dapatkan dalam dua hari belakangan terkait salah satu permasalahan dasar yang cukup menarik: *Multi-armed Bandits Problem*. Permasalahan ini sangat sederhana, namun dapat menjadi latihan yang baik sebagai dasar untuk memahami aspek umpan balik evaluatif dari RL. 

## Multi-armed bandit problem

![Slot machines in Las Vegas. Source : http://en.wikipedia.org]({{ site.url }}/images/2017/january/multiarmedbandit.jpg)

Andaikan kita dihadapkan pada sebuah permasalahan di mana kita memiliki beberapa pilihan, atau aksi yang berbeda. Setelah mengambil aksi atau pilihan, kita akan mendapatkan *reward* dari distribusi probabilitas yang stasioner. *Reward* tersebut bergantung kepada aksi yang kita ambil. Tujuan kita adalah untuk memaksimalkan ekspektasi jumlah *reward* dalam jangka waktu tertentu, misalkan 2500 kali pemilihan, atau *time-step*.

Persoalan tersebut merupakan salah satu bentuk *k-armed bandit problem*, dianalogikan dari *slot machine* (*one-armed bandit*). Namun, bukannya sebuah tuas, *k-armed bandit problem* melibatkan *k* buah tuas (atau k-buah *slot machine*). Setiap aksi atau pilihan diibaratkan menarik tuas dari *slot machine* tersebut, dan *reward* yang didapatkan adalah uang yang kita dapatkan jika *jackpot* terjadi. Setelah berulang kali memilih tuas, yang perlu kita lakukan adalah memaksimalkan uang yang kita dapatkan dengan berkonsentrasi pada tuas yang membuat kita menyentuh *jackpot* lebih sering. Sehingga kita dapat memenangkan lebih banyak uang (*reward*).

Sebelum membahas lebih lanjut, saya ingin menuliskan beberapa catatan terlebih dahulu. Ada beberapa hal yang sering muncul pada persoalan RL (bahkan menurut saya, menjadi fitur dari RL itu sendiri) adalah :

1. Aksi yang berbeda akan memberikan *reward* yang berbeda. Andaikan kita berada pada sebuah *dungeon*, apabila kita berbelok ke kanan mungkin kita akan jatuh ke jurang. Apabila kita belok ke kiri, mungkin kita akan menuju ke pintu keluar.

2. *Reward* tertunda (tidak didapatkan saat itu juga). Saat kita berbelok ke kiri, pada contoh di atas, mungkin kita tidak akan langsung sampai di pintu keluar. Namun dengan mengambil aksi tersebut, maka kita akan menuju lebih dekat ke pintu keluar, dan pada akhirnya dapat keluar dari *dungeon* tersebut.

3. *Reward* dari suatu aksi bergantung kepada *state* pada lingkungan. Artinya, aksi yang kita ambil pada suatu *state* di lingkungan akan memberikan *reward* yang berbeda apabila kita melakukan aksi yang sama di *state* yang berbeda. Masih pada contoh *dungeon*, berbelok ke kiri pada kasus di atas menjadi hal yang baik dan memberikan *reward* yang baik (pada akhirnya), namun saat kita dihadapkan pada pilihan yang sama (kanan atau kiri) di persimpangan yang berbeda, belum tentu memilih untuk berbelok ke kiri akan memberikan *reward* yang baik(atau lebih besar).

Pada *Multi-armed bandits problem* (atau *k-armed bandit*), aspek nomor 2 (dua) dan 3 (tiga) dapat kita hiraukan. Sehingga kita dapat berfokus kepada aksi yang terbaik yang dapat memaksimalkan *reward*.

## Exploitation vs Exploration

Setiap aksi pada *k-armed bandit problem* memiliki ekspektasi atau *mean reward*. Persoalan ini akan menjadi sangat mudah saat Anda tahu semua nilai yang dihasilkan jika kita mengetahui hasil dari setiap k: kita tinggal memilih tuas atau aksi mana yang memberikan *reward* tertinggi untuk setiap waktu. Untuk itu, kita asumsikan bahwa Anda tidak tahu dengan pasti nilai dari suatu aksi. Hal tersebut mendorong kita untuk mengestimasi nilai dari aksi tersebut.

Jika kita memiliki nilai hasil estimasi terhadap suatu aksi, di *time-step* manapun, dipastikan akan ada suatu aksi yang memiliki nilai estimasi tertinggi. Saat Anda selalu memilih aksi tersebut, artinya Anda mengeksploitasi (*exploiting*) pengetahuan yang Anda miliki saat itu tentang nilai dari suatu aksi. Oleh karenanya, hal tersebut seringkali disebut *greedy actions*.

Saat Anda mencoba opsi lain (*nongreedy actions*), maka kita sebut Anda bereksplorasi (*exploring*). Exploitasi mungkin akan menjadi pilihan logis untuk memaksimalkan *reward* pada langkah tertentu. Namun, perlu diperhatikan bahwa Anda mungkin akan mendapatkan *reward* yang lebih besar dalam jangka panjang jika melakukan eksplorasi.

Sebut saja terdapat suatu aksi yang Anda pastikan memaksimalkan *reward* pada suatu langkah. Namun, terdapat pilihan aksi lain yang diestimasi sama baiknya, dengan ketidakpastian substansial: salah satu darinya mungkin memiliki *reward* yang lebih baik dari aksi yang Anda yakini akan menghasilkan *reward* yang maksimal pada langkah tersebut. Jika *time-step* yang kita miliki masih bersisa banyak, memilih sesuatu yang tidak pasti yang (diestimasikan) memiliki *reward* lebih tinggi menjadi pilihan yang logis. Karena Andaikan pada akhirnya kita menemukan aksi yang dimaksud tersebut, kita dapat mengeksploitasinya di waktu selanjutnya. Artinya, *reward* yang rendah akan kita dapatkan saat eksplorasi, tapi dalam jangka panjang hal tersebut memberikan *reward* yang tinggi.

Namun, yang menjadi persoalan adalah, kita tidak dapat melakukan eksplorasi dan eksploitasi secara bersamaan (dalam satu aksi). Hal ini sering disebut konflik antara eksplorasi dan eksploitasi. Lalu, bagaimana kita menentukan apakah kita harus melakukan eksplorasi atau eksploitasi pada langkah tersebut?

Pada kasus tertentu, penentuan apakah harus melakukan eksplorasi atau eksploitasi pada suatu langkah bergantung kepada estimasi nilai suatu aksi, ketidakpastian, dan jumlah langkah yang masih tersisa. Beberapa metode sederhana tersedia untuk melakukan *balancing* antara eksplorasi dan eksploitasi, seperti $$\epsilon$$-*greedy* yang memaksa untuk memilih *non-greedy action* secara random. Sebagian besar aksi dipilih untuk eksploitasi, namun  sesekali dilakukan eksplorasi. Katakanlah dengan kemungkinan $$\epsilon$$. Namun metode ini bergantung kepada *task* apa yang coba diselesaikan. Apabila variansi dari *reward* kecil, misalnya 0, kemungkinan metode *greedy* biasa dapat lebih baik karena tanpa melakukan eksplorasi kita sudah dapat mengetahui nilai sesungguhnya dari suatu aksi.

Kita juga dapat menggunakan metode lain seperti *Upper-Confidence-Bound* yang memilih *non-greedy action* secara deterministik dengan cara lebih memilih aksi (*non-greedy*) yang berpeluang lebih optimal. 

Kedua metode tersebut berusaha mengestimasi nilai dari suatu aksi untuk mencoba menyeimbangkan antara eksplorasi dan eksploitasi. Namun kita masih memiliki alternatif lain seperti *Gradient Bandit Algorithm* yang mencoba 'melabeli' setiap aksi dengan tingkat preferensi pemilihan tertentu menggunakan distribusi *soft-max*. Aksi yang memiliki preferensi tertinggi, akan lebih sering dipilih.

Tentu masih lebih banyak metode yang lebih canggih selain dari yang telah disebutkan diatas. Namun banyaknya asumsi yang diberikan dan juga kompleksitas yang tinggi membuat metode-metode tersebut sangat tidak praktis untuk dipakai pada *RL problem*.

## Epsilon-Greedy

Well, dari sekian banyak metode dan pendekatan yang ada untuk menyeimbangkan antara eksplorasi dan ekploitasi seperti yang telah disebutkan di atas saya hanya akan mengimplementasikan salah satunya saja: $$\epsilon$$-*greedy method*. Implementasi solusi tersebut akan menggunakan python.

![Epsilon-greedy method. Source : http://blog.thedataincubator.com/2016/07/multi-armed-bandits-2/]({{ site.url }}/images/2017/january/epsilongreedy.png)

Hasil dari implementasi algoritma tersebut dapat Anda akses pada tautan berikut ini: [click here](https://github.com/agilajah/xdays-reinforcementLearning/blob/master/part1-MultiArmedBandits/part1-multiArmedBandits-epsilonGreedy.ipynb)

## What's next?

Catatan ini dibuat sesederhana mungkin. *Multi-armed bandits problem* yang disajikan pun bersifat *nonassociative*, di mana kita sama sekali tidak mengasosiasikan situasi dengan aksi tertentu. Banyak aspek teoritis dan hal-hal lain yang dihilangkan dari catatan ini. Selain itu, *task* yang dipresentasikan bersifat stasioner. Jika Anda tertarik untuk mempelajari lebih dalam tentang metode-metode yang disebutkan pada catatan ini, atau bahkan mempelajari persoalan bandit ini, Anda dapat mengunjungi tautan-tautan berikut:

1. [Bandit Theory 1](https://blogs.princeton.edu/imabandit/2016/05/11/bandit-theory-part-i/)
2. [Bandit Theory 2](https://blogs.princeton.edu/imabandit/2016/05/13/bandit-theory-part-ii/)
3. [Implementasi menggunakan TensorFlow](https://medium.com/@awjuliani/super-simple-reinforcement-learning-tutorial-part-1-fd544fab149#.ez5onx8jh)
4. [Implementasi metode-metode lain](https://github.com/bgalbraith/bandits/blob/master/notebooks/Stochastic%20Bandits%20-%20Value%20Estimation.ipynb)
5. [Contextual Bandits](http://blog.getstream.io/introduction-contextual-bandits/)










