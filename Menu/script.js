const materi = {
  menu: {
    Cireng: {
      variants: ["Ayam Jamur Original", "Ayam Jamur Pedas","Keju"],
      price: "Rp 1.000",
      images: [
        "img/cireng1.png",
        "img/cireng3.png",
        "img/cireng2.png"
      ]
    },
    CilokAyam: {
      variants: ["Original", "Kuah Pedas", "Oseng Pedas"],
      price: "Rp 5.000",
      images: [
        "img/cilok1.png",
        "img/cilok2.png",
        "img/cilok3.png"
      ]
    },
    Mochi: {
      variants: ["Cokelat", "Blueberry", "Strawerry", "Cookies and Cream"],
      price: "Rp 3.000",
      images: [
        "img/mochi.jpg"
      ]
    }
  }
};

function showContent(stage, type) {
  const contentId = `${stage}-content`;
  const titleId = `${stage}-title`;
  const contentEl = document.getElementById(contentId);
  const titleEl = document.getElementById(titleId);
  const cardEl = contentEl.closest(".card");
  const buttonContainer = cardEl.querySelector(".pilihan");

  titleEl.innerText = `Menu ${type}`;

const imagesHtml = materi[stage][type].images
  .map(src => `<img src="${src}" alt="${type}" class="menu-image">`)
  .join("");

const gridClass = materi[stage][type].images.length === 3 ? "triangle-grid" : "";

const variantsHtml = materi[stage][type].variants
  .map(name => `<li>${name}</li>`)
  .join("");

  contentEl.classList.add("show");
  buttonContainer.classList.add("hidden");

  contentEl.innerHTML = `
  <div class="menu-images ${gridClass}">
    ${imagesHtml}
  </div>
  <ul>
    ${variantsHtml}
  </ul>
  <div class="back-button" onclick="resetContent('${stage}')">← Kembali</div>
`;
}



function resetContent(stage) {
  const contentId = `${stage}-content`;
  const titleId = `${stage}-title`;
  const contentEl = document.getElementById(contentId);
  const titleEl = document.getElementById(titleId);
  const cardEl = contentEl.closest(".card");
  const buttonContainer = cardEl.querySelector(".pilihan");

  contentEl.classList.remove("show");
  setTimeout(() => {
    contentEl.innerHTML = "";
    titleEl.innerText = "Pilih jenis menu:";
    buttonContainer.classList.remove("hidden");
  }, 300);
}


  