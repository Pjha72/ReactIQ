import Top from "../assests/top.png";
import JS from "../assests/js.png";
import RIQ from "../assests/75.png";

const Studyplan = () => {
  return (
    <>
      <section class="text-gray-600 body-font mx-20">
        <div class="container px-5 mx-auto">
          <div class="flex flex-wrap w-full mb-10">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-[20px] text-2xl font-medium title-font text-gray-900">
                Study Plan
              </h1>
              {/* <div class="h-1 w-20 bg-indigo-500 rounded"></div> */}
            </div>
          </div>
          <div class="flex flex-wrap -m-2 mx-4">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="Top Interview Question"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                  src={Top}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Top Interview 150
                  </h2>
                  <p class="text-gray-500">Must-do List for Interview Prep</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="JavaScript Interview Question"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                  src={JS}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    30 Days of JavaScript
                  </h2>
                  <p class="text-gray-500">Learn JS Basic with 30 Qs</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                  src={RIQ}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    ReactIQ 75
                  </h2>
                  <p class="text-gray-500">Ace Coding Interview with 75 Qs</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="Top Interview Question"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                  src={Top}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Top Interview 150
                  </h2>
                  <p class="text-gray-500">Must-do List for Interview Prep</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="JavaScript Interview Question"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                  src={JS}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    30 Days of JavaScript
                  </h2>
                  <p class="text-gray-500">Learn JS Basic with 30 Qs</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                  src={RIQ}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    ReactIQ 75
                  </h2>
                  <p class="text-gray-500">Ace Coding Interview with 75 Qs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studyplan;
