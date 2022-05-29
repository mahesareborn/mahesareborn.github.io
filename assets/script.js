// import { topBar } from "./js/topBar";
// const topbar = require('./js/topBar')

let tahun = new Date().getFullYear()

$(document).ready(function () { 
    // $("#topbar").html(topBar)
    // $("#header").html(header)
    // $("#navbar-ku").html(navBar)
    // $("#content-atas").html(contentAtas)
    // $("#centent-tengah").html(contentTengah)
    // $("#berita").html(berita)
    // $("#footer").html(footer)
    

    // let navItem = Array.from(document.querySelectorAll(".navbar .nav-link"))

    // navItem.forEach(e, i => {
    //      $(`.navbar .nav-link:nth-child(${navItem.indexOf(e) + 1})`).click(function () {
    //     $(this).addClass('active')
    // })
    // })

   

    $(window).scroll(function(){
        let height = $(window).scrollTop();

        if (height > 50) {
            
            $('#header').addClass('fixed-top')
            $('#navbar-ku').addClass('fixed-top').css('margin-top', '19vh')
        } else {
            $('#header').removeClass('fixed-top')
            $('#navbar-ku').removeClass('fixed-top').css('margin-top', '0vh')

        };

    });


    $('#slider-hero').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items:1,
        loop:true,
        margin:0,
        autoplayTimeout:5000,
        autoplayHoverPause: false,
        nav: true,
        navText: [
            "<i class='fas fa-angle-left'><i>",
            "<i class='fas fa-angle-right'><i>",
        ],
        navContainer: "#slider-hero-nav"

    });

    $('#slider-dok').owlCarousel({
        items:3,
        loop:true,
        margin: 50,
        nav: true,
        navText: [
            "<i class='fas fa-angle-left'><i>",
            "<i class='fas fa-angle-right'><i>",
        ],
        navContainer: ".dok-slider"

    });

});

const topBar = `
    <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <ul class="top-contact">
                        <a href="http://">
                            <li><i class="fa-solid fa-bullhorn fa-beat"></i> PPDB TA 2020/2021 Telah Dibuka!</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    `

const header = `
<div class="row">
            <div class="col-md-8">
                <div class="brand">
                    <img src="assets/logo.png" style="height: 80px; width: 80px; margin-right: 10px;"></>
                    <div class="col">
                    <a href="#">
                        <h3>SMP NEGERI 1 RENDANG</h3>
                    </a>
                        <p>Maju, Maju, Maju</p>
                    </div>
                    
                </div>
            </div>

            <div class="col-md-4 induk-search">
               <div class="searchBox">
                <form action="get">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Cari.." id="input-cari" aria-label="Cari">
                        <button class="btn tombol-cari" type="button" id="tombol-cari" aria-label="Tombol Cari" ><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
               </div>
            </div>
        </div>
        
        `

const navBar =  `
<div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  navbar-ku-1" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Beranda</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="space-travel.html" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Profil
                        </a>
                        <ul class="dropdown-menu" >
                            <li><a class="dropdown-item" href="space-travel.html">Sejarah</a></li>
                            <li><a class="dropdown-item" href="space-travel.html">Visi & Misi</a></li>
                            <li><a class="dropdown-item" href="space-travel.html">Alamat</a></li>
                            
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Data Sekolah
                        </a>
                        <ul class="dropdown-menu" >
                            <li><a class="dropdown-item" href="#">Guru</a></li>
                            <li><a class="dropdown-item" href="#">Staff</a></li>
                            
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Dokumentasi</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Informasi
                        </a>
                        <ul class="dropdown-menu" >
                            <li><a class="dropdown-item" href="#">Pengumuman</a></li>
                            <li><a class="dropdown-item" href="#">Berita</a></li>
                            <li><a class="dropdown-item" href="#">Artikel</a></li>
                            <li class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Lainnya..</a></li>

                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Kontak</a>
                    </li>
                </ul>
            </div>
        </div>
`

