const Blog = () => {
  return (
    <>
      <h3 className="font-bold text-2xl">Blog</h3>
      {[1, 2, 3, 4].map((el) => (
        <div key={el.toString()} className="w-1/1 mt-12">
          <h3 className="font-bold text-xl mb-4">
          UI Interactions of the week
          </h3>
          <div className="mb-3 flex justify-start">
            <span>12 Feb 2019</span>
            <span className="h-21 border-r border-black mr-7 ml-7"></span>
            <span className="text-gray-500">Express, Handlebard</span>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      ))}
    </>
  );
};

export default Blog;
