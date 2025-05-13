'use client';

export default function MapSection() {
  return (
    <section className="w-full mt-12">
      <div className="px-6 md:px-[140px]">
        <h2 className="font-roboto font-bold text-[32px] text-black text-center mb-6">
          Encontre-nos Aqui
        </h2>

        <div className="w-full h-[400px] sm:h-[500px] rounded-[43px] overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.81169425342!2d-46.68460592483852!3d-23.682691178716663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4fe372a457ed%3A0x50fac98016720c57!2sAv.%20Nossa%20Sra.%20do%20Sabar%C3%A1%2C%203310%20-%20Vila%20Emir%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004447-010!5e0!3m2!1sen!2sbr!4v1747057561907!5m2!1sen!2sbr"
            width="100%"
            height="100%"
            loading="lazy"
            className="w-full h-full border-0"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