const contentAtas = `
<div class="row">
            <div class="col-lg-12">
                <div class="content-atas pt-4">
                    <div class="card-atas shadow">
                        <div class="icon-atas">
                            <i class="fa-solid fa-id-card"></i>
                        </div>
                        <div class="isi-atas">
                            <h4>Profile</h4>
                            <p>Profile lengkap tentang SMP Negeri 1 Rendang</p>
                            <button class="btn tombol-isi-atas" type="button" id="tombol-hero">Lebih Lengkap</button>
                        </div>
                    </div>
                    <div class="card-atas shadow">
                        <div class="icon-atas">
                            <i class="fa-solid fa-camera"></i>
                        </div>
                        <div class="isi-atas">
                            <h4>Dokumentasi</h4>
                            <p>Dokumentasi kegiatan SMP Negeri 1 Rendang</p>
                            <button class="btn tombol-isi-atas" type="button" id="tombol-hero">Lebih Lengkap</button>
                        </div>
                    </div>
                    <div class="card-atas shadow">
                        <div class="icon-atas">
                            <i class="fa-solid fa-newspaper"></i>
                        </div>
                         <div class="isi-atas">
                            <h4>Berita</h4>
                            <p>Berita terkini mengenai SMP Negeri 1 Rendang</p>
                            <button class="btn tombol-isi-atas" type="button" id="tombol-hero">Lebih Lengkap</button>
                        </div>
                    </div>
                    <div class="card-atas shadow">
                        <div class="icon-atas">
                            <i class="fa-solid fa-bullhorn"></i>
                        </div>
                         <div class="isi-atas">
                            <h4>Pengumuman</h4>
                            <p>Info Pengumuman SMP Negeri 1 Rendang </p>
                            <button class="btn tombol-isi-atas" type="button" id="tombol-hero">Lebih Lengkap</button>
                        </div>
                    </div>
                </div>
            </div>
            
</div>
`

const contentTengah = `
    <div class="row content-tengah">
            <div class="col-lg-12 px-5 pb-5">
                <h6 class="mb-4">Sambutan Kepala Sekolah</h6>
                <div class="row">
                        <div class="isi-tengah">
                            <div class="foto-container">
                                <img src="https://asset.balipuspanews.com/wp-content/uploads/2017/10/Juara.jpg" style="width: 300px; height: 300px;" class="foto">
                            </div>
                            
                            <div class="sambutan">
                                <div class="nama-jabatan">
                                    <h3>I Gusti Ngurah Rai</h3>
                                    <p>Kepala Sekolah SMP Negeri 1 Rendang</p>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quia placeat fuga rem veritatis qui, quis
                                    nisi, commodi eum quo ex ratione deleniti pariatur sapiente quisquam nam aspernatur exercitationem soluta.
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam cum eaque delectus excepturi beatae aut, sed quam asperiores odit voluptate facilis expedita exercitationem quasi accusamus, qui ab quisquam, repellat sequi!
                                </p>
                            </div>
                           
                        </div>
                
                   
                </div>
            </div>
        </div>
`

const berita = `
<div class="row py-4">
            <div class="col-lg-8 px-0">
                <h4>Berita/Pengumuman Terbaru</h4>
                <div class="kiri">
                    <div class="highlight-berita">
                        <img src="https://asset.balipuspanews.com/wp-content/uploads/2017/10/Juara.jpg" style="height: 150px; width: 250px;">
                        <div class="isi-berita">
                            <h4>
                                Judul
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptatum adipisci reprehenderit, nemo ab sunt aperiam soluta accusamus beatae illo dolore veritatis? lebih lanjut...</p>

                        </div>
                    </div>
                    <div class="highlight-berita">
                        <img src="https://asset.balipuspanews.com/wp-content/uploads/2017/10/Juara.jpg" style="height: 150px; width: 250px;">
                        <div class="isi-berita">
                            <h4>
                                Judul
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptatum adipisci reprehenderit, nemo ab sunt aperiam soluta accusamus beatae illo dolore veritatis? lebih lanjut...</p>

                        </div>
                    </div>
                    <div class="highlight-berita">
                        <img src="https://asset.balipuspanews.com/wp-content/uploads/2017/10/Juara.jpg" style="height: 150px; width: 250px;">
                        <div class="isi-berita">
                            <h4>
                                Judul
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptatum adipisci reprehenderit, nemo ab sunt aperiam soluta accusamus beatae illo dolore veritatis? lebih lanjut...</p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <h5>Pengumuman</h5>
                <div class="kanan mt-5" id="style-2">
                    <div class="list-berita">
                        <h6>Pengumuman 1</h6>
                        <p>30 Mei 2022</p>
                        <hr>
                    </div>
                    <div class="list-berita">
                        <h6>Pengumuman 1</h6>
                        <p>30 Mei 2022</p>
                        <hr>
                    </div>
                    <div class="list-berita">
                        <h6>Pengumuman 1</h6>
                        <p>30 Mei 2022</p>
                        <hr>
                    </div>
                    <div class="list-berita">
                        <h6>Pengumuman 1</h6>
                        <p>30 Mei 2022</p>
                        <hr>
                    </div>
                    
                </div>
            </div>
        </div>
`

