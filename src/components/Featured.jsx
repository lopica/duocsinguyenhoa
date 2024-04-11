export default function Featured() {
  return (
    <section className="featured">
      <div className="container">
        <h2 className="featured__heading">Được công nhận bởi</h2>
        <div className="featured__logos">
          <img src="ministry_of_health.png" alt="ministry of health logo" />
          <img src="tiktok_shop.png" alt="tiktok shop logo" />
          <img src="kiot_viet.png" alt="kiot viet logo" /> 
          <img src="shopee.png" alt="shopee logo" />
          {/* <img src="tiki.png" alt="tiki logo" /> */}
          {/* <img src="long_chau.png" alt="long chau logo" /> */}
        </div>
      </div>
    </section>
  );
}
