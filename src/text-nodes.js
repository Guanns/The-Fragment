export const textNodes = [
    // --- BABAK 1: RUMAH YANG SAKIT ---
    {
        id: 1,
        mapLabel: "Lorong Pikiran",
        quote: "Setiap rumah adalah sebuah rahim. Ada yang melahirkan kehangatan, ada yang menumbuhkan borok.",
        text: "Kau terbangun dalam kekosongan. Namamu ${playerName}, sebuah bisikan di tengah labirin pikiran Rika yang remuk. Di depanmu, dua pintu kenangan membusuk. Satu menuju kamar tidur Ibunya, yang lain menuju ruang keluarga yang pernah hangat.",
        options: [{
            text: 'Masuk ke Kamar Tidur Ibu.',
            nextText: 2,
            statChanges: { intuisi: 1 },
            journalEntry: "Mencari petunjuk dalam keheningan kamar Ibu.",
            expGain: 10
        }, {
            text: 'Selidiki Ruang Keluarga.',
            nextText: 3,
            statChanges: { keberanian: 1 },
            journalEntry: "Menghadapi sisa-sisa kebahagiaan di ruang keluarga.",
            expGain: 10
        }]
    },
    {
        id: 2,
        mapLabel: "Kamar Ibu",
        quote: "Wangi melati seringkali bukan untuk mengharumkan, tapi untuk menutupi bau bangkai.",
        text: "Aroma melati menusuk hidung, bercampur dengan bau obat penenang. Ranjangnya rapi, terlalu rapi. Di atas meja rias, sebuah kotak perhiasan kayu terkunci. Di sudut lain, sebuah lemari pakaian tua sedikit terbuka.",
        options: [{
            text: 'Coba buka kotak perhiasan.',
            nextText: 4,
            statChanges: { kejernihan: 1 },
            journalEntry: "Rasa penasaran membawaku ke kotak perhiasan Ibu.",
            expGain: 15
        }, {
            text: 'Periksa lemari pakaian.',
            nextText: 5,
            itemGain: { itemId: 'kainJarikIbu', quantity: 1 },
            statChanges: { empati: 1 },
            journalEntry: "Di dalam lemari, aku menemukan sesuatu yang menyedihkan.",
            expGain: 15
        }, {
            text: 'Kembali ke lorong.',
            nextText: 1
        }]
    },
    {
        id: 3,
        mapLabel: "Ruang Keluarga",
        quote: "Tawa yang direkam dalam foto tidak menjamin keasliannya.",
        text: "Ruangan ini dingin. Debu menari di sorot cahaya redup. Sebuah TV tabung mati, sofa yang robek, dan sebuah foto keluarga di dinding. Tapi ada yang aneh dengan foto itu.",
        options: [{
            text: 'Dekati foto keluarga itu.',
            nextText: 6,
            itemGain: { itemId: 'fotoKeluargaSobek', quantity: 1 },
            statChanges: { kejernihan: 2 },
            journalEntry: "Wajah Ayah hilang dari potret keluarga.",
            expGain: 20
        }, {
            text: 'Kembali ke lorong.',
            nextText: 1
        }]
    },
    {
        id: 4,
        mapLabel: "Kotak Terkunci",
        text: "Kotak itu terkunci rapat. Kau bisa merasakannya, ada sesuatu yang dingin dan tajam di dalamnya. Memaksanya hanya akan merusak isinya.",
        options: [{
            text: 'Tinggalkan saja.',
            nextText: 2
        }]
    },
    {
        id: 5,
        mapLabel: "Lemari Usang",
        text: "Di antara tumpukan pakaian Ibu, kau menemukan selembar kain jarik batik. Saat kau sentuh, kilasan memori muncul: Ibu yang menangis dalam diam sambil memeluk kain ini. Kau mengambil kain itu.",
        options: [{
            text: 'Lanjutkan mencari di kamar.',
            nextText: 2
        }]
    },
    {
        id: 6,
        mapLabel: "Foto Terluka",
        text: "Benar saja. Bagian wajah Ayah di foto itu disobek dengan paksa. Kau menarik foto dari bingkainya. Di baliknya, tulisan tangan seorang anak kecil: 'Ayah pergi biar Ibu tidak nangis lagi'. Sobekan ini membuka jalan baru di pikiran Rika: sebuah gang sempit di belakang rumah.",
        options: [{
            text: 'Telusuri gang belakang.',
            nextText: 7,
            statChanges: { keberanian: 1, stabilitas: -1 },
            journalEntry: "Sebuah jalan baru terbuka, jalan menuju luka yang lebih dalam.",
            expGain: 25
        }, {
            text: 'Tetap di dalam rumah.',
            nextText: 1
        }]
    },
    // --- BABAK 2: LUKA DARI LUAR ---
    {
        id: 7,
        mapLabel: "Gang Belakang",
        quote: "Anak-anak bisa lebih kejam dari monster, karena mereka belum mengerti arti dosa.",
        text: "Gang sempit dan becek ini membawamu ke sebuah lapangan bermain yang terlupakan. Ayunan berkarat, perosotan yang retak. Di tengahnya, gema tawa jahat bergema. Kau melihat bayangan Rika kecil, dan seorang anak laki-laki lain.",
        options: [{
            text: 'Dekati bayangan mereka.',
            nextText: 8,
            statChanges: { empati: 2, stabilitas: -1 },
            journalEntry: "Aku memberanikan diri mendekati kenangan pahit di taman.",
            expGain: 20
        }, {
            text: 'Bersembunyi dan mengamati.',
            nextText: 9,
            statChanges: { intuisi: 2 },
            journalEntry: "Dari kejauhan, aku menyaksikan awal dari sebuah perundungan.",
            expGain: 20
        }]
    },
    {
        id: 8,
        mapLabel: "Konfrontasi Semu",
        text: "Kau mendekat. Anak laki-laki itu berbalik, wajahnya bengis. 'Mau apa kau? Rika itu aneh! Ibunya gila!'. Dia mendorong bayangan Rika hingga jatuh. Tangan Rika kecil tergores kerikil tajam, sebuah kelereng indah jatuh dari sakunya dan retak.",
        options: [{
            text: 'Ambil kelereng yang retak itu.',
            nextText: 10,
            itemGain: { itemId: 'kelerengRetak', quantity: 1 },
            statChanges: { empati: 1 },
            journalEntry: "Aku memungut simbol pertemanan yang hancur.",
            expGain: 10
        }]
    },
    {
        id: 9,
        mapLabel: "Pengamat Pengecut",
        text: "Dari balik semak-semak, kau lihat anak laki-laki itu merebut kelereng dari tangan Rika. 'Ini bukan mainan anak aneh sepertimu!'. Dia melempar kelereng itu hingga retak, lalu pergi sambil tertawa. Rika hanya bisa menangis.",
        options: [{
            text: 'Ambil kelereng yang retak itu.',
            nextText: 10,
            itemGain: { itemId: 'kelerengRetak', quantity: 1 },
            statChanges: { empati: 1 },
            journalEntry: "Aku memungut simbol pertemanan yang hancur.",
            expGain: 10
        }]
    },
    {
        id: 10,
        mapLabel: "Jalan Pulang",
        text: "Memegang kelereng retak itu membuatmu merasakan sakitnya penghinaan. Langit di dunia pikiran ini berubah mendung. Jalan setapak kini terbelah dua. Satu menuju pemakaman umum yang berkabut, satu lagi kembali ke lorong rumah.",
        options: [{
            text: 'Berjalan menuju pemakaman.',
            nextText: 11,
            statChanges: { keberanian: 2, stabilitas: -2 },
            journalEntry: "Sesuatu memanggilku dari pemakaman. Sesuatu yang harus kuhadapi.",
            expGain: 30
        }, {
            text: 'Sudah cukup untuk hari ini. Kembali ke rumah.',
            nextText: 1
        }]
    },
    // --- BABAK 3: JANTUNG KEGELAPAN ---
    {
        id: 11,
        mapLabel: "Pemakaman Berkabut",
        quote: "Kuburan menyimpan lebih banyak rahasia daripada pengakuan dosa.",
        text: "Kabut tebal dan bau bunga kamboja menyesakkan. Nisan-nisan tua berdiri seperti gigi ompong. Di kejauhan, kau melihat sosok Ibu Rika sedang berjongkok di depan sebuah gundukan tanah tanpa nama.",
        options: [{
            text: 'Hampiri sosok Ibu.',
            nextText: 12,
            statChanges: { empati: 2, kejernihan: 1 },
            journalEntry: "Aku mendekati Ibu di tempat peristirahatan terakhir.",
            expGain: 35
        }, {
            text: 'Periksa nisan-nisan lain terlebih dahulu.',
            nextText: 13,
            statChanges: { intuisi: 2 },
            journalEntry: "Aku mencari jawaban di antara nama-nama yang telah tiada.",
            expGain: 35
        }]
    },
    {
        id: 12,
        mapLabel: "Rahasia Ibu",
        text: "Sosok Ibu tidak menyadari kehadiranmu. Dia menangis tanpa suara, tangannya mengelus gundukan tanah itu. 'Maafkan Ibu, Nak... Ayahmu terpaksa...'. Tiba-tiba dia menoleh padamu, matanya kosong. 'Kau seharusnya tidak di sini!'. Sosoknya melebur menjadi bayangan.",
        options: [{
            text: 'Periksa gundukan tanah yang ditinggalkannya.',
            nextText: 14,
            itemGain: { itemId: 'bungaKambojaKering', quantity: 1 },
            statChanges: { kejernihan: 2, stabilitas: -1 },
            expGain: 20
        }]
    },
    {
        id: 13,
        mapLabel: "Bisikan Orang Mati",
        text: "Kau berkeliling, membaca nama-nama di nisan. Tidak ada yang spesial. Tapi saat kau melewati sebuah pohon kamboja besar, kau mendengar bisikan lirih di angin, '...bukan salahnya... tumbal...'. Kau merasa merinding.",
        options: [{
            text: 'Cari sumber suara itu.',
            nextText: 11, // Kembali, membuat loop kecil
            statChanges: { intuisi: 1 },
            journalEntry: "Angin di pemakaman ini membawa pesan mengerikan."
        }, {
            text: 'Abaikan dan hampiri sosok Ibu.',
            nextText: 12
        }]
    },
    {
        id: 14,
        mapLabel: "Gundukan Tanpa Nama",
        text: "Di atas tanah lembab itu, kau menemukan sekuntum bunga kamboja yang mulai mengering. Saat kau memungutnya, sebuah kilasan memori terakhir yang paling brutal menghantammu: Ayah Rika, dengan wajah putus asa, melakukan ritual pesugihan. Dan tumbalnya... adalah adiknya Rika yang tak pernah lahir. Ibu dipaksa diam. Ayah pergi karena rasa bersalah. Rika melihat semuanya dari jendela.",
        options: [{
            text: 'TERIMA KENYATAAN INI.',
            nextText: 15,
            statChanges: { stabilitas: 3, kejernihan: 3 },
            journalEntry: "Aku akhirnya tahu. Dosa tergelap keluarga ini. Dan Rika adalah saksinya.",
            expGain: 100
        }]
    },
    // --- AKHIR ---
    {
        id: 15,
        mapLabel: "Cermin Retak",
        quote: "Menyembuhkan luka bukan berarti membuatnya hilang. Tapi belajar hidup dengan bekasnya.",
        text: "Kau kembali ke titik awal. Ke hadapan cermin di kamar Rika. Pantulan Rika di cermin kini menatapmu, tidak lagi tersenyum, hanya tatapan kosong penuh penderitaan. Dia bertanya tanpa suara, 'Lalu sekarang apa, ${playerName}? Apa yang harus kulakukan dengan rasa sakit ini?'.",
        options: [{
            text: 'Pecahkan cermin ini. Lupakan semuanya.',
            nextText: 16,
            journalEntry: "Aku memilih jalan pelupaan. Mungkin ini yang terbaik."
        }, {
            text: 'Rangkul pantulan itu. Terima lukanya.',
            nextText: 17,
            journalEntry: "Rasa sakit ini nyata, dan kita akan menghadapinya bersama."
        }, {
            text: 'Tatap balik dengan kebencian. Salahkan mereka.',
            requiredState: { keberanian: 7, kejernihan: 7 }, // Opsi butuh stat tinggi
            nextText: 18,
            journalEntry: "Bukan salah kita. Mereka yang harus membayar."
        }]
    },
    {
        id: 16,
        mapLabel: "Kepingan Hampa",
        text: "Kau memukul cermin itu hingga hancur berkeping-keping. Kegelapan menelanmu. Saat Rika terbangun di dunia nyata, ia merasa... hampa. Tidak ada sedih, tidak ada marah. Hanya kekosongan. Dia bisa menjalani hidup, tapi jiwanya telah mati. Kau, ${playerName}, lenyap selamanya.",
        options: [{ text: 'Mulai dari awal?', nextText: 1}]
    },
    {
        id: 17,
        mapLabel: "Fajar yang Pucat",
        text: "Kau menyentuh permukaan dingin cermin. 'Ini bagian dari dirimu, Rika. Dan aku di sini bersamamu.' Pantulan itu perlahan mengangguk, air mata mulai mengalir di pipinya. Untuk pertama kalinya, tangisan yang tulus. Saat Rika terbangun, beban di dadanya masih ada, tapi tidak lagi menghancurkan. Dia tahu jalan di depan akan berat, tapi dia tidak lagi sendirian. Kau, ${playerName}, kini menjadi bagian dari kekuatannya.",
        options: [{ text: 'Mulai dari awal?', nextText: 1}]
    },
    {
        id: 18,
        mapLabel: "Lingkaran Dendam",
        text: "Matamu menyala karena amarah yang diwariskan. 'Ini bukan salahmu, Rika. Ini salah mereka.' Pantulan di cermin menyeringai, sebuah senyum yang sama sekali bukan milik Rika. Saat Rika terbangun, hatinya telah membatu. Rasa sakitnya berubah menjadi dendam. Dia akan mencari semua orang yang telah menyakitinya, dan membuat mereka membayar. Kau, ${playerName}, telah menjadi bisikan iblis di telinganya.",
        options: [{ text: 'Mulai dari awal?', nextText: 1}]
    }
];