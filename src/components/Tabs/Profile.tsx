import { useState, type ChangeEvent } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [banner, setBanner] = useState("https://placehold.co/1500x400");

  const [profileUrl, setProfileUrl] = useState("https://placehold.co/400x400");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setBanner(URL.createObjectURL(file));
    }
  };
  const handleProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative -mx-8 -mt-8">
      <div className="relative">
        <img src={banner} alt="bg image" className="w-full h-60 object-cover" />

        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 ">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleChange}
          />
        </button>
      </div>

      <div className="flex items-center ml-4 mt-8 ">
        <img
          src={profileUrl}
          alt="profile-pic"
          className="w-40 h-40 object-cover rounded-full border-white relative "
        />
        <button className="absolute z-10 mt-[9rem]-ml-40 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 ">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        {/* Channel Details */}

        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold ml-16">Retr0 World</h1>
          <p className="ml-16 font-bold">20k Views </p>
          <p className="mt-2 ml-8">
            Welcome to Retr0 World, your ultimate destination for all things
            retro gaming! Dive into our extensive collection of classic games,
            consoles, and memorabilia. Whether you're a seasoned gamer or new to
            the retro scene, we've got something for everyone. Join our
            community and relive the golden era of gaming!
          </p>
          <button className="mt-4 ml-16 bg-green-600 py-2 px-4 rounded hover:bg-green-400">
            Subscribe
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};
export default Profile;
