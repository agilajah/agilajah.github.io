---
layout: post
title: Part 0, Reinforcement Learning Challenge - FrozenLake Environment
description: "x-days challenge on Reinforcement Learning, part 0"
tags: [x-days challenge, Reinforcement Learning, Machine Learning, Part-0]
comments: true
---

Di tahun yang baru ini saya memiliki beberapa program yang, harapannya, dapat menunjang proses belajar saya. Salah satunya adalah **x days challenge**. Di mana saya akan menantang diri saya sendiri untuk mempelajari suatu hal dalam x hari. 

Saya tidak menspesifikasikan nilai x karena saya rasa setiap topik memiliki tingkat kesulitan tersendiri dan unik. Jika saya paksakan untuk mempelajari hal-hal (dasar) terkait topik tersebut dalam, misalnya 7 hari, 2 pekan, dan sebagainya. Saya merasa hal tersebut akan membatasi eksplorasi saya di topik tersebut. Namun, hal tersebut juga dapat membuat proses belajar saya menjadi lebih lama karena kecenderungan untuk terus mempelajari hal lain (*which is good*), tapi akan berdampak kurang baik terhadap program ini. Karena waktu yang kita miliki terbatas, dan banyak topik yang menarik yang dapat dipelajari.

Untuk itu, saya putuskan untuk menentukannya sembari berjalan. Jika *goal*s saya dalam mempelajari topik tersebut sudah tercapai, maka saya pikir saat itu juga *challenge* tersebut sudah selesai.

Untuk challenge pertama yang akan saya jalani, saya memilih topik *reinforcement learning*. Kenapa? Karena saat ini saya sedang 'kasmaran' dengan *Machine Learning*, dan *reinforcement learning* (RL) merupakan 'aliran' *Machine Learning* yang paling memikat hati saya disebabkan sifatnya yang unik dibandingkan paradigma lainnya  (*supervised*, *unsupervised learning*).

Pada bagian ke-0 ini (saya akan memulai dari 0), saya akan mencoba mengimplementasikan sebuah solusi dari persoalan yang diambil dari [OpenAI Gym](http://gym.openai.com) menggunakan bahasa python. Beberapa catatan untuk mempermudah kita dalam memahami persoalan tersebut sudah saya tulis di sini, berikut dengan kode dari solusinya jika Anda ingin langsung melihat solusi: [click here](https://github.com/agilajah/xdays-reinforcementLearning/tree/master/day0-FrozenLake). Atau jika Anda ingin membaca lebih lanjut tentang persoalan dan bagaimana pendekatan yang digunakan untuk mencari solusi dari persoalan tersebut, silahkan untuk dibaca lebih lanjut.

## *FrozenLake Environment*

![FrozenLake Environment. Source : gym.openai.com]({{ site.url }}/images/2017/january/frozenlake.png)

Lingkungan FrozenLake (FrozenLake *environment*) merupakan salah satu *environment* yang tersedia di [OpenAI Gym](http://gym.openai.com). Terdiri dari *grid* 4x4. Setiap block *grid* merupakan salah satu dari: *start block*, *goal block*, *safe frozen block*, dan *dangerous hole*. Sasaran kita adalah untuk membuat *agent* kita dapat bergerak dari *start block* ke *goal block* tanpa terjatuh ke lubang manapun. Namun, ada angin yang sesekali berhembus yang akan membuat *agent* tertiup ke tempat yang tidak diinginkan. 

Bisa jadi, kita terjatuh ke lubang! Karenanya, kinerja yang sempurna dari *agent* di setiap waktu akan menjadi hal yang mustahil. Tetapi belajar untuk menghidari lubang dan mencapai *goal* masih sangat memungkinkan. *reward* yang diberikan di setiap langkah nya adalah 0, kecuali saat kita masuk ke *goal block*, di mana *reward*nya adalah 1.


## *Solution*

Pada kasus ini, kita membutuhkan algoritma yang dapat belajar dengan ekspektasi *reward* jangka panjang (karena kita hanya akan mendapatkan *reward* saat mencapai *goal block*). Untuk itu, kita akan menggunakan Q-Learning. Karena Q-learning sangat cocok untuk diterapkan pada persoalan semacam ini.

Pada bentuk paling sederhana dari *Reinforcement Learning*, kita dapat menggunakan *lookup table* atau *arrays* untuk menyimpan aproksimasi dari *value function* (karena ruang kondisi dan aksi (*state* and *action* *spaces*) cukup kecil). Untuk kasus frozenlake *environment*, kita akan membuat *table* nilai untuk setiap *state* dan *action* yang mungkin pada *environment*, di mana *state* adalah *row* pada *table* dan *action* adalah *column* pada *table*.

Ada 16 *state* yang mungkin pada lingkungan frozenlake, dan 4 buah aksi yang mungkin pada setiap *state* tersebut. Sehingga ukuran *table* untuk menyimpan aproksimasi nilai dari *value function* tersebut adalah 16x4. 

Kita akan meng*update* Q-*table* menggunakan persamaan Bellman yang menyatakan bahwa '*long-term* *reward* yang diharapkan untuk aksi yang diberikan sama dengan *immediate reward* dari aksi saat ini dikombinasikan dengan *reward* yang diharapkan dari aksi masa depan yang paling baik yang diambil di *state* berikutnya' yang dapat kita tuliskan dengan persamaan berikut : 

`Q(s, a) = r + γ (max(Q (s', a')))`

di mana (s) adalah *state* saat itu, (a) adalah aksi pada *state* tersebut, (r) adalah *reward*, (y) adalah discount-rate parameter, (s') adalah *state* selanjutnya, dan (a') adalah aksi berikutnya pada (s'). Discount-rate parameter digunakan untuk mempertimbangkan sebarapa penting kah *reward* di masa mendatang jika dibandingkan dengan *reward* saat ini.

Dengan meng*update* *table* dengan cara seperti ini, *table* tersebut perlahan-lahan akan berisikan perhitungan yang cukup akurat terhadap *reward* di masa yang akan datang untuk *state* saat ini dan aksi di *state* tersebut.

Apabila kita tinjau algoritma Q dalam konteks [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent), maka `r + γ(max(Q(s’,a’))` adalah hal yang ingin coba kita capai. Tapi kita tahu bahwa `r + γ(max(Q(s’,a’))` merupakan estimasi dengan *noise* dari nilai Q yang sebenarnya pada area tersebut. Jadi, kita tidak akan meng*update* *Q-table* menggunakan persamaan tersebut melainkan menambahkan sedikit langkah untuk membuat nilai Q mendekati yang kita inginkan. Maka kita gunakan `Q[s,a] ←Q[s,a] + α(r+ γ * max Q[s',a'] - Q[s,a])` atau `Q[s,a] ←(1-α) Q[s,a] + α(r+ γ * max Q[s',a'])` di mana `α` adalah *step-size parameter* yang memengaruhi kecepatan belajar, atau dapat dikatakan '*learning rate*', dan `γ` adalah *discount-rate parameter*.



