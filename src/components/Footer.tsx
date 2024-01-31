
const Footer: React.FC = () => {
  return (
    <footer className="mt-12 lg:mt-20 p-6 flex flex-col items-center">
      <div className="flex justify-center sm:justify-between sm:w-40 lg:justify-between w-full lg:w-60 mb-8">
        <img role="button" src="../../public/foter/fb.png" alt="fb" />
        <img role="button" src="../../public/foter/insta.png" alt="insta" />
        <img role="button" src="../../public/foter/x.png" alt="x" />
        <img role="button" src="../../public/foter/Linkedin.png" alt="ld" />
      </div>
      <span className="text-gray-500">
        Copyright ©2020 All rights reserved{" "}
      </span>
    </footer>
  );
};

export default Footer;
