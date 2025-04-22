import React from "react";

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-xl shadow p-4 ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className, ...props }) => (
  <button className={`bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 ${className}`} {...props}>
    {children}
  </button>
);

export default function App() {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-800">Veteran Roots Lawncare</h1>
        <p className="text-lg text-green-700 mt-2">Proudly Veteran-Owned & Operated</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-green-900 mb-2">Our Mission</h2>
            <p className="text-green-800">
              At Veteran Roots, we bring military precision to your lawn. Our mission is to serve our community with integrity, discipline, and hard work—values we carried in uniform.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-green-900 mb-2">Services</h2>
            <ul className="space-y-2 text-green-800">
              <li>✅ Lawn Mowing & Edging</li>
              <li>✅ Seasonal Cleanups</li>
              <li>✅ Mulching & Planting</li>
              <li>✅ Fertilization Plans</li>
              <li>✅ Veteran & Senior Discounts</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="bg-green-100 p-6 rounded-2xl shadow-md mb-10">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Why Choose Us?</h2>
        <p className="text-green-800 mb-2">
          We treat your yard like it's our own—because that's the standard we live by. When you hire a veteran, you hire commitment, reliability, and excellence.
        </p>
        <p className="text-green-800">
          Our team is prompt, professional, and passionate about quality service. Whether you're looking for routine maintenance or a full backyard transformation, we’ve got your six.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <span className="text-green-700 text-2xl mb-2 block">“</span>
              <p className="text-green-800 italic">Top-tier service and super respectful team. My yard has never looked better!</p>
              <p className="text-green-700 mt-2 font-semibold">– Michelle R.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <span className="text-green-700 text-2xl mb-2 block">“</span>
              <p className="text-green-800 italic">You can tell they care. Always on time, always professional.</p>
              <p className="text-green-700 mt-2 font-semibold">– James K.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <span className="text-green-700 text-2xl mb-2 block">“</span>
              <p className="text-green-800 italic">Hiring a veteran was a no-brainer—and these guys delivered!</p>
              <p className="text-green-700 mt-2 font-semibold">– Clara T.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img src="https://via.placeholder.com/300x200?text=Lawn+Mowing" alt="Lawn Mowing" className="rounded-xl shadow-sm" />
          <img src="https://via.placeholder.com/300x200?text=Mulching" alt="Mulching" className="rounded-xl shadow-sm" />
          <img src="https://via.placeholder.com/300x200?text=Clean+Edging" alt="Clean Edging" className="rounded-xl shadow-sm" />
        </div>
      </section>

      <section className="mb-12 bg-green-100 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-green-900 mb-4 text-center">Book a Free Quote</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg border border-green-300"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg border border-green-300"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded-lg border border-green-300"
            required
          />
          <textarea
            placeholder="Tell us what you need help with..."
            className="w-full p-3 rounded-lg border border-green-300"
            rows="4"
            required
          ></textarea>
          <Button type="submit" className="w-full">Submit Request</Button>
        </form>
      </section>

      <footer className="text-center mt-10 space-y-2">
        <h3 className="text-xl font-semibold text-green-900">Get In Touch</h3>
        <p className="text-green-800">📞 (555) 123-4567</p>
        <p className="text-green-800">📧 contact@veteranroots.com</p>
        <Button className="mt-4">Request a Free Quote</Button>
      </footer>
    </div>
  );
}
