let progress = document.getElementById('progressbar');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', e=> {
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
})


// -- cd player -- 

const presentationAlbumGallery = document.querySelector('.presentation__album-gallery');
const presentationAlbum = document.querySelector('.presentation__album');
const albumImage = document.querySelector('.presentation__album-image');
const cdCore = document.querySelector('.presentation__album-cd-core');

// <a class="cta-link" href="">


// presentationAlbumGallery.addEventListener('mouseover', (e)=> {
// 	cdCore.style.display = 'flex';
// })

// --- header animation ---

const menuBurger = document.querySelector('.menu-icon-burger');
const menuBtnOpen = document.getElementById('menuBtnOpen');
const menuBtnClose = document.getElementById('menuBtnClose');
const navLinkA = document.getElementById('navListA');
const navLinkB = document.getElementById('navListB');
const navLinkC = document.getElementById('navListC');
const navLinkD = document.getElementById('navListD');
let navWrap = document.getElementById('navWrap');

menuBurger.addEventListener('click', (e)=> {
		menuBtnOpen.style.display = 'none';
		menuBtnClose.style.display = 'block';
		navLinkA.style.display = 'block';
		navLinkB.style.display = 'block';
		navLinkC.style.display = 'block';
		navLinkD.style.display = 'block';
		
	
	
})

menuBtnClose.addEventListener('mouseover', (e)=> {
		menuBtnClose.src = 'images/menu-7orange.png';
		navLinkA.style.display = 'none';
		navLinkB.style.display = 'none';
		navLinkC.style.display = 'none';
		navLinkD.style.display = 'none';
		navWrap.style.display = 'none';

	
	
})