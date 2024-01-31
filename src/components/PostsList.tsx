const PostsList = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="md:w-1/2 p-6 pt-0 sm:pl-0">
        <h3 className="font-bold text-xl mb-4">
          Making a design system from scratch
        </h3>
        <div className="mb-3 flex justify-start">
          <span>12 Feb 2020</span>
          <span className="h-21 border-r border-black mr-7 ml-7"></span>
          <span className="text-gray-500">Design, Pattern</span>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className="md:w-1/2 p-6 sm:pl-0">
        <h3 className="font-bold text-xl mb-4">
          Creating pixel perfect icons in Figma
        </h3>
        <div className="mb-3 flex justify-start">
          <span>12 Feb 2020</span>
          <span className="h-21 border-r border-black mr-7 ml-7"></span>
          <span className="text-gray-500">Figma, Icon Design</span>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

export default PostsList;
