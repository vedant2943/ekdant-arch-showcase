import isoImage from "@/assets/iso-certificate.jpg";

const IsoCertificate = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary p-8">
      <div className="max-w-4xl shadow-lg rounded-lg overflow-hidden">
        <img
          src={isoImage}
          alt="ISO 9001:2015 Certificate"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default IsoCertificate;