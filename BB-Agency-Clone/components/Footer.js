function Footer() {
  return (
    <footer className="bg-white">
      <div className="grid grid-cols-2 gap-20 md:grid-cols-5">
        {/* 1st Box */}
        <div className="space-y-8 hidden md:block">
          <div className="w-10 h-10 bg-green-500"></div>
          <div className="space-y-2">
            <p>We challange core assumptions.</p>
            <p>info@bb.agency</p>
          </div>
        </div>

        {/* 2nd Box */}
        <div className="text-xl space-y-8">
          <h2>What we do</h2>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Work</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="text-xl space-y-8">
          <h2>Who we are</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Insights</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className="text-xl space-y-8">
          <h2>Work</h2>
          <ul className="space-y-2">
            <li>Sendlane</li>
            <li>Teachable</li>
            <li>ShipBob</li>
            <li>Justuno</li>
            <li>Haystack</li>
            <li>See all</li>
          </ul>
        </div>
        <div className="text-xl space-y-8">
          <h2>Work</h2>
          <ul className="space-y-2">
            <li>Dribbble</li>
            <li>Instagram</li>
            <li>Behance</li>
            <li>Facebook</li>
            <li>Clutch</li>
            <li>Twitter</li>
            <li>Medium</li>
          </ul>
        </div>
      </div>

      <p className="pt-16 text-gray-700 text-md">
        © BB Agency 2022. All rights reserved. Privacy policy
      </p>
    </footer>
  );
}

export default Footer;
