export default function Hero() {
  return (
    <div className="md:max-w-[80vw] px-5 mt-10 gap-7 grid w-full mx-auto">
      <h2
        className="bg-gradient-to-br dark:from-white
       from-black from-30% dark:to-white/40 to-black/40
        bg-clip-text  text-5xl font-medium text-gray-200 text-center
         sm:text-5xl md:text-6xl lg:text-7xl "
      >
        MyLedger: Blockchain-Based Portfolio
      </h2>
      <h3 className="text-lg tracking-tight text-gray-400 md:text-xl text-balance md:w-9/12 w-11/12 mx-auto text-center">
        Secure, tamper-proof storage and verification of educational
        qualifications, work experience, and professional achievements using
        blockchain technology.
      </h3>
    </div>
  );
}
