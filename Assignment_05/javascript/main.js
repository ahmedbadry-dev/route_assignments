const toggleBtn = document.getElementById('toggle-btn');
const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const asideElement = document.getElementById('aside');
const sidebarOverlay = document.getElementById('sidebar-overlay');

// Desktop Collapse / Expand Toggle (Active only on desktop screens > 1024px)
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    if (window.innerWidth > 1024) {
      asideElement.classList.toggle('closed');
    }
  });
}

// Mobile Sidebar Open / Close Functions
function openMobileSidebar() {
  if (asideElement) {
    asideElement.classList.add('mobile-open');
  }
  if (sidebarOverlay) {
    sidebarOverlay.classList.add('active');
  }
  document.body.style.overflow = 'hidden';
}

function closeMobileSidebar() {
  if (asideElement) {
    asideElement.classList.remove('mobile-open');
  }
  if (sidebarOverlay) {
    sidebarOverlay.classList.remove('active');
  }
  document.body.style.overflow = '';
}

function toggleMobileSidebar() {
  if (asideElement && asideElement.classList.contains('mobile-open')) {
    closeMobileSidebar();
  } else {
    openMobileSidebar();
  }
}

// Attach event listeners
if (mobileToggleBtn) {
  mobileToggleBtn.addEventListener('click', toggleMobileSidebar);
}

if (closeSidebarBtn) {
  closeSidebarBtn.addEventListener('click', closeMobileSidebar);
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', closeMobileSidebar);
}

// Close mobile sidebar on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileSidebar();
  }
});

// Close mobile drawer if resized back to tablet/desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMobileSidebar();
  }
});


//search input width increase
const searchIcon = document.getElementById('search-icon');
const searchInput = document.querySelector('.header-search input');

// if it orady open dont add action agin 
searchIcon.addEventListener('click', () => {
  searchInput.style.width = '100%';
  searchInput.focus();
});

searchInput.addEventListener('blur', () => {
  searchInput.style.width = '0px';
});

// payment animation

const paymentAnimation = document.getElementById("payment-animation");
const onlinePaymentsAnimation = document.getElementById(
  "online-payments-animation"
);

if (paymentAnimation) {
  lottie.loadAnimation({
    container: paymentAnimation,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./assets/animations/credit-card-reveal.json",
  });
}

if (onlinePaymentsAnimation) {
  lottie.loadAnimation({
    container: onlinePaymentsAnimation,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./assets/animations/online-payments.json",
  });
}
