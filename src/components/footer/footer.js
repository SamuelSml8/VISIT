const footer = document.querySelector('.footer')

footer.innerHTML = `
<div class="container-footer">
<div class="part-1-footer">
  <div class="section-footer footer-display">
    <h3>CONTACT</h3>
    <p>Cl. 16 #55-129, Guayabal</p>
    <p>Medellín</p>
    <p>Antioquia</p>
    <p>30056778902</p>
  </div>

  <div class="section-footer footer-display">
    <h3>RECENT POST</h3>
    <a href="" class="link-item-footer">Places</a>
    <a href="" class="link-item-footer">Hotels</a>
    <a href="" class="link-item-footer">Events</a>
    <a href="" class="link-item-footer">Food & Drinks</a>
  </div>

  <div class="section-footer">
    <div class="map-footer">
      <div style="width: 100%">
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=800&amp;hl=es&amp;q=Riwi%20Medell%C3%ACn+(VISIT)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ><a href="https://www.gps.ie/car-satnav-gps/"
            >Car Navigation Systems</a
          ></iframe
        >
      </div>

      <img src="/public/img/logoM.png" alt="" class="logo-footer" />
    </div>
  </div>

  <div class="section-footer">
    <h3 class="footer-display">FOLLOW US</h3>
    <input
      type="text"
      placeholder="Email"
      class="input-footer footer-display"
    />

    <div class="link-social-footer">
      <i class="ri-instagram-fill"></i>
      <i class="ri-facebook-fill"></i>
      <i class="ri-google-fill"></i>
    </div>
  </div>
</div>
</div>
`

const copy = document.querySelector('.copy-rights')

copy.innerHTML = `
Copy Rights | <span class="visit-name">VISIT</span> | 2024. All Right
Reserved
`