const footer = `
<div class="container">
            
            <div class="row d-flex justify-content-center">
    
                <!--Logo-->
                <div class="row px-5 pt-5 text-center">
                    <div>
                    <a href="#" style="text-decoration: none; color: white;" >
                        <img src="assets/logo.png" style="width: 80px; height: 80px ;">
                        <div class="col mt-3">
                                <h4>SMP NEGERI 1 RENDANG</h4>
                                <p style="font-size: 15px;">Maju, Maju, Maju</p>
                                </div>
                    </a>
                    </div>
                </div>
                <!--Akhir logo-->
                
                <div class="row d-flex justify-content-between">
                    <!--Maps-->
                    <div class="col-lg-4 pt-4 d-flex justify-content-center px-0">
                        <div class="mapouter shadow-lg">
                            <div class="gmap_canvas">
                    
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d202599.0651160658!2d115.52406500000001!3d-8.427661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd21b9ee424ab91%3A0x408b2b9334cdb611!2sSMP%20Negeri%201%20Rendang!5e1!3m2!1sen!2sus!4v1653788055024!5m2!1sen!2sus"
                                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="330" height="240"
                                    style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                    id="gmap_canvas"></iframe>
                                <a href="https://123movies-to.org"></a><br>
                                <style>
                                    .mapouter {
                                        position: relative;
                                        text-align: right;
                                        height: 240px;
                                        width: 330px;
                    
                                    }
                                </style><a href="https://www.embedgooglemap.net"></a>
                                <style>
                                    .gmap_canvas {
                                        overflow: hidden;
                                        background: none !important;
                                        height: 240px;
                                        width: 330px;
                                        border-radius: 10px;
                                    }
                                </style>
                            </div>
                        </div>
                    </div>
                    <!--Maps-->
                    
                    <!--Menu-->
                    <div class="col-lg-2 pt-4 px-0">
                        <h4>Menu</h4>
                        <div class="mt-3">
                            <ul>
                                <li>
                                    <a href="" target="blank" class="nonLink">
                                        Beranda
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="blank" class="nonLink">
                                        Profil
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="blank" class="nonLink">
                                        Data Sekolah
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="blank" class="nonLink">
                                        Dokumentasi
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="blank" class="nonLink">
                                        Informasi
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="blank" class="nonLink">
                                        Kontak
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--AKhir Menu-->
                    
                    <!--Informasi-->
                    <div class="col-lg-2 pt-4 px-0">
                        <h4>Informasi</h4>
                        <div class="mt-3">
                            <ul>
                                <li>
                                    <a href="" target="blank" class="nonLink">
                                        Pengumuman
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="blank" class="nonLink">
                                        Berita
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="blank" class="nonLink">
                                        Artikel
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--AKhir Informasi-->
                    
                    <!--Social-->
                    <div class="col-lg-2 pt-4 px-0">
                        <h4 class="mb-3">Ikuti Kami</h4>
                        <span>
                            <a href="https://www.facebook.com/" target="blank" class="nonLink">
                                <i class="fab fa-2x fa-facebook-square me-2"></i>
                            </a>
                    
                            <a href="https://www.instagram.com/" target="blank" class="nonLink">
                                <i class="fab fa-2x fa-instagram-square me-2"></i>
                            </a>
                    
                            <a href="https://www.twitter.com/" target="blank" class="nonLink">
                                <i class="fab fa-2x fa-twitter-square me-2"></i>
                            </a>
                    
                            <a href="https://www.youtube.com/" target="blank" class="nonLink">
                                <i class="fab fa-2x fa-youtube-square me-2s"></i>
                            </a>
                        </span>
                        <h4 class="mb-3 mt-5">Kontak Kami</h4>
                        <div>
                            <span>
                                <a href="tel:+6285858603320" class="nonLink"><i class="fa-solid fa-phone me-1"></i>
                                    0858-5860-3320
                                </a>
                            </span>
                            <span>
                                <a href="mailto: info@smpn1rendang.sch.id" class="nonLink"><i class="fa-solid fa-envelope me-1"></i>
                                    info@smpn1rendang.sch.id
                                </a>
                            </span>
                            <span>
                                <a href="https://goo.gl/maps/Zbicv13wvSZmuDF58" target="_blank" class="nonLink"><i class="fa-solid fa-location-dot me-1"></i>
                                    Jl. Gn. Agung Besakih Singarata No.69, Rendang, Kec. Rendang, Kabupaten Karangasem, Bali 80863, Indonesia
                                </a>
                            </span>
                        </div>
                    
                    </div>
                    <!--Akhir Social-->
                </div>

               
            </div>
    
            <!--Copy-->
            <div class="row p-4 text-center">
                <div class="col-lg-12">
                    <hr>
                    <div class="copy mt-4">
                        Hak Cipta &copy; ${tahun} - SMP Negeri 1 Rendang
                    </div>
                </div>
            </div>
            <!--Akhir Copy-->
    
        </div>
`



 
