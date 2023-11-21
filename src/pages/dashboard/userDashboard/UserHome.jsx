import { MdRestaurantMenu } from "react-icons/md";
import { BsShop, BsTelephoneOutboundFill } from "react-icons/bs";
import picture from "../../../assets/others/profile.png";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="text-white">
      <div className="grid grid-cols-1  sm:grid-cols-3 gap-3 lg:gap-4 xl:gap-6 ">
        <div className="flex items-center justify-center bg-red-400">
          <div className="h-[90px] sm:h-[120px] lg:h-[150px] xl:h-[180px] flex items-center gap-5">
            <MdRestaurantMenu className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
            <div className="lg:space-y-2">
              <p className="text-lg sm:text-xl xl:text-2xl tracking-widest">
                Menu
              </p>
              <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold">
                205
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-yellow-400">
          <div className="h-[90px] sm:h-[120px] lg:h-[150px] xl:h-[180px] flex items-center gap-5">
            <BsShop className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
            <div className="lg:space-y-2">
              <p className="text-lg sm:text-xl xl:text-2xl tracking-widest">
                Shop
              </p>
              <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold">
                103
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-pink-400">
          <div className="h-[90px] sm:h-[120px] lg:h-[150px] xl:h-[180px] flex items-center gap-5">
            <BsTelephoneOutboundFill className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
            <div className="lg:space-y-2">
              <p className="text-lg sm:text-xl xl:text-2xl tracking-widest">
                Contact
              </p>
              <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold">03</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:flex mt-10 md:min-h-[60vh]">
        <div className="flex-1 bg-blue-500 py-16">
          <div className="h-full flex flex-col items-center justify-center">
            <img
              className="w-48 h-48 mb-6 rounded-full border-2 border-blue-300"
              src={picture}
              alt=""
            />
            <h3 className="text-3xl font-bold">{user?.displayName}</h3>
            <p className="font-medium">{user?.email}</p>
          </div>
        </div>
        <hr className="h-1 bg-slate-950" />

        <div className="flex-1 flex flex-col items-center justify-center bg-blue-400 py-16">
          <div className="f">
            <h3 className="text-4xl font-semibold">Your Activities</h3>
            <h3 className="text-2xl font-medium mt-5">Orders : 6</h3>
            <h3 className="text-2xl font-medium">Reviews : 2</h3>
            <h3 className="text-2xl font-medium">Bookings : 1</h3>
            <h3 className="text-2xl font-medium">Payment : 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
