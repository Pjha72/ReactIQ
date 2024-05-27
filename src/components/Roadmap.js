const Roadmap = () => {
  return (
    <>
      <section class="text-gray-600 body-font mx-20">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-10">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-[20px] text-2xl font-medium title-font text-gray-900">
                Road Map
              </h1>
              {/* <div class="h-1 w-20 bg-indigo-500 rounded"></div> */}
            </div>
          </div>
          <div class="flex flex-wrap -m-4 mx-4">
            <div class="xl:w-1/4 md:w-1/2 p-4 ">
              <div class="bg-gray-100 rounded shadow-inner">
                <img
                  class="h-40 rounded-lg w-full object-cover object-center mb-6"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgJpzGU63UmNb8yhqMe_MKg23N6e23qaidX7pjHW9yKY3qxfuT0HvZj75nw&s"
                  alt="content"
                />
                
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 rounded shadow-inner">
                <img
                  class="h-40 rounded-lg w-full object-cover object-center mb-6"
                  src="https://blog.logrocket.com/wp-content/uploads/2023/05/guide-hiding-elements-css-nocdn.png"
                  alt="content"
                />
                
                
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 rounded shadow-inner" >
                <img
                  class="h-40 rounded-lg w-full object-cover object-center mb-6"
                  src="https://media.istockphoto.com/id/1372764637/photo/coding-language-development-icon-on-yellow-background-software-development-concept.webp?b=1&s=170667a&w=0&k=20&c=rLpciCTbJBuOa866w4RSUNpMeFDwKkO-HffenRrUOfo="
                  alt="content"
                />
                
               
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 rounded shadow-inner">
                <img
                  class="h-40 rounded-lg w-full object-cover object-center mb-6"
                  src="https://i0.wp.com/socialdhara.com/wp-content/uploads/2023/09/React.JS.jpg"
                  alt="content"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Roadmap;
